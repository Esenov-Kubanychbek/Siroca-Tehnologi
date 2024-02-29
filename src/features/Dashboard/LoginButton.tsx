import styles from "./Dashboard.module.scss";
import { Login } from "iconsax-react";

export const LoginButton = () => {
   return (
      <div className={styles.LoginButton}>
         <Login color="#1C6AB1" />
      </div>
   );
};
