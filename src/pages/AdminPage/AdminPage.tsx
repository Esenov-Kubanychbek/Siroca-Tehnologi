import styles from "./AdminPage.module.scss";
import { Dashboard, Header } from "../../widgets";
import { FC } from "react";

export const AdminPage: FC = () => {
    return (
        <div className={styles.AdminPage}>
            <Dashboard />
            <div className={styles.Inner}>
                <Header role="admin" />
            </div>
        </div>
    );
};
