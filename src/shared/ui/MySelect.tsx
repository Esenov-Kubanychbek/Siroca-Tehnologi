import styles from "./styles.module.scss";

export const MySelect: React.FC<TypesUi.Iselect> = ({ width, name }) => {
   return (
      <>
         <div
            className={styles.dropDown}
            style={{ width }}
         >
            <div className={styles.title}>{name}</div>
            <div className={styles.drop}>
               <img
                  src="/iconsReg/arrow-down.png"
                  alt=""
               />
            </div>
         </div>
      </>
   );
};
