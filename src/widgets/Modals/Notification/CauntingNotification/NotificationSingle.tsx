import { FC } from "react";
import styles from "./NotificationSingle.module.scss";

export const NotificationSingle: FC<{ active: boolean }> = ({ active }) => {
    return (
        <div className={styles.NotificationSingle}>
            <div className={styles.HeaderBlockSingle}>
                <div className={active ? styles.HeaderBlockActive : styles.HeaderBlockAnactive}></div>
                <p className={styles.TimeOnWose}>Изменено: 10 минут наза</p>
            </div>
            <div className={styles.NotificationContent}>
                <p className={styles.NumNotification}>
                    <span className={styles.Span}>051123 </span>
                    Интеграл ЛИС Mbank

                </p>
                <p className={styles.NumNotification}>
                Иван Иванов изменил(а) приоритет заявки
                </p>
            </div>
        </div>
    );
};
