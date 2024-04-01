import { HeaderBottom, HeaderTop } from "../../widgets";
import styles from "./ManagerPage.module.scss";
import { FC } from "react";

export const ManagerPage: FC = () => {
    return (
        <div className={styles.ManagerPage}>
            <HeaderTop role="manager" />
            <HeaderBottom role="manager" />
        </div>
    );
};
