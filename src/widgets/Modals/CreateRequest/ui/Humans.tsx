import { FC } from "react";
import styles from "./Humans.module.scss";
import { DropDown } from "./DropDown";
import { CustomSelect } from "../../CreateCompany/ui/CustomSelect";

export const Humans: FC = () => {
    const data: string[] = ["Менеджер", "заявитель"];
    return (
        <div className={styles.Humans}>
            <DropDown text="Люди:" />
            <div className={styles.People}>
                <CustomSelect
                    name="sel"
                    placeholder="Выбрать"
                    dataOption={data}
                />
                <CustomSelect
                    name="sel"
                    placeholder="Выбрать"
                    dataOption={data}
                />
            </div>
        </div>
    );
};
