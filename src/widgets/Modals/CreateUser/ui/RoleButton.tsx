import { FC } from "react";
import styles from "./RoleButton.module.scss";

export const RoleButton: FC = () => {
    return (
        <div className={styles.RoleContainer}>
            <div className={styles.Role}>
                <div className={styles.Text}>Клиент</div>
                <input type="radio" />
            </div>
            <div className={styles.Role}>
                <div className={styles.Text}>Менеджер</div>
                <input type="radio" />
            </div>
        </div>
    );
};
