import { Dashboard } from "../../../widgets/Dashboard";
import styles from "./Roles.module.scss";
import { Administration } from './../../../widgets/Administration/Administration';

export const Roles = () => {
   return (
      <div className={styles.Roles}>
         <Dashboard />
         <div className={styles.Inner}>
            <Administration margin={543} width={131}/>
         </div>
      </div>
   );
};
