import { ChangeEvent, FC } from "react";
import styles from "./RoleButton.module.scss";

export const RoleButton: FC<{ change: (e: ChangeEvent<HTMLInputElement>) => void }> = ({ change }) => {
    return (
        <div className={styles.RoleContainer}>
            <div className={styles.Role}>
                <label className={styles.Text}>
                    Клиент
                    <input
                        type="radio"
                        onChange={change}
                        name="role_type"
                        value="client"
                    />
                </label>
            </div>
            <div className={styles.Role}>
                <label className={styles.Text}>
                    Менеджер
                    <input
                        type="radio"
                        onChange={change}
                        name="role_type"
                        value="manager"
                    />
                </label>
            </div>
        </div>
    );
};
