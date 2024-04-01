import { useEffect, useState } from "react";
import ItemSettingRoles from "./ItemRoles";
import styles from "./RolesItemsRender.module.scss";
import axios from "axios";
import { axiosApi } from "../../../../../../../axiosApi";

interface IRolesRender {
    list: object;
    users: [];
    getChanges: (e: []) => void;
}

const RolesRender: React.FC<IRolesRender> = ({ list, users, getChanges }) => {
    const [usersBoxes, setUsersBoxes] = useState([])
    const [getInBoxes, setGetInBoxes] = useState([])

    const getBoxes = (e: object) => {
        let found = false
        usersBoxes.forEach((item, index) => {
            if (item.username === e.username) {
                const arr = usersBoxes
                arr[index] = e
                setUsersBoxes(arr)
                found = true;
            }
        });
        if (!found) {
            const arr = usersBoxes
            arr.push(e);
            setUsersBoxes(arr)
        }
    }

    const getRoles = async () => {
        try {
            const response = await axios.get(`${axiosApi}/users/clientpermissions/detail/`)
            setGetInBoxes(response.data.results)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getRoles()
    }, [])
    useEffect(() => {
        getChanges(usersBoxes)
    }, [usersBoxes])

    const filteredUsers = users.filter((el: object) => el.role_type === "client");
    return (
        <div className={styles.Container}>
            {filteredUsers.map((el, index) => {
                return (
                    <ItemSettingRoles
                        user={el}
                        checkBoxList={list}
                        index={index}
                        getBoxes={getBoxes}
                        inBoxList={getInBoxes ? getInBoxes : false}
                    />
                );
            })}
        </div>
    );
};

export default RolesRender;
