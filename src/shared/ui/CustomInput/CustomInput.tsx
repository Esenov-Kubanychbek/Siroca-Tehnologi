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
        maxLenght,
        color,
        id,
        trim,
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
                width: `${width - 50}px`,
                height: `${height}px`,
                background: `${background}`,
                paddingLeft: `${paddingLeft}px`,
                color: color,
            }}
            placeholder={placeholder}
            className={`${styles.Input} ${trim ? value ? '' : styles['placeholder-error'] : ''}`} onClick={onClick}
            readOnly={readOnly}
            maxLength={maxLenght}
        />
    );
};
