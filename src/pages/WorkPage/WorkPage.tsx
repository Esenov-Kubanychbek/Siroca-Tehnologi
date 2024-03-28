import { Dashboard } from "../../widgets";
import { Administration } from "../../widgets";
import styles from "./WorkPage.module.scss";
import { FC } from "react";

export const WorkPage: FC = () => {
    return (
        <div className={styles.WorkPage}>
            <Dashboard />
            <div className={styles.Inner}>
                <Administration />
            </div>
        </div>
    );
};
