import styles from "./ClientPage.module.scss";
import { Dashboard } from "../../widgets/Dashboard";
import { Header } from "../../widgets/Header";
import { Items } from "../../widgets/Items";
import { useState } from "react";
import ReportModal from "../../widgets/Report/ReportModal/ReportModal";


export const ClientPage:React.FC = () => {
   const [repModalwin, setRepModalWin] = useState(false)
   const [isClickedFind, setIsClickedFind] = useState(false)
   const openRepModal = () => {
      setRepModalWin(!repModalwin)
   }
   const closeRepModal = () => {
      setRepModalWin(false)
   }
   return (
      <div className={styles.ClientPage}>
         <Dashboard role="admin" />
         <div className={styles.Inner}>
            <Header reportModalOpenFunc={openRepModal} />
            {isClickedFind ? null : <Items />}
               {repModalwin ? <ReportModal onClose={closeRepModal}/>  : null}
            
         </div>
      </div>
   );
};
