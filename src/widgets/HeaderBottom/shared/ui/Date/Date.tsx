import { ChangeEvent, FC } from "react";
import styles from "./Date.module.scss";

interface IText {
    name: string;
    text: string;
    variant: string;
    value?: string;
    change?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Date: FC<IText> = ({ text, variant, name, change, value }) => {
    return (
        <div className={styles[variant]}>
            <div className={styles.Text}>{text}</div>
            <input
                type="date"
                name={name}
                value={value}
                onChange={change}
            />
        </div>
    );
};
