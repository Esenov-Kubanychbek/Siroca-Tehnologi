import styles from "./RequestList.module.scss";
import { RequestTopName } from ".";

export const RequestTop = () => {
   return (
      <div className={styles.RequestTop}>
         <RequestTopName name="Номер заявки" />
         <RequestTopName name="Компания" />
         <RequestTopName name="Наименования заявки" />
         <RequestTopName name="Краткое описания" />
         <RequestTopName name="Заявитель" />
         <RequestTopName name="Менеджер" />
         <RequestTopName name="Дата начала" />
         <RequestTopName name="Дата оканчания" />
         <RequestTopName name="Приоритет" />
         <RequestTopName name="Статус" />
      </div>
   );
};
