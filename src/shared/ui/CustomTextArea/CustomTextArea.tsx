import { IText } from "../types";
import style from "./CustomTextArea.module.scss";

export const CustomTextArea: React.FC<IText> = ({ placeholder }) => {
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
