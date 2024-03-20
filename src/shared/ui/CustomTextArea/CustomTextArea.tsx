import { FC } from "react";
import style from "./CustomTextArea.module.scss";

interface IText {
    placeholder: string;
    height?: number;
    width?: number;
    variant: string;
}

export const CustomTextArea: FC<IText> = ({ placeholder, height, width, variant }) => {
    return (
        <textarea
            style={{
                height: `${height}px`,
                width: `${width}px`,
            }}
            className={style[variant]}
            placeholder={placeholder}
            name="textArea"
            id="textArea"
            cols={30}
            rows={20}
        ></textarea>
    );
};
