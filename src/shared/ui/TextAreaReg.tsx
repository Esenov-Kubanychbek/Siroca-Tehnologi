import style from "./styles.module.scss";

export const TextAreaReg: React.FC<TypesUi.Itext> = ({ placeholder }) => {
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
