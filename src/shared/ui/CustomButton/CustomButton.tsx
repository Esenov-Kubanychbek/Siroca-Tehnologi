import { FC } from "react";
import styles from "./CustomButton.module.scss";
import { IButton } from "./model/types";

export const CustomButton: FC<IButton> = (props) => {
    const { width, variant, text } = props;
    return (
        <div
            style={{ width: `${width}px`}}
            className={styles[variant]}
        >
            {text}
        </div>
    );
};
