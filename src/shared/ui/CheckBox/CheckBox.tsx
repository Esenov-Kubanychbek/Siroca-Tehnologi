import { FC } from "react";
import styles from "./CheckBox.module.scss";

export const CheckBox: FC<{ name: string }> = ({ name }) => {
    return (
        <label className={styles.Container}>
            <input type="checkbox" />
            <span className={styles.CheckMark}></span>
            {name}
        </label>
    );
};
