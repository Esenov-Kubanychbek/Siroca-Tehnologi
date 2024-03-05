import { Dashboard } from "../../../widgets/Dashboard";
import styles from "../Admin.module.scss";

export const Roles = () => {
   return (
      <div className={styles.Roles}>
         <Dashboard role="admin" />
         Roles
      </div>
   );
};
