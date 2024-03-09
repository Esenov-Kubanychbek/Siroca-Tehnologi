import { Dashboard } from "../../../widgets/Dashboard";
import styles from "./Users.module.scss";

export const Users = () => {
   return (
      <div className={styles.Users}>
         <Dashboard />
         Users
      </div>
   );
};
