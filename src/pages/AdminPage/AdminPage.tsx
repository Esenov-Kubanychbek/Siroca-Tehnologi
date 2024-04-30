import styles from "./AdminPage.module.scss";
import { Dashboard, HeaderBottom, HeaderTop } from "../../widgets";
import { FC, useEffect } from "react";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";

export const AdminPage: FC = () => {
    const fetchUsers = usersApi();
    const id = localStorage.getItem("id");
    useEffect(() => {
        fetchUsers.getOneUser(Number(id));
    }, []);
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
