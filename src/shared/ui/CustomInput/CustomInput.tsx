import { FC } from "react";
import styles from "./CustomInput.module.scss";
import { IInput } from "./model/types";

export const CustomInput: FC<IInput> = (props) => {
    const { width, placeholder } = props;
    return (
        <input
            style={{ width: `${width}px` }}
            placeholder={placeholder}
            className={styles.Input}
        />
    );
};
