import { FC } from "react";
import styles from "./CreateUser.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CloseSquare, GalleryAdd } from "iconsax-react";
import userModal from "./model/UserModal";
import { RoleButton } from "./ui/RoleButton";
import { AddButton } from "./ui/AddButton";

export const CreateUser: FC = () => {
    const modal = userModal();

    return (
        <div className={styles.CreateUser}>
            <div className={styles.Top}>
                <div className={styles.TextTop}>Создание пользователя</div>
                <div
                    onClick={modal.close}
                    className={styles.Close}
                >
                    <CloseSquare size={34} />
                </div>
            </div>
            <div className={styles.Description}>
                <div className={styles.AddPhoto}>
                    <GalleryAdd
                        size={50}
                        color="rgba(37, 37, 37, 0.9)"
                    />
                    <div className={styles.Text2}>Добавьте фотографию пользователя</div>
                </div>
                <div className={styles.UserRole}>
                    <div>
                        <div className={styles.Text}>Фамилия имя</div>
                        <CustomInput
                            width={290}
                            placeholder="Напишите..."
                        />
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton />
                    </div>
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        width={222}
                        placeholder="@siroca.com"
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
                        width={222}
                        placeholder="Напишите..."
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Компания</div>
                    <CustomInput
                        width={222}
                        placeholder="Напишите..."
                    />
                </div>
                <div>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <CustomInput
                            width={160}
                            placeholder="Напишите..."
                        />
                        <AddButton />
                    </div>
                </div>
            </div>
            <div className={styles.Buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Secondary"
                        width={160}
                        text="Отменить"
                    />
                </div>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Создать"
                    />
                </div>
            </div>
        </div>
    );
};
