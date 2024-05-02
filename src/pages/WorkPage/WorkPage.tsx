import { Dashboard } from "../../widgets";
import { Administration } from "../../widgets";
import { useDataStoreComponies } from "../../widgets/Admin/Companies/api/componiesApi";
import { jobTitleApi } from "../../widgets/Admin/JobTitles/api/jobTitleApi";
import styles from "./WorkPage.module.scss";
import { FC, useEffect } from "react";

export const WorkPage: FC = () => {
    const { getJobTitleList } = jobTitleApi();
    const { fetchDatas } = useDataStoreComponies();
    useEffect(() => {
        getJobTitleList();
        fetchDatas();
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
