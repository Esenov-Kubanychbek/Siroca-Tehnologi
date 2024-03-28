import { FC } from "react";
import styles from "./CustomInput.module.scss";
import { IInput } from "./model/types";

export const CustomInput: FC<IInput> = (props) => {
    const { width, placeholder, height, background, value, name, type, change, paddingLeft } = props;
    return (
        <input
            type={type}
            value={value}
            name={name}
            onChange={change}
            style={{
                width: `${width - 50}px`,
                height: `${height}px`,
                background: `${background}`,
                paddingLeft: `${paddingLeft}px`,
            }}
            placeholder={placeholder}
            className={styles.Input}
        />
    );
};
