import { FC } from "react";
import styles from "./HeaderTop.module.scss";
import { LoginButton, NotifButton, ProfileButton, StatusNumber } from "../../features";

export const HeaderTop: FC<{ role: "client" | "manager" | "admin" }> = ({ role }) => {
    return (
        <div
            style={role === "admin" ? { width: "1764px" } : { width: "1820px" }}
            className={styles.HeaderTop}
        >
            <div
                className={styles.HeaderTopInner}
                style={{ width: role === "admin" ? "1716px" : "1790px" }}
            >
                <div className={styles.HeaderLogo}>
                    {role === "admin" ? null : <img src="/Logo.svg" />}
                    <StatusNumber />
                </div>
                <div className={styles.DataProfile}>
                    <NotifButton />
                    <ProfileButton />
                    {role === "admin" ? null : <LoginButton variant="Primary" />}
                </div>
            </div>
        </div>
    );
};
