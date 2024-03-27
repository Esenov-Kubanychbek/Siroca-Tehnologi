import { FC } from "react";
import styles from "./RoleButton.module.scss";
import { IRole } from "../model/types";

export const RoleButton: FC<IRole> = (props) => {
    const { change } = props;
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
