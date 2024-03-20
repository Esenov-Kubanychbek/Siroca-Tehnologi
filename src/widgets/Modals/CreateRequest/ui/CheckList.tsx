import { FC } from "react";
import styles from "./CheckList.module.scss";
import { DropDown } from "./DropDown";
import { CustomInput } from "../../../../shared/ui/CustomInput/CustomInput";
import { CustomButton } from "../../../../shared/ui/CustomButton/CustomButton";

export const CheckList: FC = () => {
    return (
        <div className={styles.CheckList}>
            <DropDown text="Чек листы:" />
            <div className={styles.InputEnter}>
                <CustomInput
                    width={540}
                    placeholder="Названия чек-листа"
                    height={44}
                />
            </div>
            <div className={styles.InputEnter}>
                <CustomInput
                    width={540}
                    placeholder="Подзадача..."
                    height={44}
                />
                <CustomButton
                    variant="Request"
                    text="Добавить задачу"
                    width={172}
                />
            </div>
        </div>
    );
};
