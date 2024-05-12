import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import styles from "./RequestLogs.module.scss";

export const RequestLogs: FC = () => {
    const fetchRequest = getOneRequestApi();
    console.log(fetchRequest.oneRequest.logs);

    return (
        <div className={styles.Logs}>
            {fetchRequest.oneRequest.logs.map((card, i) => (
                <div
                    id={card.task_number}
                    key={i}
                    className={styles.Log}
                >
                    <div className={styles.LogHeader}>
                        <img
                            src=""
                            alt=""
                        />
                        <p className={styles.Name}>{card.user}</p>
                        <p className={styles.Time}>Внес изменения {card.formatted_created_at} </p>
                    </div>
                    <div className={styles.LogMain}>
                        <p className={styles.TypeOf}>
                            Изменения:<p>{card.field}</p>
                        </p>
                        <p className={styles.Prev}>
                            Изначально: <p>{card.initially}</p>
                        </p>
                        <p className={styles.Prev}>
                            Новая: <p>{card.new.slice(0, 15) + "..."}</p>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
