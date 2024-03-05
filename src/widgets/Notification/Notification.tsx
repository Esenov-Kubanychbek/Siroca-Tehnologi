import styles from "./Notification.module.scss";
import { NewNotification } from ".";
import { CloseSquare } from "iconsax-react";

export const Notification = () => {
   return (
      <div className={styles.NotificationModalWindow}>
         <div className={styles.Container}>
            <div className={styles.HeaderNotification}>
               <h3 className={styles.NotifactionHeaderH3}>Уведомление</h3>
               <CloseSquare size={32}/>
            </div>
            <div className={styles.ContentBlock}>
               <NewNotification active={true} />
               <NewNotification active={false} />
            </div>
         </div>
      </div>
   );
};
