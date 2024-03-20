import { FC } from "react";
import styles from "./Date.module.scss";

interface IText {
    text: string;
    variant: string;
}

export const Date: FC<IText> = ({ text, variant }) => {
    return (
        <div className={styles[variant]}>
            <div className={styles.Text}>{text}</div>
            <input type="date" />
        </div>
    );
};
