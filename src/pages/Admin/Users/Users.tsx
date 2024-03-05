import { Dashboard } from "../../../widgets/Dashboard";
import styles from "../Admin.module.scss";

export const Users = () => {
   return (
      <div className={styles.Users}>
         <Dashboard role="admin" />
         Users
      </div>
   );
};
