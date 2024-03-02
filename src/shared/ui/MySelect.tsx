import { ArrowDown2 } from "iconsax-react";
import styles from "./styles.module.scss";

export const MySelect: React.FC<TypesUi.Iselect> = ({ width, name }) => {
   return (
      <div
         className={styles.dropDown}
         style={{ width }}
      >
         <div className={styles.title}>{name}</div>
         <div className={styles.drop}>
            <ArrowDown2 />
         </div>
      </div>
   );
};
