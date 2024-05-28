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
    const { users, changeInputUser, setDatas, putOneUser, getOneUser, adminContacts, getAdminContacts, putAdminContacts, changeAdminContacts } = profile();
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const [data, setData] = useState<user>();
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (readOnly === false) {
            setData(users);
        } else if (readOnly === true) {
            data !== undefined && setDatas(data);
            setData(undefined);
        }
    }, [readOnly]);
        useEffect(() => {
            if(users.role_type === ''){
                getAdminContacts();
            }
        }, []);
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

                    <p style={{ display: `${users.role_type === 'client' ? 'block' : 'none'}` }}>Ваш менеджер:</p>
                    <p>Логин:</p>
                    <div className={styles.adminContacts} style={{display: `${users.role_type === '' ? 'block' : 'none'}`}}>
                        <p>Почта:</p>
                        <p>Телефон:</p>
                        <p>Whathapp:</p>
                    </div>
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
                        value={users.first_name || ''}
                        name="first_name"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                        color="black"
                        trim={error && users.first_name === '' ? false : true}
                    />
                    <CustomInput
                        change={changeInputUser}
                        value={users.surname || ''}
                        name="surname"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                        color="black"
                        trim={error && users.surname === '' ? false : true}


                    />
                    <CustomInput
                        value={users.role_type === '' ? 'Admin' : users.job_title || ''}
                        name="job_title"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={true}
                        color="black"
                    />
                    <CustomInput
                        value={users.main_company || ''}
                        name="main_company"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={true}
                        color="black"

                    />

                    <div style={{ display: `${users.role_type === 'client' ? 'block' : 'none'}` }}>
                        <CustomInput
                            value={users.main_manager || ''}
                            type="text"
                            width={215}
                            height={32}
                            readOnly={true}
                            color="black"

                        />
                    </div>
                    <CustomInput
                        change={changeInputUser || ''}
                        value={users.username}
                        name="username"
                        type="text"
                        width={215}
                        height={32}
                        readOnly={readOnly}
                        color="black"
                        trim={error && users.username === '' ? false : true}

                    />
                    <div className={styles.adminContacts} style={{display: `${users.role_type === '' ? 'block' : 'none'}`}}>
                        <CustomInput
                            change={changeAdminContacts}
                            value={adminContacts.email || ''}
                            name="email"
                            type="text"
                            width={215}
                            height={32}
                            readOnly={readOnly}
                            color="rgba(28, 106, 177, 1)"
                            trim={error && adminContacts.email === '' ? false : true}
                        />
                        <CustomInput
                            change={changeAdminContacts}
                            value={adminContacts.phone_number || ''}
                            name="phone_number"
                            type="number"
                            width={215}
                            height={32}
                            readOnly={readOnly}
                            color="rgba(28, 106, 177, 1)"
                            trim={error && adminContacts.phone_number === null ? false : true}
                        />
                        <CustomInput
                            change={changeAdminContacts}
                            value={adminContacts.whatsapp_number || ''}
                            name="whatsapp_number"
                            type="number"
                            width={215}
                            height={32}
                            readOnly={readOnly}
                            color="rgba(28, 106, 177, 1)"
                            trim={error && adminContacts.whatsapp_number === null ? false : true}

                        />
                    </div>
                    <p style={{ display: `${error ? 'block' : 'none'}`, color: 'rgba(229, 22, 22, 1)' }}>Поля не должны быть пустыми!</p>
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
                    style={{
                        display: `${readOnly ? 'block' : 'none'}`
                    }}
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
                        const { email, phone_number, whatsapp_number } = adminContacts;
                        const { first_name, surname, username } = users;
                        const conditions = [email, phone_number, whatsapp_number, first_name, surname, username];
                        if (conditions.every(Boolean)) {
                            setModal(false);
                            data !== undefined && putOneUser(data, users);
                            openModalScc();
                            setData(undefined);
                            users.id !== null && getOneUser(users.id);
                            putAdminContacts(adminContacts);
                            setReadOnly(true);
                            setError(false);
                        } else {
                            setError(true)
                        }
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
