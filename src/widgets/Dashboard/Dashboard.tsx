import styles from "./Dashboard.module.scss";
import { DashboardButton, LoginButton } from "../../features";
import { Home, TagUser } from "iconsax-react";
import { FC } from "react";

export const Dashboard: FC = () => {
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
            <LoginButton variant="Secondary" />
        </div>
    );
};
