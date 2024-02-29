import styles from "./Dashboard.module.scss";
import { DashboardButton, LoginButton } from "../../features/Dashboard";
import { ManagerButtons, AdminButtons } from ".";
import { Home } from "iconsax-react";

export const Dashboard: React.FC<DashboardTypes.IDashboardProps> = ({ role }) => {
   return (
      <div className={styles.Dashboard}>
         <div className={styles.Logo}>
            <img
               alt="logo"
               src="/Logo.svg"
            />
         </div>
         <div className={styles.Line} />
         <div className={styles.ArrowButton}>
            <img alt="ArrowDash" src="/ArrowDash.svg"/>
         </div>
         <div className={styles.Buttons}>
            {role === "client" && (
               <DashboardButton
                  src={<Home />}
                  name="home"
               />
            )}
            {role === "manager" && <ManagerButtons />}
            {role === "admin" && <AdminButtons />}
         </div>
         <LoginButton />
      </div>
   );
};
