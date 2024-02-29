import { Filter } from "iconsax-react";
import styles from "./Header.module.scss";

export const FilterButton = () => {
   return (
      <div className={styles.FilterIcon}>
         <Filter
            size={34}
            variant={"Bold"}
            color="white"
         />
      </div>
   );
};
