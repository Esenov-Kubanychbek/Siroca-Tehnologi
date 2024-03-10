import { IButton } from "../types";
import styles from "./CustomButton.module.scss";

export const CustomButton: React.FC<IButton> = ({ variant, width, text }) => {
   return (
      <div
         style={{ width: `${width}px` }}
         className={variant ? styles.Primary : styles.Secondary}
      >
         {text}
      </div>
   );
};
