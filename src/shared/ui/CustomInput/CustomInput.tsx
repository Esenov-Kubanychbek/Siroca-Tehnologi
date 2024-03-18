import { FC } from "react";
import styles from "./CustomInput.module.scss";
import { IInput } from "./model/types";

export const CustomInput: FC<IInput> = ({ width, height, placeholder }) => {
    return (
        <input
            style={{ width: `${width}px`, height: `${height}px` }}
            placeholder={placeholder}
            className={styles.Input}
        />
    );
};
