import { FC } from "react";
import style from "./CustomTextArea.module.scss";
import { IText } from "./types/types";

export const CustomTextArea: FC<IText> = ({ placeholder, height, width, variant, value, name, change, readOnly }) => {
    return (
        <textarea
            value={value}
            name={name}
            onChange={change}
            style={{
                height: `${height}px`,
                width: `${width}px`,
            }}
            className={style[variant]}
            placeholder={placeholder}
            cols={30}
            rows={20}
            readOnly={readOnly}
        ></textarea>
    );
};
