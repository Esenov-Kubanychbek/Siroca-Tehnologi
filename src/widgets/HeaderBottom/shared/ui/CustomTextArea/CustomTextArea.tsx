import { FC } from "react";
import style from "./CustomTextArea.module.scss";
import { IText } from "./types/types";

export const CustomTextArea: FC<IText> = (props) => {
    const { placeholder, height, width, variant, value, name, change, readOnly, maxLength, ref } = props;
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
            maxLength={maxLength}
            ref={ref}
        />
    );
};
