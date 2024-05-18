import { CloseSquare, Edit } from "iconsax-react";
import styles from "./ProfileModal.module.scss";
import { FC, useEffect, useState } from "react";
import { Modal } from "antd";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import { IProfileModal } from "./types/types";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { usePassword } from "../ChangePassword/api/ChangePassword";
import { profile, user } from "./api/profileApi";

export const ProfileModal: FC<IProfileModal> = (props) => {
    const { setModal } = props;
    const [changeModal, setChangeModal] = useState<boolean>(false);
    const { openModalScc } = usePassword();
    const { users, changeInputUser, setDatas, putOneUser, getOneUser } = profile();
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const [data, setData] = useState<user>();

    useEffect(() => {
        if (readOnly === false) {
            setData(users);
        } else if (readOnly === true) {
            data !== undefined && setDatas(data);
            setData(undefined);
        }
    }, [readOnly]);
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

                    <p>Ваш менеджер:</p>
                    <p>Логин:</p>
                    <p>Пароль:</p>
                </div>
                <div className={styles.Data}>
                    <img
                        src={data ? String(data.image) : String(users.image)}
                        alt="images"
                        className={styles.Image}
                    />
                    <input
                        style={{ display: `${readOnly ? "none" : "block"}` }}
                        className={styles.input}
                        type="file"
                        onChange={changeInputUser}
                        accept="image/*"
                        name="image"
                    />
                    <CustomInput
                        change={changeInputUser}
                        value={users.first_name}
                        name="first_name"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                    />
                    <CustomInput
                        change={changeInputUser}
                        value={users.surname}
                        name="surname"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                    />
                    <CustomInput
                        change={changeInputUser}
                        value={users.job_title}
                        name="job_title"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                    />
                    <CustomInput
                        change={changeInputUser}
                        value={users.main_company}
                        name="main_company"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                    />

                    <CustomInput
                        value="hello"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                    />
                    <CustomInput
                        change={changeInputUser}
                        value={users.username}
                        name="username"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                    />

                    <button
                        className={styles.ChangeButton}
                        onClick={() => setChangeModal(true)}
                    >
                        Сменить пароль
                    </button>
                </div>
            </div>
            <div className={styles.Buttons}>
                <button
                    className={styles.EditButton}
                    onClick={() => {
                        setReadOnly(!readOnly);
                    }}
                >
                    <Edit color="white" />
                </button>
                <CustomButton
                    text="Сохранить"
                    width={119}
                    variant="Primary"
                    onClick={() => {
                        data !== undefined && putOneUser(data, users);
                        setModal(false);
                        openModalScc();
                        setData(undefined);
                        users.id !== null && getOneUser(users.id);
                        setReadOnly(true);
                    }}
                />
            </div>
            <Modal
                width={265}
                centered
                open={changeModal}
                onCancel={() => setChangeModal(false)}
            >
                <ChangePassword
                    setModal={setChangeModal}
                    setModalProfile={setModal}
                />
            </Modal>
        </div>
    );
};
