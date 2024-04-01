import { ChangeEvent, FC } from "react";
import style from "./CustomTextArea.module.scss";

interface IText {
    placeholder: string;
    height?: number;
    width?: number;
    variant: string;
    value?: string;
    name?: string;
    change?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CustomTextArea: FC<IText> = ({ placeholder, height, width, variant, value, name, change }) => {
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
        ></textarea>
    );
};
