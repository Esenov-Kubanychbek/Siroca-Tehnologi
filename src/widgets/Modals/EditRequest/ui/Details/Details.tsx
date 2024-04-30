import { FC } from "react";
import styles from "./Details.module.scss";
import { CustomInput } from "../../../../../shared/ui";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";
import { editRequestApi } from "../../api/editRequestApi";

export const Details: FC = () => {
    const { requestState, requestChange } = editRequestApi();
    const prioritetData: string[] = ["Самый высокий", "Высокий", "Средний", "Низкий", "Самый низкий"];
    const statusData: string[] = ["К выполнению", "В работе", "В тестировании", "Выполнено", "Проверено"];
    return (
        <div className={styles.Details}>
            <div>
                <div className={styles.Container}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Название заявки:</div>
                        <CustomInput
                            value={requestState.title}
                            name="title"
                            width={350}
                            height={44}
                            placeholder="Введите текст..."
                            change={requestChange}
                        />
                    </div>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Название компании:</div>
                        <CustomInput
                            value={requestState.company}
                            name="company"
                            width={350}
                            height={44}
                            placeholder="Введите текст..."
                            change={requestChange}
                        />
                    </div>
                    <div className={styles.StatusRequest}>
                        <div className={styles.Text}>Приоритетность:</div>
                        <CustomSelect
                            value={requestState.priority}
                            name="priority"
                            text="Приоритетность"
                            dataOption={prioritetData}
                            width={350}
                            change={requestChange}
                        />
                    </div>
                    <div className={styles.StatusRequest}>
                        <div className={styles.Text}>Статус заявки:</div>
                        <CustomSelect
                            value={requestState.status}
                            name="status"
                            text="Статус заявки"
                            dataOption={statusData}
                            width={350}
                            change={requestChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
