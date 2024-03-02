import { Dashboard } from "../../../widgets/Dashboard";
import styles from "../Admin.module.scss";

export const CreateUser = () => {
   return (
      <div className={styles.CreateUser}>
         <Dashboard role="admin" />
         CreateUser
      </div>
   );
};
