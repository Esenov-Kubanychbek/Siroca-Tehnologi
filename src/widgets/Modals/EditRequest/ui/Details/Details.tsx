import { ChangeEvent, FC } from "react";
import styles from "./Details.module.scss";
import { CustomInput } from "../../../../../shared/ui";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";

interface IDetails {
    title: string;
    company: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const Details: FC<IDetails> = ({ onChange, title, company }) => {
    const prioritetData: string[] = ["Высокий", "Средний", "Низкий"];
    const statusData: string[] = ["К выполнению", "В работе", "Тестируется", "Перекрыто", "На обновлении", "В работе"];
    return (
        <div className={styles.Details}>
            <div>
                <div className={styles.Container}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Название заявки:</div>
                        <CustomInput
                            value={title}
                            name="title"
                            width={350}
                            height={44}
                            placeholder="Введите текст..."
                            change={onChange}
                        />
                    </div>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Название компании:</div>
                        <CustomInput
                            value={company}
                            name="company"
                            width={350}
                            height={44}
                            placeholder="Введите текст..."
                            change={onChange}
                        />
                    </div>
                    <div className={styles.StatusRequest}>
                        <div className={styles.Text}>Приоритетность:</div>
                        <CustomSelect
                            name="priority"
                            text="Приоритетность"
                            dataOption={prioritetData}
                            width={350}
                            change={onChange}
                        />
                    </div>
                    <div className={styles.StatusRequest}>
                        <div className={styles.Text}>Статус заявки:</div>
                        <CustomSelect
                            name="status"
                            text="Статус заявки"
                            dataOption={statusData}
                            width={350}
                            change={onChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
