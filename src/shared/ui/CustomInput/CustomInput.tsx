import { IInput } from "../types";
import styles from "./CustomInput.module.scss";

export const CustomInput: React.FC<IInput> = ({ width, placeholder }) => {
   return (
      <input
         style={{ width: `${width}px` }}
         placeholder={placeholder}
         className={styles.Input}
      />
   );
};
