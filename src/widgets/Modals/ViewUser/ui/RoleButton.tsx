import { FC } from "react";
import styles from "./RoleButton.module.scss";
import { IRole } from "../types/types";

export const RoleButton: FC<IRole> = (props) => {
    const { change, role } = props;
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
