import styles from "./TimeFilter.module.scss";

export const TimeFilter = () => {
   return (
      <div className={styles.Filter}>
         <div
            className={styles.Time}
            id={styles.blue}
         >
            Всё время
         </div>
         <div className={styles.Time}>Неделя</div>
         <div className={styles.Time}>Месяц</div>
         <div className={styles.Border} />
      </div>
   );
};
