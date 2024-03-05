import { Dashboard } from "../../../widgets/Dashboard";
import styles from "../Admin.module.scss"

export const Companies = () => {
   return (
      <div className={styles.Companies}>
         <Dashboard role="admin" />
         Companies
      </div>
   );
};
