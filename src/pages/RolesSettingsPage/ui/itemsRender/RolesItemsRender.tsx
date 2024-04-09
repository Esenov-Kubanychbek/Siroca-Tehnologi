import { useEffect, useState } from "react";
import ItemSettingRoles from "./ItemRoles";
import styles from "./RolesItemsRender.module.scss";
import axios from "axios";
import { BASE_URL } from "../../../../shared/variables/variables";
import { IUser } from "../../../../shared/types/userTypes";

interface IRolesRender {
    list: string[][];
    users: IUser[];
    getChanges: (e: IUser[]) => void;
}

const RolesRender: React.FC<IRolesRender> = ({ list, users, getChanges }) => {
    const [usersBoxes, setUsersBoxes] = useState<IUser[]>([]);
    const [getInBoxes, setGetInBoxes] = useState<IUser[]>([]);

    const getBoxes = (e: IUser) => {
        let found = false;
        const updatedBoxes = usersBoxes.map(item => {
            if (item.username === e.username) {
                found = true;
                return e;
            }
            return item;
        });
        if (!found) {
            updatedBoxes.push(e);
        }
        setUsersBoxes(updatedBoxes);
    };

    const getRoles = async () => {
        try {
            const responseC = await axios.get(`${BASE_URL}/users/clientpermissions/detail/`);
            const responseM = await axios.get(`${BASE_URL}/users/managerpermissions/detail/`);
            const update = [...responseC.data.results, ...responseM.data.results]
            setGetInBoxes(update);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getRoles();
    }, []);

    useEffect(() => {
        getChanges(usersBoxes);
    }, [usersBoxes]);
    
    const filteredUsers = users.filter((el: IUser) => el.role_type === "client");
    return (
        <div className={styles.Container}>
            {filteredUsers.map((el: IUser, index: number) => (
                <ItemSettingRoles
                    key={el.username}
                    user={el}
                    checkBoxList={list}
                    index={index}
                    getBoxes={getBoxes}
                    inBoxList={getInBoxes ? getInBoxes : []}
                />
            ))}
        </div>
    );
};

export default RolesRender;
