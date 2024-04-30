import { CloseSquare } from "iconsax-react";
import styles from "./EditUser.module.scss";
import { FC, FormEvent, useEffect, useState } from "react";
import { ButtonCreate, CustomButton, CustomInput } from "../../../shared/ui";
import { RoleButton } from "./ui/RoleButton";
import { EditPhoto } from "./ui/EditPhoto";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { deleteUserApi } from "./api/deleteUserApi";
import { Modals } from "./ui";
import { editUserApi } from "./api/editUserApi";
import { IEditUserModal } from "./types/types";

export const EditUser: FC<IEditUserModal> = (props) => {
    const { setModal } = props;
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const fetchData = usersApi();
    const deleting = deleteUserApi();
    const [passwordModal, setPasswordModal] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const { editUser, setEditState, editUserState, editUserChange } = editUserApi();

    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(editUserState).every((value) => value === "")) {
            setModal(false);
            setModalSuccess(true);
            console.log(fetchData.oneUserGet, "postTrimError");
            setTimeout(() => setModalSuccess(false), 1000);
        } else {
            setModal(false);
            setModalSuccess(true);
            editUser(fetchData.oneUserGet.id);
            console.log(fetchData.oneUserGet, "something changed");
            setTimeout(() => setModalSuccess(false), 1000);
        }
    };

    const deleteUser = () => {
        deleting.deleteUser(fetchData.oneUserGet.id);
        setModal(false);
        setModalSuccess(true);
        setTimeout(() => setModalSuccess(false), 1000);
    };

    useEffect(() => {
        setEditState(fetchData.oneUserGet);
    }, [fetchData.oneUserGet]);

    return (
        <form className={styles.EditUser} onSubmit={postTrim}>
            <div className={styles.Top}>
                <div className={styles.TextTop}>Редактирование</div>
                <CloseSquare cursor={"pointer"} size={34} onClick={() => setModal(false)} />
            </div>
            <div className={styles.Description}>
                <EditPhoto />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            name="first_name"
                            change={editUserChange}
                            value={editUserState.first_name}
                            width={340}
                            placeholder="Напишите..."
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                change={editUserChange}
                                name="surname"
                                value={editUserState.surname}
                                width={340}
                                placeholder="Напишите..."
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton role={editUserState.role_type} change={editUserChange} />
                    </div>
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        change={editUserChange}
                        name="username"
                        value={editUserState.username}
                        width={272}
                        placeholder="@siroca.com"
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomButton
                        text="Сбросить пароль"
                        width={272}
                        variant="ColorBlue"
                        type="button"
                        onClick={() => setPasswordModal(true)}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Компания</div>
                    <CustomInput
                        change={editUserChange}
                        value={editUserState.main_company}
                        type="text"
                        name="main_company"
                        width={272}
                        placeholder="Напишите..."
                    />
                </div>
                <div>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <CustomInput
                            change={editUserChange}
                            value={editUserState.job_title}
                            name="job_title"
                            type="text"
                            width={210}
                            placeholder="Напишите..."
                        />
                        <ButtonCreate onClick={() => setJobTitleModal(true)} />
                    </div>
                </div>
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    type="button"
                    width={150}
                    onClick={deleteUser}
                    variant="ColorRed"
                    text="Удалить"
                />
                <CustomButton
                    type="button"
                    variant="Without"
                    width={160}
                    text="Отменить"
                    onClick={() => setModal(false)}
                />
                <CustomButton variant="Primary" width={150} text="Сохранить" type="submit" />
            </div>
            <Modals
                jobTitleModal={jobTitleModal}
                setJobTitleModal={setJobTitleModal}
                modalSuccess={modalSuccess}
                setModalSuccess={setModalSuccess}
                passwordModal={passwordModal}
                setPasswordModal={setPasswordModal}
            />
        </form>
    );
};
