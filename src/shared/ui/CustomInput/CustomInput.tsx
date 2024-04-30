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
        error
    } = props;
    console.log(error);
    
    return (
        <input
            type={type}
            value={value}
            name={name}
            defaultValue={defaultValue}
            onChange={change}
            style={{
                width: `${width - 50}px`,
                height: `${height}px`,
                background: `${background}`,
                paddingLeft: `${paddingLeft}px`,
                border: `${error ? value ? 'none' : '1px solid #e51616' : 'none'}`,

            }}
            placeholder={placeholder}
            className={`${styles.Input} ${error ?  value ? '' : styles['placeholder-error'] : '' }`}            onClick={onClick}
            readOnly={readOnly}
            maxLength={maxLenght}
        />
    );
};
