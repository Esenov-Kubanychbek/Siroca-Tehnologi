import { CloseSquare, Edit } from "iconsax-react";
import styles from "./ProfileModal.module.scss";
import { FC, useState } from "react";
import { Modal } from "antd";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import { IProfileModal } from "./types/types";
import { CustomButton } from "../../../shared/ui";
import { usersApi } from "../../Admin/Users/api/usersApi";

export const ProfileModal: FC<IProfileModal> = (props) => {
    const { setModal } = props;
    const [changeModal, setChangeModal] = useState<boolean>(false);
    const fetchUsers = usersApi();
    return (
        <div className={styles.ProfileModal}>
            <div className={styles.Header}>
                <p>Профиль</p>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={() => setModal(false)}
                />
            </div>
            <div className={styles.Inner}>
                <div className={styles.Name}>
                    <p className={styles.Avatar}>Аватар:</p>
                    <p>Имя:</p>
                    <p>Фамилия:</p>
                    <p>Должность:</p>
                    <p>Компания:</p>
                    <p>Логин:</p>
                    <p>Почта:</p>
                    <p>Телефон:</p>
                    <p>WhatsApp:</p>
                    <p>Пароль:</p>
                </div>
                <div className={styles.Data}>
                    <img
                        src={String(fetchUsers.oneUserGet.image)}
                        className={styles.Image}
                    />
                    <p>{fetchUsers.oneUserGet.first_name}</p>
                    <p>{fetchUsers.oneUserGet.surname}</p>
                    <p>{fetchUsers.oneUserGet.job_title}</p>
                    <p>{fetchUsers.oneUserGet.main_company}</p>
                    <p>{fetchUsers.oneUserGet.username}</p>
                    <p className={styles.ColorBlue}>ivan@pepsi.com</p>
                    <p className={styles.ColorBlue}>+996 777 894 621</p>
                    <p className={styles.ColorBlue}>+996 777 235 589</p>
                    <button
                        className={styles.ChangeButton}
                        onClick={() => setChangeModal(true)}
                    >
                        Сменить пароль
                    </button>
                </div>
            </div>
            <div className={styles.Buttons}>
                <button className={styles.EditButton}>
                    <Edit color="white" />
                </button>
                <CustomButton
                    text="Сохранить"
                    width={119}
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
