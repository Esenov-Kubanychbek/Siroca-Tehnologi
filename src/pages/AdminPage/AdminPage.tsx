import styles from "./AdminPage.module.scss";
import { Dashboard, HeaderBottom, HeaderTop } from "../../widgets";
import { FC } from "react";

export const AdminPage: FC = () => {
    return (
        <div className={styles.AdminPage}>
            <Dashboard />
            <div className={styles.Inner}>
                <HeaderTop role="admin" />
                <HeaderBottom role="admin" />
            </div>
        </div>
    );
};
