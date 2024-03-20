import { FC } from "react";
import styles from "./DatesContainer.module.scss";
import { DropDown } from "./DropDown";
import { Date } from "../../../../shared/ui";

export const DatesContainer: FC = () => {
    return (
        <div className={styles.DatesContainer}>
            <DropDown text="Даты:" />
            <div className={styles.Dates}>
                <div className={styles.Dates1}>
                    <Date
                        variant="DateContainer"
                        text="Дата начала:"
                    />
                    <Date
                        variant="DateContainer"
                        text="Срок выполнения:"
                    />
                    <Date
                        variant="DateContainer"
                        text="Дата отправки:"
                    />
                </div>
                <div className={styles.Dates2}>
                    <Date
                        variant="DateContainer"
                        text="Дата окончания::"
                    />
                    <Date
                        variant="DateContainer"
                        text="Дата подачи:"
                    />
                    <Date
                        variant="DateContainer"
                        text="Дата утверждения:"
                    />
                </div>
            </div>
            <div className={styles.PayContainer}>
                <div className={styles.Text}>Статус оплаты:</div>
                <div className={styles.Pay}>
                    <div className={styles.UniPay}>
                        <input type="radio" />
                        <div className={styles.Text2}>Оплачен</div>
                    </div>
                    <div className={styles.UniPay}>
                        <input type="radio" />
                        <div className={styles.Text2}>Не оплачен</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
