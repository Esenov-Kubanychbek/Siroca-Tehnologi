import styles from "./Header.module.scss";
import {
   DataNumber,
   ProfButton,
   NotifButton,
   TimeFilter,
   SearchInput,
   FilterButton,
   ReportButton,
} from "../../features/Header";

export const Header = () => {
   return (
      <div className={styles.Header}>
         <div className={styles.HeaderTop}>
            <DataNumber />
            <div className={styles.DataProfile}>
               <NotifButton />
               <ProfButton />
            </div>
         </div>
         <div className={styles.HeaderBottom}>
            <TimeFilter />
            <SearchInput />
            <FilterButton />
            <ReportButton />
         </div>
      </div>
   );
};
