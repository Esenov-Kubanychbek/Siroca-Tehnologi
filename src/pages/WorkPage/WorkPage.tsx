import { usersApi } from "../../shared/api";
import { Dashboard } from "../../widgets";
import { Administration } from "../../widgets";
import styles from "./WorkPage.module.scss";
import { FC, useEffect } from "react";

export const WorkPage: FC = () => {
    const fetchData = usersApi();
    useEffect(() => {
        fetchData.getting();
    }, []);
    return (
        <div className={styles.WorkPage}>
            <Dashboard />
            <div className={styles.Inner}>
                <Administration />
            </div>
        </div>
    );
};
