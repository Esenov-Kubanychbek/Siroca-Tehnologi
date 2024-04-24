import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import styles from "./RequestLogs.module.scss";

export const RequestLogs: FC = () => {
    const fetchRequest = getOneRequestApi();
    return (
        <div className={styles.Logs}>
            {fetchRequest.oneRequest.logs.map((card, i) => (
                <div
                    key={i}
                    className={styles.Log}
                >
                    <div>{card.text}</div>
                    <div>{card.task_number}</div>
                </div>
            ))}
        </div>
    );
};
