import styles from "./styles.module.scss";

export const ButtonSave: React.FC<TypesUi.IbuttonSave> = ({ text, color, backgroundColor }) => {
   return (
      <>
         <button
            className={styles.Button}
            style={{ color, backgroundColor }}
         >
            {text}
         </button>
      </>
   );
};
