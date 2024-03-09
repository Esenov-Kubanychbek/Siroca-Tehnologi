import { Dashboard } from "../../../widgets/Dashboard";
import styles from "./Companies.module.scss";
import { Administration } from './../../../widgets/Administration/Administration';


export const Companies = () => {
   return (
      <div className={styles.Companies}>
         <Dashboard />
         <div className={styles.Inner}>
            <Administration margin={0}/>
         </div>
      </div>
   );
};
