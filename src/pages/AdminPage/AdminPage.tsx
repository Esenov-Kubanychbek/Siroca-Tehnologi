import styles from "./AdminPage.module.scss";
import { Dashboard, HeaderBottom, HeaderTop } from "../../widgets";
import { FC, useEffect } from "react";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";
import { usersRoleTypeApi } from "../../widgets/Modals/EditRequest/api/usersRoleTypeApi";

export const AdminPage: FC = () => {
    const id = localStorage.getItem("id");
    const fetchUsers = usersApi();
    const fetchRoleTypes = usersRoleTypeApi();
    useEffect(() => {
        fetchUsers.getOneUser(Number(id));
        fetchUsers.getUsersList();
    }, []);
    useEffect(() => {
        fetchRoleTypes.setClients(fetchUsers.usersList);
        fetchRoleTypes.setManagers(fetchUsers.usersList);
    }, [fetchUsers.usersList]);
    return (
        <div className={styles.AdminPage}>
            <Dashboard />
            <header className={styles.Inner}>
                <HeaderTop role="admin" />
                <HeaderBottom role="admin" />
            </header>
        </div>
    );
};
