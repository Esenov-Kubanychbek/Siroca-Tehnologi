import { ArrowDown2 } from "iconsax-react";
import styles from "./CustomSelect.module.scss";
import { ISelect } from "../types";

export const CustomSelect: React.FC<ISelect> = ({ width, name }) => {
   return (
      <div
         className={styles.DropDown}
         style={{ width: `${width}px` }}
      >
         <div className={styles.Title}>{name}</div>
         <div className={styles.Drop}>
            <ArrowDown2 />
         </div>
      </div>
   );
};
