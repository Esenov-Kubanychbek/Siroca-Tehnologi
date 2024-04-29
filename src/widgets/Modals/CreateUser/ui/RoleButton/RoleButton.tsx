import { ChangeEvent, FC } from "react";
import styles from "./RoleButton.module.scss";

export const RoleButton: FC<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({ onChange }) => {
    return (
        <div className={styles.RoleContainer}>
            <div className={styles.Role}>
                <label className={styles.Text}>
                    Клиент
                    <input
                        type="radio"
                        onChange={onChange}
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
                        onChange={onChange}
                        name="role_type"
                        value="manager"
                    />
                </label>
            </div>
        </div>
    );
};
