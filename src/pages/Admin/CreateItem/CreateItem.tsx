import { Dashboard } from "../../../widgets/Dashboard";
import styles from "../Admin.module.scss";

export const CreateItem = () => {
   return (
      <div className={styles.CreateItem}>
         <Dashboard role="admin" />
         CreateItem
      </div>
   );
};
