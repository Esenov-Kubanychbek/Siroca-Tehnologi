import styles from "./Details.module.scss";
import "../Style.scss";
import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const Details: FC = () => {
    const fetchData = getOneRequestApi();
    return (
        <div className={styles.Details}>
            <div className={styles.Name}>
                <p>Название заявки:</p>
                <p>Название компании:</p>
                <p>Приоритнетность:</p>
                <p>Статус заявки: </p>
            </div>
            <div className={styles.Data}>
                <p>{fetchData.oneRequest.title}</p>
                <p>{fetchData.oneRequest.company}</p>
                <p className={styles.prioritet}>{fetchData.oneRequest.priority}</p>
                <p className={styles.status}>{fetchData.oneRequest.status}</p>
            </div>
        </div>
    );
};
