import { Dashboard } from "../../../widgets/Dashboard";
import styles from "./Roles.module.scss";

const Roles = () => {
   return <div className={styles.Roles}>
      <Dashboard role="admin"/>
      Roles</div>;
};

export default Roles;
