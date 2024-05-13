import styles from "./Details.module.scss";
import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { priorityColor, statusColor } from "../../../../../shared/helpers";

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
                <p style={{ color: `${priorityColor(fetchData.oneRequest.priority)}` }}>
                    {fetchData.oneRequest.priority}
                </p>
                <p style={{ color: `${statusColor(fetchData.oneRequest.status)}` }}>{fetchData.oneRequest.status}</p>
            </div>
        </div>
    );
};
