import { NavLink } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import { Login } from "iconsax-react";

export const LoginButton = () => {
   return (
      <NavLink to="/" className={styles.LoginButton} aria-label="link">
         <Login color="#1C6AB1" />
      </NavLink>
   );
};
