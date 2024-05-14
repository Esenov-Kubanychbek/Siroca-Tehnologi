import { Dispatch, FC, SetStateAction } from "react";
import styles from "./UserForSubtask.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton, CustomInput } from "../../../shared/ui";

interface IUserForSubtask {
    setUserModal: Dispatch<SetStateAction<boolean>>;
}

export const UserForSubtask: FC<IUserForSubtask> = (props) => {
    const { setUserModal } = props;
    return (
        <div className={styles.UserForSubtask}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <p>Отметить пользователя</p>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setUserModal(false)}
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
                    onClick={() => setUserModal(false)}
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
