import { ICheck } from "../types";
import styles from "./CheckBox.module.scss";

export const CheckBox: React.FC<ICheck> = ({ name }) => {
   return (
      <label className={styles.Container}>
         <input type="checkbox" />
         <span className={styles.CheckMark}></span>
         {name}
      </label>
   );
};
