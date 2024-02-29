import React from "react";
import style from "./textAreaReg.module.scss";
interface Itext {
   placeholder: string;
}

const TextAreaReg: React.FC<Itext> = ({ placeholder }) => {
   return (
      <>
         <textarea
            className={style.textarea}
            placeholder={placeholder}
            name="textArea"
            id="textArea"
            cols={30}
            rows={20}
         ></textarea>
      </>
   );
};

export default TextAreaReg;
