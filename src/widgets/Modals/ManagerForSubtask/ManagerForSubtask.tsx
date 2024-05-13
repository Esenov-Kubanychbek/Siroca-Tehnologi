import { Dispatch, FC, SetStateAction } from "react";
import styles from "./ManagerForSubtask.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton, CustomInput } from "../../../shared/ui";

interface IManagerForSubtask {
    setManagerModal: Dispatch<SetStateAction<boolean>>;
}

export const ManagerForSubtask: FC<IManagerForSubtask> = (props) => {
    const { setManagerModal } = props;
    return (
        <div className={styles.ManagerForSubtask}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <p>Назначить менеджера</p>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setManagerModal(false)}
                    />
                </div>
                <CustomInput
                    width={400}
                    placeholder="Введите имя пользователя..."
                />
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Without"
                    width={101}
                    text="Отмена"
                    onClick={() => setManagerModal(false)}
                />
                <CustomButton
                    variant="Primary"
                    text="Добавить"
                    width={121}
                />
            </div>
        </div>
    );
};
