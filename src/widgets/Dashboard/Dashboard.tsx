import styles from "./Dashboard.module.scss";
import { DashboardButton, LoginButton } from "../../features/Dashboard";
import { Home, TagUser } from "iconsax-react";

export const Dashboard = () => {
   return (
      <div className={styles.Dashboard}>
         <div className={styles.Logo}>
            <img
               alt="logo"
               src="/Logo.svg"
            />
         </div>
         <div className={styles.Line} />
         <div className={styles.Buttons}>
            <DashboardButton name="/adminpage">
               <Home />
            </DashboardButton>
            <DashboardButton name="/workpage">
               <TagUser />
            </DashboardButton>
         </div>
         <LoginButton />
      </div>
   );
};
