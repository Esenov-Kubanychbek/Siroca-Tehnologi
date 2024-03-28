import styles from "./ManagerPage.module.scss";
import { Header } from "../../widgets";
import { FC } from "react";

export const ManagerPage: FC = () => {
    return (
        <div className={styles.ManagerPage}>
            <Header role="manager" />
        </div>
    );
};
