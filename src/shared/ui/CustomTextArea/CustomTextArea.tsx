import { FC } from "react";
import style from "./CustomTextArea.module.scss";
import { ICustomTextArea } from "./types/types";

export const CustomTextArea: FC<ICustomTextArea> = (props) => {
    const { placeholder, value, name, paddingRight, onChange, maxLength } = props;
    return (
        <textarea
            cols={30}
            rows={20}
            name={name}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
            className={style.CustomTextArea}
            style={{
                paddingRight: `${paddingRight}px`
            }}
        />
    );
};
