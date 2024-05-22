import { FC } from "react";
import styles from "./DatesContainer.module.scss";
import { editRequestApi } from "../../api/editRequestApi";
import { PayContainer } from "./ui/PayContainer/PayContainer";
import { DateInput } from "./ui/DateInput/DateInput";

export const DatesContainer: FC = () => {
    const { requestState } = editRequestApi();
    return (
        <div className={styles.DatesContainer}>
            <div className={styles.Dates}>
                <div className={styles.Inner}>
                    <DateInput
                        text="Дата начала"
                        name="start_date"
                        value={requestState.start_date}
                    />
                    <DateInput
                        text="Срок выполнения"
                        name="deadline_date"
                        value={requestState.deadline_date}
                    />
                    <DateInput
                        text="Дата отправки"
                        name="deadline_date"
                        value={requestState.deadline_date}
                    />
                </div>
                <div className={styles.Inner}>
                    <DateInput
                        text="Дата завершения"
                        name="finish_date"
                        value={requestState.finish_date}
                    />
                    <DateInput
                        text="Дата подачи"
                        name="application_date"
                        value={requestState.application_date}
                    />
                    <DateInput
                        text="Дата утверждения"
                        name="confirm_date"
                        value={requestState.confirm_date}
                    />
                </div>
            </div>
            <PayContainer />
        </div>
    );
};
