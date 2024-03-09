import styles from "./Header.module.scss";
import {
   StatusNumber,
   ProfileButton,
   NotifButton,
   TimeFilter,
   SearchInput,
   FilterButton,
   ReportButton,
} from "../../features/Header";

interface HeaderProps {
   reportModalOpenFunc: () => void;
}

export const Header: React.FC<HeaderProps> = ({ reportModalOpenFunc }) => {
   const handleClick = () => {
      reportModalOpenFunc();
   };
   return (
      <div className={styles.Header}>
         <div className={styles.HeaderTop}>
            <StatusNumber />
            <div className={styles.DataProfile}>
               <NotifButton />
               <ProfileButton />
            </div>
         </div>
         <div className={styles.HeaderBottom}>
            <TimeFilter />
            <SearchInput />
            <FilterButton />
            <ReportButton onClick={handleClick} />
         </div>
      </div>
   );
};
