import { FC } from "react";
import styles from "./NotificationSingle.module.scss";

interface INotificationSingle {
    active: boolean;
    notif: {
        created_at: string;
        form_id: null | number | string;
        made_change: string;
        task_number: string;
        text: string;
        title: string;
    };
}

export const NotificationSingle: FC<INotificationSingle> = ({ active, notif }) => {
    return (
        <div className={styles.NotificationSingle}>
            <div className={styles.HeaderBlockSingle}>
                <div className={active ? styles.HeaderBlockActive : styles.HeaderBlockAnactive}></div>
                <p className={styles.TimeOnWose}>{notif.created_at}</p>
            </div>
            <div className={styles.NotificationContent}>
                <p className={styles.NumNotification}>
                    <span className={styles.Span}>{notif.task_number.slice(14)}</span>
                    {notif.title}
                </p>
                <p className={styles.NumNotification}>
                    {notif.made_change}:{notif.text}
                </p>
            </div>
        </div>
    );
};
