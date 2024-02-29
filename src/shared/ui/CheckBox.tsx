import styles from "./styles.module.scss";

export const CheckBox: React.FC<TypesUi.Icheck> = ({ name }) => {
   return (
      <>
         <label className={styles.container}>
            <input type="checkbox" />
            <span className={styles.checkMark}></span>
            {name}
         </label>
      </>
   );
};
