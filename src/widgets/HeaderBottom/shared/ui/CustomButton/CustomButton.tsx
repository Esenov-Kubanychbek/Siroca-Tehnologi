import { FC } from "react";
import styles from "./CustomButton.module.scss";
import { IButton } from "./types/types";

export const CustomButton: FC<IButton> = (props) => {
    const { width, variant, text, type, onClick, name } = props;
    return (
        <button
            name={name}
            onClick={onClick}
            type={type}
            style={{ width: `${width}px` }}
            className={styles[variant]}
        >
            {text}
        </button>
    );
};
