import styles from "../Admin.module.scss";
import { Dashboard } from "../../../widgets/Dashboard";
// import { Notification } from "../../../widgets/Notification";

export const CreateCompany = () => {
   return (
      <div className={styles.CreateCompany}>
         <Dashboard role="admin" />
         CreateCompany
         {/* <Notification/> */}
      </div>
   );
};
