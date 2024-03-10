import styles from "./Manager.module.scss";
// import CreateRequest from "../../widgets/request/CreateRequest";
import { ProfButton } from "../../features/Header";
import { Dashboard } from "../../widgets/Dashboard";

const ManagerCreate: React.FC = () => {
   return (
      <>
         <div className={styles.bodyAll}>
            <div className={styles.Menu}>
               <Dashboard />
            </div>
            <div className={styles.bodyReguest}>
               <div className={styles.Header}>
                  <ProfButton />
               </div>
            </div>
         </div>
      </>
   );
};

export default ManagerCreate;
