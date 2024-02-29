import styles from "./styles.module.scss";

export const Input: React.FC<TypesUi.IInput> = ({ width, placeholder }) => {
   return (
      <input
         style={{ width: width }}
         placeholder={placeholder}
         className={styles.Input}
      />
   );
};
