import styles from "./AdminPage.module.scss";
import { Dashboard, Header } from "../../../widgets";

export const AdminPage = () => {
    return (
        <div className={styles.AdminPage}>
            <Dashboard />
            <div className={styles.Inner}>
                <Header role="admin" />
            </div>
        </div>
    );
};
