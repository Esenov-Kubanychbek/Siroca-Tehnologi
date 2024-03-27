import { ChangeEvent, FC } from "react";
import styles from "./Humans.module.scss";
import { CustomSelect } from "../../CreateCompany/ui/CustomSelect";

export const Humans: FC <{ onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({onChange}) => {
    const data: string[] = ["Абдурахман", "Аман", "Далер", "Кубанычбек"];
    return (
        <div className={styles.Humans}>
            <div className={styles.People}>
                <CustomSelect
                    name="main_manager"
                    text="Менеджер"
                    dataOption={data}
                    width={282}
                    change={onChange}
                />
                <CustomSelect
                    name="main_client"
                    text="Заявитель"
                    dataOption={data}
                    width={282}
                    change={onChange}
                />
            </div>
        </div>
    );
};
