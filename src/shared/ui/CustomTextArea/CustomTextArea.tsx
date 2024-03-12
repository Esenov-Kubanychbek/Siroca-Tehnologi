import { FC } from "react";
import style from "./CustomTextArea.module.scss";

export const CustomTextArea: FC<{ placeholder: string }> = ({ placeholder }) => {
    return (
        <textarea
            className={style.TextArea}
            placeholder={placeholder}
            name="textArea"
            id="textArea"
            cols={30}
            rows={20}
        ></textarea>
    );
};
