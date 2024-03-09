import styles from "./AdminPage.module.scss";
import { Dashboard } from "../../../widgets/Dashboard";
import { Header } from "../../../widgets/Header";
import { ListContainer } from "../../../widgets/ListContainer";
import { useState } from "react";
import ReportModal from "../../../widgets/Report/ReportModal/ReportModal";

export const AdminPage = () => {
   const [repModalwin, setRepModalWin] = useState(false);
   const [isClickedFind] = useState(false);
   const openRepModal = () => {
      setRepModalWin(!repModalwin);
   };
   const closeRepModal = () => {
      setRepModalWin(false);
   };
   return (
      <div className={styles.AdminPage}>
         <Dashboard />
         <div className={styles.Inner}>
            <Header reportModalOpenFunc={openRepModal} />
            {isClickedFind ? null : <ListContainer />}
            {repModalwin ? <ReportModal onClose={closeRepModal} /> : null}
         </div>
      </div>
   );
};
