import { ItemInner } from "../../entities";
import styles from "./Item.module.scss";

interface ItemProps {
   number: string;
   company: string;
   request: string;
   description: string;
   client: string;
   manager: string;
   begin: string;
   end: string;
   prioritet: string;
   status: string;
}

const Item: React.FC<ItemProps> = ({
   number,
   company,
   request,
   description,
   client,
   manager,
   begin,
   end,
   prioritet,
   status,
}) => {
   return (
      <div className={styles.Item}>
         <ItemInner content={number} />
         <ItemInner content={company} />
         <ItemInner content={request} />
         <ItemInner content={description} />
         <ItemInner content={client} />
         <ItemInner content={manager} />
         <ItemInner content={begin} />
         <ItemInner content={end} />
         <div className={styles.Level}>{prioritet}</div>
         <div className={styles.Status}>{status}</div>
      </div>
   );
};

export default Item;
