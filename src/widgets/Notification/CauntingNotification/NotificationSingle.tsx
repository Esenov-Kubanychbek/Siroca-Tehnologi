import styles from "./NotificationSingle.module.scss";

export const NotificationSingle: React.FC<{ active: boolean }> = ({ active }) => {
   return (
      <div className={styles.NotificationSingle}>
         <div className={styles.HeaderBlockSingle}>
            <div className={active ? styles.HeaderBlockActive : styles.HeaderBlockAnactive}></div>
            <p className={styles.TimeOnWose}>Изменено: 10 минут наза</p>
         </div>
         <div className={styles.NotificationContent}>
            <p className={styles.NumNotification}>
               №:
               <span className={styles.Span}>051123</span>
            </p>
            <p className={styles.NumNotification}>
               Названия:
               <span className={styles.Span}>Интеграл ЛИС Mbank</span>
            </p>
            <p className={styles.NumNotification}>
               Логин:
               <span className={styles.Span}>ivanivanov</span>
            </p>
         </div>
      </div>
   );
};
