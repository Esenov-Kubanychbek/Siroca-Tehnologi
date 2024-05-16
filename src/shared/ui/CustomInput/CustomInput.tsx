import { FC } from "react";
import styles from "./CustomInput.module.scss";
import { IInput } from "./types/types";

export const CustomInput: FC<IInput> = (props) => {
    const {
        width,
        placeholder,
        height,
        background,
        value,
        name,
        type,
        change,
        paddingLeft,
        defaultValue,
        onClick,
        readOnly,
        id,
        trim,
        maxLength,
        color
    } = props;

    return (
        <input
            type={type}
            value={value}
            name={name}
            id={id}
            defaultValue={defaultValue}
            onChange={change}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                background: `${background}`,
                paddingLeft: `${paddingLeft}px`,
                border: trim || trim === undefined ? "none" : "2px solid #E51616",
                color: color
            }}
            placeholder={placeholder}
            color={color}
            className={styles.Input}
            onClick={onClick}
            readOnly={readOnly}
            maxLength={maxLength}
        />
    );
};
