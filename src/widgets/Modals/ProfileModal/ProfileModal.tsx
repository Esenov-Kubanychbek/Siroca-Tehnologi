import { CloseSquare } from "iconsax-react";
import styles from "./ProfileModal.module.scss";
// import profileImage from "../../../shared/assets/profileImage.svg";
import { CustomButton } from "../../../shared/ui";
import { useProfile } from "../../../shared/hooks/modalHooks";
import { FC, useEffect } from "react";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { Modal } from "antd";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import { useChangePassword } from "../../../shared/hooks/modalHooks/useChangePassword";

export const ProfileModal: FC = () => {
    const modal = useProfile();
    const { userProfile, userProfileAdded } = usersApi();
    console.log(userProfile);
    const changePasswordModal = useChangePassword();

    useEffect(() => {
        userProfileAdded();
    });
    return (
        <div className={styles.ProfileModal}>
            <div className={styles.block1}>
                <div className={styles.h1}>Профиль</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={modal.close}
                />
            </div>
            <div className={styles.datas}>
                <ul>
                    <li>
                        <label htmlFor="">Аватар: </label>
                    </li>
                    <li>
                        <label htmlFor="">Имя: </label>
                    </li>
                    <li>
                        <label htmlFor="">Фамилия: </label>
                    </li>
                    <li>
                        <label htmlFor="">Должность: </label>
                    </li>
                    <li>
                        <label htmlFor="">Компания: </label>
                    </li>
                    <li>
                        <label htmlFor="">Ваш менеджер: </label>
                    </li>
                    <li>
                        <label htmlFor="">Логин: </label>
                    </li>
                    <li>
                        <label htmlFor="">Пароль: </label>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img
                            className={styles.imgs}
                            src={userProfile.image}
                            alt="avatar"
                        />
                    </li>
                    <li>
                        <input
                            value={userProfile.first_name}
                            type="text"
                        />
                    </li>
                    <li>
                        <input
                            value={userProfile.surname}
                            type="text"
                        />
                    </li>
                    <li>
                        <input
                            value={userProfile.job_title}
                            type="text"
                        />
                    </li>
                    <li>
                        <input
                            value={userProfile.main_company}
                            type="text"
                        />
                    </li>
                    <li>
                        <input
                            value="Ажиржанова Уулкан"
                            type="text"
                        />
                    </li>
                    <li>
                        <input
                            value={userProfile.username}
                            type="email"
                        />
                    </li>
                    <li>
                        <button
                            onClick={changePasswordModal.open}
                            className={styles.btn}
                        >
                            Сменить пароль
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.button}>
                <CustomButton
                    width={130}
                    text="Сохранить"
                    variant="Primary"
                />
            </div>
            <Modal
                width={265}
                centered
                open={changePasswordModal.isOpen}
                onCancel={changePasswordModal.close}
            >
                <ChangePassword />
            </Modal>
        </div>
    );
};
