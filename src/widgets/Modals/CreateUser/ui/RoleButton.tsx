import { ChangeEvent, FC } from "react";
import styles from "./RoleButton.module.scss";

export const RoleButton: FC<{
    change: (e: ChangeEvent<HTMLInputElement>) => void;
    role?: string | null | number | unknown;
}> = ({ change, role }) => {
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
                        checked={role === "client" ? true : false}
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
                        checked={role === "manager" ? true : false}
                    />
                </label>
            </div>
        </div>
    );
};
