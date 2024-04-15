import styles from "./Dashboard.module.scss";
import { DashboardButton, LoginButton } from "../../features";
import { Home, TagUser } from "iconsax-react";
import { FC } from "react";
import { PATHS } from "../../shared/variables/variables";

export const Dashboard: FC = () => {
    const roleType = localStorage.getItem("role_type")
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
                <DashboardButton name={roleType === '' ? PATHS.admin : PATHS.main}>
                    <Home />
                </DashboardButton>
                <DashboardButton name={PATHS.work}>
                    <TagUser />
                </DashboardButton>
            </div>
            {roleType === "admin" ? <LoginButton variant="Secondary" /> : null}
            
        </div>
    );
};
