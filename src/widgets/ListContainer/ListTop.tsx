import styles from "./ListContainer.module.scss";
import { ListTopName } from ".";

export const ListTop = () => {
   return (
      <div className={styles.ListTop}>
         <ListTopName name="Номер заявки" />
         <ListTopName name="Компания" />
         <ListTopName name="Наименования заявки" />
         <ListTopName name="Краткое описания" />
         <ListTopName name="Заявитель" />
         <ListTopName name="Менеджер" />
         <ListTopName name="Дата начала" />
         <ListTopName name="Дата оканчания" />
         <ListTopName name="Приоритет" />
         <ListTopName name="Статус" />
      </div>
   );
};
