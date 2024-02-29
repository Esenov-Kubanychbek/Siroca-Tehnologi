import styles from "./Dashboard.module.scss";
import "../../app/styles/index.scss";
import { NavLink } from "react-router-dom";

export const DashboardButton: React.FC<DashboardTypes.IButtonProps> = ({ name, src }) => {
   return (
      <NavLink
         aria-label="link"
         to={name}
         className={styles.DashboardButton}
      >
         {src}
      </NavLink>
   );
};
