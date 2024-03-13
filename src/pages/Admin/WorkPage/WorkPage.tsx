import { Dashboard } from "../../../widgets";
import { Administration } from "./../../../widgets";
import styles from "./WorkPage.module.scss";

export const WorkPage = () => {
    return (
        <div className={styles.WorkPage}>
            <Dashboard />
            <div className={styles.Inner}>
                <Administration />
            </div>
        </div>
    );
};
