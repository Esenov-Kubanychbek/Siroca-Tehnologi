import { ChangeEvent, FC } from "react";
import styles from "./DatesContainer.module.scss";
import { Date } from "../../../../../shared/ui";

export const DatesContainer: FC<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({ onChange }) => {
    return (
        <div className={styles.DatesContainer}>
            <div className={styles.Dates}>
                <div className={styles.Dates1}>
                    <Date
                        name="start_date"
                        variant="DateContainer"
                        text="Дата начала:"
                        change={onChange}
                    />
                    <Date
                        name="deadline_date"
                        variant="DateContainer"
                        text="Срок выполнения:"
                        change={onChange}
                    />
                    <Date
                        name="offer_date"
                        variant="DateContainer"
                        text="Дата отправки:"
                        change={onChange}
                    />
                </div>
                <div className={styles.Dates2}>
                    <Date
                        name="finish_date"
                        variant="DateContainer"
                        text="Дата окончания:"
                        change={onChange}
                    />
                    <Date
                        name="application_date"
                        variant="DateContainer"
                        text="Дата подачи:"
                        change={onChange}
                    />
                    <Date
                        name="confirm_date"
                        variant="DateContainer"
                        text="Дата утверждения:"
                        change={onChange}
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
                            onChange={onChange}
                            value={"Оплачено"}
                        />
                        <label htmlFor="paid">Оплачено</label>
                    </div>
                    <div className={styles.UniPay}>
                        <input
                            id="not_paid"
                            type="radio"
                            name="payment_state"
                            onChange={onChange}
                            value={"Не оплачено"}
                        />
                        <label htmlFor="not_paid">Не оплачено</label>
                    </div>
                    <div className={styles.UniPay}>
                        <input
                            id="wait_paid"
                            type="radio"
                            name="payment_state"
                            onChange={onChange}
                            value={"Ожидание оплаты"}
                        />
                        <label htmlFor="wait_paid">Ожидание оплаты</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
