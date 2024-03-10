import styles from "./SearchInput.module.scss";
import { SearchNormal1 } from "iconsax-react";

export const SearchInput = () => {
   return (
      <div className={styles.Search}>
         <SearchNormal1 color="#717171" />
         <input
            placeholder="Поиск"
            className={styles.SearchInput}
         />
         <button className={styles.SearchButton}>Найти</button>
      </div>
   );
};
