import styles from "./Items.module.scss";
import Item from "../../features/Item/Item";
import { ItemsTopName } from ".";
import ItemsApi from "./ItemsApi.json";

export const Items = () => {
   return (
      <div className={styles.Items}>
         <div className={styles.Header}>
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
         {ItemsApi.map((card, i) => (
            <Item
               key={i}
               number={card.number}
               company={card.company}
               request={card.request}
               description={card.description}
               client={card.client}
               manager={card.manager}
               begin={card.begin}
               end={card.end}
               prioritet={card.prioritet}
               status={card.status}
            />
         ))}
      </div>
   );
};
