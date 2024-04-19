import { CloseSquare } from "iconsax-react";
import styles from "./EditUser.module.scss";
import { FC, FormEvent, useState } from "react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { AddButton } from "../CreateUser/ui/AddButton";
import { Modal } from "antd";
import { CreateJobTitle, SuccessModal } from "../..";
import { RoleButton } from "./ui/RoleButton";
import { EditPhoto } from "./ui/EditPhoto";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { deleteUserApi } from "./api/deleteUserApi";
import { IEditUserModal } from "./types/types";

export const EditUser: FC<IEditUserModal> = (props) => {
    const { setModal } = props;
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const fetchData = usersApi();
    const deleting = deleteUserApi();
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(fetchData.oneUserGet).every((value) => value === value)) {
            setModal(false);
            setModalSuccess(true);
            console.log(fetchData.oneUserGet, "error");
            setTimeout(() => setModalSuccess(false), 1000);
        } else {
            setModal(false);
            setModalSuccess(true);
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
    return (
        <form
            className={styles.EditUser}
            onSubmit={postTrim}
        >
            <div className={styles.Top}>
                <div className={styles.TextTop}>Редактирование</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={() => setModal(false)}
                />
            </div>
            <div className={styles.Description}>
                <EditPhoto />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            name="first_name"
                            value={fetchData.oneUserGet.first_name}
                            width={340}
                            placeholder="Напишите..."
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                name="surname"
                                value={fetchData.oneUserGet.surname}
                                width={340}
                                placeholder="Напишите..."
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton role={fetchData.oneUserGet.role_type} />
                    </div>
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        name="username"
                        value={fetchData.oneUserGet.username}
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
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Компания</div>
                    <CustomInput
                        value={fetchData.oneUserGet.main_company}
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
                            value={fetchData.oneUserGet.job_title}
                            name="job_title"
                            type="text"
                            width={210}
                            placeholder="Напишите..."
                        />
                        <AddButton onClick={() => setJobTitleModal(true)} />
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
                <CustomButton
                    variant="Primary"
                    width={150}
                    text="Сохранить"
                    type="submit"
                />
            </div>
            <Modal
                width={700}
                centered
                open={jobTitleModal}
                onCancel={() => setJobTitleModal(false)}
                zIndex={10}
            >
                <CreateJobTitle
                    setModal={setJobTitleModal}
                    setModalSuccess={setModalSuccess}
                />
            </Modal>
            <Modal
                width={350}
                centered
                zIndex={11}
                open={modalSuccess}
                onCancel={() => setModalSuccess(false)}
            >
                <SuccessModal content="Изменения успешно сохранены!" />
            </Modal>
        </form>
    );
};
