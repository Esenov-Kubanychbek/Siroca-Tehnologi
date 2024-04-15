import { CloseSquare } from "iconsax-react";
import styles from "./ProfileModal.module.scss";
import { CustomButton } from "../../../shared/ui";
import { FC, useEffect, useState } from "react";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { Modal } from "antd";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import { IProfileModal } from "./types/types";

export const ProfileModal: FC<IProfileModal> = (props) => {
    const { setModal } = props;
    const { userProfile, userProfileAdded } = usersApi();
    console.log(userProfile);
    const [changeModal, setChangeModal] = useState<boolean>(false);
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
                    onClick={() => setModal(false)}
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
                            onClick={() => setChangeModal(true)}
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
                open={changeModal}
                onCancel={() => setChangeModal(false)}
            >
                <ChangePassword setModal={setChangeModal} />
            </Modal>
        </div>
    );
};
