import styles from "./Dashboard.module.scss";
import logo from "/DashboardLogo.png";
import DashboardButton from "./DashboardButton";
import home from "/home.png";
import login from "/login.png";
import arrow from "/arrow-dash.png";

const Dashboard = () => {
   return (
      <div className={styles.Dashboard}>
         <img
            alt="logo"
            src={logo}
            className={styles.Logo}
         />
         <div className={styles.Line} />
         <div className={styles.ArrowButton}>
            <img
               alt="arrow"
               src={arrow}
            />
         </div>
         <div className={styles.Buttons}>
            <DashboardButton src={home} />
         </div>
         <div className={styles.LoginButton}>
            <DashboardButton src={login} />
         </div>
      </div>
   );
};

export default Dashboard;
