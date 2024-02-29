import styles from "./notification_single.module.scss";

const Notification_single: React.FC<{ active: boolean }> = ({ active }) => {
   return (
      <div className={styles.notificationSingle}>
         <div className={styles.headerBlockSingle}>
            <div className={active ? styles.headerBlockActive : styles.headerBlockAnactive}></div>
            <p className={styles.timeOnWose}>Изменено: 10 минут наза</p>
         </div>
         <div className={styles.notificationContent}>
            <p className={styles.numNotification}>
               №:
               <span className={styles.span}>051123</span>
            </p>
            <p className={styles.numNotification}>
               Названия:
               <span className={styles.span}>Интеграл ЛИС Mbank</span>
            </p>
            <p className={styles.num_notification}>
               Логин:
               <span className={styles.span}>ivanivanov</span>
            </p>
         </div>
      </div>
   );
};

export default Notification_single;
