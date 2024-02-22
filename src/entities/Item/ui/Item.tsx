import styles from "./Item.module.scss";

const Item = () => {
   return (
      <div className={styles.Item}>
         <div className={styles.Number}>055115</div>
         <div className={styles.Company}>Оптима</div>
         <div className={styles.Name}>Интеграция Лис Мбанк</div>
         <div className={styles.Description}>Есть необходимость</div>
         <div className={styles.Person}>Иванов Иван</div>
         <div className={styles.Manager}>Аширжанова Уулкан</div>
         <div className={styles.Begin}>10.11.24</div>
         <div className={styles.End}>-------</div>
         <div className={styles.Level}>Высокий</div>
         <div className={styles.Status}>В работе</div>
      </div>
   );
};

export default Item;
