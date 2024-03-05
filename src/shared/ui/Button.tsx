import styles from "./styles.module.scss";

export const Button: React.FC<TypesUi.IButton> = ({ variant, width, text }) => {
   return (
      <div
         style={{ width: width }}
         className={variant ? styles.Primary : styles.Secondary}
      >
         {text}
      </div>
   );
};
