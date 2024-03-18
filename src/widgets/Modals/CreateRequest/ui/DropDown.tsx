import { FC } from "react";
import { ArrowDown2 } from "iconsax-react";
import styles from "./DropDown.module.scss";

interface IText {
    text: string;
}

export const DropDown: FC<IText> = ({ text }) => {
    return (
        <div className={styles.DropDown}>
            <div className={styles.Arrow}>
                <ArrowDown2 color="#1C6AB1" size={25} />
            </div>
            <div className={styles.Text}>{text}</div>
        </div>
    );
};
