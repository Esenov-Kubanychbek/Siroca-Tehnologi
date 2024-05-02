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
                        <img src="" alt="" />
                        <p className={styles.Name}>Иван Иванов</p>
                        <p className={styles.Time}>Внес изменения -12.02.24 / 13:01 </p>
                    </div>
                    <div className={styles.LogMain}>
                        <p className={styles.TypeOf}>Приоритет</p>
                        <p className={styles.Prev}>Изначально: <p>Средний</p></p>
                        <p className={styles.Prev}>Новая: <p>Высокая</p></p>
                    </div>
                </div>
            ))}
        </div>
    );
};
