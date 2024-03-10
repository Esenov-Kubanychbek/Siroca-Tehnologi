import { Dashboard } from "../../../widgets/Dashboard";
import styles from "./Users.module.scss";
import { Administration } from './../../../widgets/Administration/Administration';

export const Users = () => {
   return (
      <div className={styles.Users}>
         <Dashboard />
         <div className={styles.Inner}>
            <Administration margin={159} width={193}/>
         </div>
      </div>
   );
};
