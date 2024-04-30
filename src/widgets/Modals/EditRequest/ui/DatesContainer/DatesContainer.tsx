import { FC } from "react";
import styles from "./DatesContainer.module.scss";
import { Date } from "../../../../../shared/ui";
import { editRequestApi } from "../../api/editRequestApi";

export const DatesContainer: FC = () => {
    const { requestState, requestChange } = editRequestApi();
    return (
        <div className={styles.DatesContainer}>
            <div className={styles.Dates}>
                <div className={styles.Dates1}>
                    <Date
                        value={requestState.start_date === null ? "" : requestState.start_date}
                        name="start_date"
                        variant="DateContainer"
                        text="Дата начала:"
                        change={requestChange}
                    />
                    <Date
                        value={requestState.deadline_date === null ? "" : requestState.deadline_date}
                        name="deadline_date"
                        variant="DateContainer"
                        text="Срок выполнения:"
                        change={requestChange}
                    />
                    <Date
                        value={requestState.offer_date === null ? "" : requestState.offer_date}
                        name="offer_date"
                        variant="DateContainer"
                        text="Дата отправки:"
                        change={requestChange}
                    />
                </div>
                <div className={styles.Dates2}>
                    <Date
                        value={requestState.finish_date === null ? "" : requestState.finish_date}
                        name="finish_date"
                        variant="DateContainer"
                        text="Дата окончания:"
                        change={requestChange}
                    />
                    <Date
                        value={requestState.application_date === null ? "" : requestState.application_date}
                        name="application_date"
                        variant="DateContainer"
                        text="Дата подачи:"
                        change={requestChange}
                    />
                    <Date
                        value={requestState.confirm_date === null ? "" : requestState.confirm_date}
                        name="confirm_date"
                        variant="DateContainer"
                        text="Дата утверждения:"
                        change={requestChange}
                    />
                </div>
            </div>
            <div className={styles.PayContainer}>
                <div className={styles.Text}>Статус оплаты:</div>
                <div className={styles.Pay}>
                    <div className={styles.UniPay}>
                        <input
                            id="paid"
                            type="radio"
                            name="payment_state"
                            onChange={requestChange}
                            value={"Оплачено"}
                        />
                        <label htmlFor="paid">Оплачено</label>
                    </div>
                    <div className={styles.UniPay}>
                        <input
                            id="not_paid"
                            type="radio"
                            name="payment_state"
                            onChange={requestChange}
                            value={"Не оплачено"}
                        />
                        <label htmlFor="not_paid">Не оплачено</label>
                    </div>
                    <div className={styles.UniPay}>
                        <input
                            id="wait_paid"
                            type="radio"
                            name="payment_state"
                            onChange={requestChange}
                            value={"Ожидание оплаты"}
                        />
                        <label htmlFor="wait_paid">Ожидание оплаты</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
