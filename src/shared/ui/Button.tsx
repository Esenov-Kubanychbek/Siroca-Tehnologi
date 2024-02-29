import styles from "./styles.module.scss";

export const Button: React.FC<TypesUi.IButton> = ({ variant, width }) => {
   return (
      <div
         style={{ width: width }}
         className={variant ? styles.Primary : styles.Secondary}
      >
         Button
      </div>
   );
};
