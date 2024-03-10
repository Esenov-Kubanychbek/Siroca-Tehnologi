import styles from "./Dashboard.module.scss";
import "../../app/styles/index.scss";
import { NavLink } from "react-router-dom";
import { IButtonProps } from "./types";

export const DashboardButton: React.FC<IButtonProps> = ({ name, children }) => {
   return (
      <NavLink
         aria-label="link"
         to={name}
         className={styles.DashboardButton}
      >
         {children}
      </NavLink>
   );
};
