import styles from "./Header.module.scss";

export const DataNumber = () => {
   return (
      <div className={styles.DataNumber}>
         <div>Создано: 10</div>
         <div className={styles.Line} />
         <div>В работе: 8</div>
         <div className={styles.Line} />
         <div>Закрыто: 2</div>
      </div>
   );
};
