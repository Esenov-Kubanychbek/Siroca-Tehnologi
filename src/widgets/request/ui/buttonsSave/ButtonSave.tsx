import React from "react";
import styles from "./ButtonSave.module.scss";

interface IbuttonSave {
   text: string;
   color?: string;
   backgroundColor?: string;
   border?: string;
}

const ButtonSave: React.FC<IbuttonSave> = ({ text, color, backgroundColor, border }) => {
   return (
      <>
         <button
            className={styles.Button}
            style={{ color, backgroundColor, border }}
         >
            {text}
         </button>
      </>
   );
};

export default ButtonSave;
