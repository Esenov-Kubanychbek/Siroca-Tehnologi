import styles from "./Items.module.scss";
import Item from "../../features/Item/Item";
import ItemsApi from "./ItemsApi.json";
import { ItemsTop } from ".";

export const Items = () => {
   return (
      <div className={styles.Items}>
         <ItemsTop />
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
