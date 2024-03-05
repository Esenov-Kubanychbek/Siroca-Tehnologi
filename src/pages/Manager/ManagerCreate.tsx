import styles from "./Manager.module.scss";
import { CreateRequest } from "../../widgets/Create";
import { NotifButton, ProfButton } from "../../features/Header";
import { Dashboard } from "../../widgets/Dashboard";

export const ManagerCreate = () => {
   return (
      <div className={styles.bodyAll}>
         <Dashboard role="admin" />
         <div className={styles.bodyReguest}>
            <div className={styles.Header}>
               <NotifButton />
               <ProfButton />
            </div>
            <CreateRequest />
         </div>
      </div>
   );
};
