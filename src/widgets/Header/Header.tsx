import styles from "./Header.module.scss";
import { useState } from "react";
import {
   DataNumber,
   ProfButton,
   NotifButton,
   TimeFilter,
   SearchInput,
   FilterButton,
   ReportButton,
} from "../../features/Header";

interface HeaderProps{
   reportModalOpenFunc: any
}

export const Header: React.FC<HeaderProps> = ({reportModalOpenFunc}) => {
   const handleClick = () => {
      reportModalOpenFunc()
   }
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
            <ReportButton onClick={handleClick}/>
         </div>
      </div>
   );
};
