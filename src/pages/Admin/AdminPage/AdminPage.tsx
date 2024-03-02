import { Dashboard } from "../../../widgets/Dashboard";
import styles from "../Admin.module.scss"

export const AdminPage = () => {
   return (
      <div className={styles.AdminPage}>
         <Dashboard role="admin" />
         AdminPage
      </div>
   );
};
