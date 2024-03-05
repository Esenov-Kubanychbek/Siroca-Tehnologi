import styles from "./styles.module.scss";

export const DataDiv: React.FC<TypesUi.Idata> = ({ name, dates, src }) => {
   return (
      <div className={styles.dataDiv}>
         <div className={styles.dataCalendar}>
            <div className={styles.name}>{name}</div>
            <div className={styles.calendar}>
               <img
                  src={src}
                  alt=""
               />
            </div>
         </div>
         <div className={styles.dataText}>{dates}</div>
      </div>
   );
};
