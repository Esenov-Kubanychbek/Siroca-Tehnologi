import styles from "./ClientPage.module.scss";
import { Dashboard } from "../../widgets/Dashboard";
import { Header } from "../../widgets/Header";
import { Items } from "../../widgets/Items";
import { useState } from "react";
import ReportModal from "../../features/ReportModalwindow/ReportModal";


const ClientPage:React.FC = () => {
   const [repModalwin, setRepModalWin] = useState(false)
   const repModal = () => {
      setRepModalWin(!repModalwin)
   }
   return (
      <div className={styles.ClientPage}>
         <Dashboard role="admin" />
         <div className={styles.Inner}>
            <Header reportModalOpenFunc={repModal} />
            <Items />
            {repModalwin ? <ReportModal />  : null}
         </div>
      </div>
   );
};

export default ClientPage;
