import styles from "./NewNotification.module.scss";
import { NotificationSingle } from "../../";
import { FC } from "react";

export const NewNotification: FC<{ active: boolean }> = ({ active }) => {
    return (
        <div className={styles.newNotificationCont}>
            <div className={styles.newNotificationContH4}>
                <h4 className={active ? styles.headerH4NewNotification : styles.headerH4NewNotification2}>
                    {active ? "Новые" : "Не прочитанные"}
                </h4>
            </div>
            <NotificationSingle active={active} />
            <NotificationSingle active={active} />
            <NotificationSingle active={active} />
        </div>
    );
};
