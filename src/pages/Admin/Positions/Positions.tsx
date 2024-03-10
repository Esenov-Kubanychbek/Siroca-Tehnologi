import { Dashboard } from "../../../widgets/Dashboard";
import styles from "./Positions.module.scss";
import { Administration } from './../../../widgets/Administration/Administration';


export const Positions = () => {
   return (
      <div className={styles.Positions}>
         <Dashboard />
         <div className={styles.Inner}>
            <Administration margin={368} width={159}/>
         </div>
      </div>
   );
};
