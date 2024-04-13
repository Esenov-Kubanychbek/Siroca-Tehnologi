import styles from "./People.module.scss";
import "../Style.scss";
import { FC } from "react";

export const People: FC = () => {
    return (
        <div className={styles.People}>
            <div className={styles.Name}>
                <p>Заявитель: </p>
                <p>Менеджер: </p>
            </div>
            <div className={styles.Data}>
                <p>Иван Иванов</p>
                <p>Асан Асанов</p>
            </div>
        </div>
    );
};
