import React from "react";
import styles from "./dataDiv.module.scss";
interface Idata {
   name: string;
   dates: string;
   src: string;
}

const DataDiv: React.FC<Idata> = ({ name, dates, src }) => {
   return (
      <>
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
      </>
   );
};

export default DataDiv;
