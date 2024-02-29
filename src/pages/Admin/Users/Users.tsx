import { Dashboard } from "../../../widgets/Dashboard";
import styles from "./Users.module.scss";

const Users = () => {
   return <div className={styles.Users}>
      <Dashboard role="admin"/>
      Users</div>;
};

export default Users;
