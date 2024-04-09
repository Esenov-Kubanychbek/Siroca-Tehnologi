import { FC } from "react";
import styles from "./CustomInput.module.scss";
import { IInput } from "./model/types";

export const CustomInput: FC<IInput> = (props) => {
    const { width, placeholder, height, background, value, name, type, change, paddingLeft, allData, datas, defaultValue, onClick } = props;

    const placeholderClass = allData ? datas ? styles.blackPlaceholder : styles.redPlaceholder : null;

    return (
        <input
            type={type}
            value={value}
            name={name}
            onChange={change}
            defaultValue={defaultValue}
            style={{
                width: `${width - 50}px`,
                height: `${height}px`,
                background: `${background}`,
                paddingLeft: `${paddingLeft}px`,
                border: `1px solid ${allData ? datas ? 'black' : 'red' : 'black'}`
            }}
            placeholder={placeholder}
            className={`${styles.Input} ${placeholderClass}`}
            onClick={onClick}
        />
    );
};
