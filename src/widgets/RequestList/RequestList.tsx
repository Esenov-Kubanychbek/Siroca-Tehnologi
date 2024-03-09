import styles from "./RequestList.module.scss";
import Request from "../../features/Request/Request";
import RequestApi from "./RequestApi.json";
import { RequestTop } from ".";

export const RequestList = () => {
   return (
      <div className={styles.RequestList}>
         <RequestTop />
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
