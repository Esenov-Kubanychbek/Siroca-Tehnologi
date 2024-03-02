import styles from "./Items.module.scss";
import { ItemsTopName } from ".";

export const ItemsTop = () => {
   return (
      <div className={styles.ItemsTop}>
         <ItemsTopName name="Номер заявки" />
         <ItemsTopName name="Компания" />
         <ItemsTopName name="Наименования заявки" />
         <ItemsTopName name="Краткое описания" />
         <ItemsTopName name="Заявитель" />
         <ItemsTopName name="Менеджер" />
         <ItemsTopName name="Дата начала" />
         <ItemsTopName name="Дата оканчания" />
         <ItemsTopName name="Приоритет" />
         <ItemsTopName name="Статус" />
      </div>
   );
};
