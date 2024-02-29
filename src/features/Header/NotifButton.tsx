import { Notification } from "iconsax-react";
import styles from "./Header.module.scss";

export const NotifButton = () => {
   return (
      <div className={styles.Notification}>
         <Notification
            size={34}
            variant={"Bold"}
            color="#717171"
         />
         <div className={styles.NotifNumber}>5</div>
      </div>
   );
};
