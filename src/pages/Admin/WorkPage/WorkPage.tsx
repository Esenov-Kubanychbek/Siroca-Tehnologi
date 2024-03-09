import { Dashboard } from "../../../widgets/Dashboard";
import { Administration } from './../../../widgets/Administration/Administration';
import styles from "./WorkPage.module.scss";

export const WorkPage = () => {

   return (
      <div className={styles.WorkPage}>
         <Dashboard />
         <div className={styles.Inner}>
            <Administration margin={0}/>
         </div>
      </div>
   );
};
