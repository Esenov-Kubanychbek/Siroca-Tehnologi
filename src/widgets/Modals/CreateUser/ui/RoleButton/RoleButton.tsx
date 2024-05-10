import { ChangeEvent, FC } from "react";
import styles from "./RoleButton.module.scss";

interface IRoleButton {
    trim: boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RoleButton: FC<IRoleButton> = (props) => {
    const { trim, onChange } = props;
    return (
        <div className={styles.RoleButton}>
            <div className={styles.Name}>Тип роли</div>
            <div
                className={styles.RoleContainer}
                style={{ border: trim ? "none" : "2px solid #E51616" }}
            >
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
        </div>
    );
};
