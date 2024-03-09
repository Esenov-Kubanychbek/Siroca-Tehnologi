import { IDate } from "../types";
import styles from "./Date.module.scss";

export const Date: React.FC<IDate> = ({ name, dates, children }) => {
   return (
      <div className={styles.Date}>
         <div className={styles.DateCalendar}>
            <div className={styles.Name}>{name}</div>
            <div className={styles.Calendar}>{children}</div>
         </div>
         <div className={styles.DateText}>{dates}</div>
      </div>
   );
};
