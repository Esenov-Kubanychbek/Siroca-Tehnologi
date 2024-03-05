import styles from "./Dashboard.module.scss";
import { DashboardButton, LoginButton } from "../../features/Dashboard";
import { ManagerButtons, AdminButtons } from ".";
import { Home } from "iconsax-react";
import { IDashboardProps } from "./types";

export const Dashboard: React.FC<IDashboardProps> = ({ role }) => {
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
            <img
               alt="ArrowDash"
               src="/ArrowDash.svg"
            />
         </div>
         <div className={styles.Buttons}>
            {role === "client" && (
               <DashboardButton
                  name="home"
               ><Home/></DashboardButton>
            )}
            {role === "manager" && <ManagerButtons />}
            {role === "admin" && <AdminButtons />}
         </div>
         <LoginButton />
      </div>
   );
};
