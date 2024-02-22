import Item from "../../../entities/Item/ui/Item";
import styles from "./Items.module.scss";

const Items = () => {
   return (
      <div className={styles.Items}>
         <div className={styles.Header}>
            <div className={styles.Number}>Номер заявки</div>
            <div className={styles.Company}>Компания</div>
            <div className={styles.Name}>Наименования заявки</div>
            <div className={styles.Description}>Краткое описания</div>
            <div className={styles.Person}>Заявитель</div>
            <div className={styles.Manager}>Менеджер</div>
            <div className={styles.Begin}>Дата начала</div>
            <div className={styles.End}>Дата оканчания</div>
            <div className={styles.Level}>Приоритет</div>
            <div className={styles.Status}>Статус</div>
         </div>
         <Item />
         <Item />
         <Item />
         <Item />
         <Item />
         <Item />
         <Item />
         <Item />
         <Item />
         <Item />
         <Item />
      </div>
   );
};

export default Items;
