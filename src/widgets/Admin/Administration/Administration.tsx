import { AdminNavigate, NotifButton, ProfileButton } from "../../../features";
import styles from "./Administration.module.scss";
import { FC } from "react";

export const Administration: FC = () => {
    return (
        <div className={styles.Administration}>
            <div className={styles.HeaderTop}>
                <div className={styles.Name}>Администрирование</div>
                <div className={styles.DataProfile}>
                    <NotifButton />
                    <ProfileButton />
                </div>
            </div>
            <div className={styles.Line}></div>
            <AdminNavigate />
        </div>
    );
};
