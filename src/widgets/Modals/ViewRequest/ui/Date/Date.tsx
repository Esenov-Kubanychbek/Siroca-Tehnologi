import styles from "./Date.module.scss";
import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const Date: FC = () => {
    const fetchData = getOneRequestApi();
    return (
        <div className={styles.Date}>
            <div className={styles.Name}>
                <p>Дата начало:</p>
                <p>Срок выполнение:</p>
                <p>Дата отправки:</p>
                <p>Дата завершение:</p>
                <p>Дата подачи:</p>
                <p>Дата утверждение:</p>
                <p>Статус оплаты:</p>
            </div>
            <div className={styles.Data}>
                <p>{fetchData.oneRequest.start_date}</p>
                <p>{fetchData.oneRequest.offer_date}</p>
                <p>{fetchData.oneRequest.application_date}</p>
                <p>{fetchData.oneRequest.finish_date}</p>
                <p>{fetchData.oneRequest.confirm_date}</p>
                <p>{fetchData.oneRequest.deadline_date}</p>
                <p>{fetchData.oneRequest.payment_state}</p>
            </div>
        </div>
    );
};
