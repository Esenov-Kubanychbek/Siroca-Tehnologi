import { ChangeEvent, FC } from "react";
import styles from "./Details.module.scss";
import { CustomInput } from "../../../../shared/ui";
import { CustomSelect } from "../../CreateCompany/ui/CustomSelect";



export const Details: FC <{ onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }> = ({onChange}) => {
    const data: string[] = ["Высокий", "Средний", "Низкий"];
    const data2: string[] = ["К выполнению", "В работе","Тестируется","Перекрыто","На обновлении","В работе",];
    return (
        <div className={styles.Details}>
            <div>
                <div className={styles.Container}>
                        <div className={styles.Name}>
                        <div className={styles.Text}>Название заявки:</div>
                        <CustomInput
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
                            name="company"
                            type="number"
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
                        dataOption={data}
                        width={350}
                        change={onChange}
                />
                    </div>
                    <div className={styles.StatusRequest}>
                        <div className={styles.Text}>Статус заявки:</div>
                        <CustomSelect
                        name="status"
                        text="Статус заявки"
                        dataOption={data2}
                        width={350}
                        change={onChange}
                />
                    </div>
                </div>
            </div>
        </div>
    );
};

