import { useEffect, useState } from "react";
import ItemSettingRoles from "./ItemRoles";
import styles from "./RolesItemsRender.module.scss";
import axios from "axios";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { IUser } from "../../../../shared/types/userTypes";

interface IRolesRender {
    list: string[];
    users: IUser[];
    getChanges: (e: IUser[]) => void;
    navType: string;
}
interface IGeneralRoles {
    [key: string]: boolean;
}

const RolesRender: React.FC<IRolesRender> = ({ list, users, getChanges, navType }) => {
    const [usersBoxes, setUsersBoxes] = useState<IUser[]>([]);
    const [getInBoxes, setGetInBoxes] = useState<IUser[]>([]);

    const [generalManager, setGeneralManager] = useState<IGeneralRoles>();
    const [generalClient, setGeneralClient] = useState<IGeneralRoles>();

    //push the select if this select not exist in state if is exist just change val
    const getBoxes = (e: IUser) => {
        let found = false;
        const updatedBoxes = usersBoxes.map((item) => {
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

    //just get all roles from server
    const getRoles = async () => {
        try {
            const responseC = await axios.get(`${BASE_URL}/users/clientpermissions/detail/`, authToken);
            const responseM = await axios.get(`${BASE_URL}/users/managerpermissions/detail/`, authToken);
            const update = [...responseC.data.data, ...responseM.data.data];
            setGetInBoxes(update);
            console.log(update);
        } catch (error) {
            console.log(error);
        }
    };
    const getGeneralRoles = async () => {
        try {
            const responseC = await axios.get(`${BASE_URL}/users/clientpermissions/general/`, authToken);
            const responseM = await axios.get(`${BASE_URL}/users/managerpermissions/general/`, authToken);
            setGeneralManager(responseM.data);
            setGeneralClient(responseC.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRoles();
        getGeneralRoles();
    }, []);

    useEffect(() => {
        getChanges(usersBoxes);
    }, [usersBoxes]);

    const filteredUsersClient = users.filter((el: IUser) => el.role_type === "client"); //filter to client
    const filteredUsersManager = users.filter((el: IUser) => el.role_type === "manager"); //filter to manager

    return (
        <div className={styles.Container}>
            {navType === "Клиент"
                ? filteredUsersClient.map((el: IUser, index: number) => (
                      <ItemSettingRoles
                          key={el.username}
                          user={el}
                          checkBoxList={list}
                          index={index}
                          getBoxes={(e: IUser) => getBoxes(e)}
                          inBoxList={getInBoxes ? getInBoxes : []}
                          genRoles={generalClient}
                      />
                  ))
                : null}
            {navType === "Менеджер"
                ? filteredUsersManager.map((el: IUser, index: number) => (
                      <ItemSettingRoles
                          key={el.username}
                          user={el}
                          checkBoxList={list}
                          index={index}
                          getBoxes={(e: IUser) => getBoxes(e)}
                          inBoxList={getInBoxes ? getInBoxes : []}
                          genRoles={generalManager}
                      />
                  ))
                : null}
        </div>
    );
};

export default RolesRender;
