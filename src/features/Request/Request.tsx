import { RequestInner } from "../../entities";
import styles from "./Request.module.scss";

interface IRequestProps {
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

const Request: React.FC<IRequestProps> = ({
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
      <div className={styles.Request}>
         <RequestInner content={number} />
         <RequestInner content={company} />
         <RequestInner content={request} />
         <RequestInner content={description} />
         <RequestInner content={client} />
         <RequestInner content={manager} />
         <RequestInner content={begin} />
         <RequestInner content={end} />
         <div className={styles.Level}>{prioritet}</div>
         <div className={styles.Status}>{status}</div>
      </div>
   );
};

export default Request;
