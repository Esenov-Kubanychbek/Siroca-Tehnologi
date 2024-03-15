import styles from "./ManagerPage.module.scss";
import { Header } from "../../widgets";

export const ManagerPage = () => {
    return (
        <div className={styles.ManagerPage}>
            <Header role="manager" />
        </div>
    );
};
