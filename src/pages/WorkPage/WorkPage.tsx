import styles from "./WorkPage.module.scss";
import { Dashboard, Administration } from "@/widgets";
import { useDataStoreComponies } from "../../widgets/Admin/Companies/api/componiesApi";
import { FC, useEffect } from "react";

export const WorkPage: FC = () => {
    const { fetchDatas } = useDataStoreComponies();
    useEffect(() => {
        fetchDatas(1);
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
