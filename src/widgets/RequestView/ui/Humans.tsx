import { FC } from "react";
import { DropDown } from "../../Modals/CreateRequest/ui/DropDown";
import styles from "./Humans.module.scss";
export const Humans: FC = () => {
    return (
        <div className={styles.Humans}>
            <DropDown text="Люди:" />
            <div className={styles.Name}>
                <div className={styles.Text}>Заявитель:</div>
            </div>
            <div className={styles.Name}>
                <div className={styles.Text}>Менеджер:</div>
            </div>
        </div>
    );
};
