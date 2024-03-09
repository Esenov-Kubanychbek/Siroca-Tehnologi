import styles from "./ListContainer.module.scss";
import Request from "../../features/Request/Request";
import RequestApi from "./RequestApi.json";
import { ListTop } from ".";

export const ListContainer = () => {
   return (
      <div className={styles.ListContainer}>
         <ListTop />
         {RequestApi.map((card, i) => (
            <Request
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
