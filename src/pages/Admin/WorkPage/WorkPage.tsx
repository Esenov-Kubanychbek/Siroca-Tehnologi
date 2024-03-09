import styles from "./WorkPage.module.scss";
import { Dashboard } from "../../../widgets/Dashboard";

export const WorkPage = () => {
   return (
      <div className={styles.WorkPage}>
         <Dashboard />
         WorkPage
      </div>
   );
};
