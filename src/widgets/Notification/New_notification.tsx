import Notification_single from "./caunting_notification/Notification_single";
import styles from "./new_notification.module.scss";

const New_notification: React.FC<{ active: boolean }> = ({ active }) => {
   return (
      <div className={styles.newNotificationCont}>
         <div className={styles.newNotificationContH4}>
            <h4 className={active ? styles.headerH4NewNotification : styles.headerH4NewNotification2}>
               {active ? "Новые" : "Не прочитанные"}
            </h4>
         </div>
         <Notification_single active={active} />
         <Notification_single active={active} />
         <Notification_single active={active} />
      </div>
   );
};

export default New_notification;
