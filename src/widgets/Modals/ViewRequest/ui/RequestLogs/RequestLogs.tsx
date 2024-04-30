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
<<<<<<< HEAD
                    <div>{card.text}</div>
                    <div>{card.task_number}</div>
=======
                    <div>{card.formatted_created_at}</div>
                    <div>{card.text}</div>
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                </div>
            ))}
        </div>
    );
};
