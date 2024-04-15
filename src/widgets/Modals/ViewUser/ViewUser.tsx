import { CloseSquare } from "iconsax-react";
import styles from "./ViewUser.module.scss";
import { useSuccess } from "../../../shared/hooks/modalHooks";
import { FC, FormEvent, useState } from "react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { AddButton } from "../CreateUser/ui/AddButton";
import { Modal } from "antd";
import { CreateJobTitle, SuccessModal } from "../..";
import { RoleButton } from "./ui/RoleButton";
import { ViewPhoto } from "./ui/ViewPhoto";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { deleteUserApi } from "./api/deleteUserApi";
import { IViewUserModal } from "./types/types";

export const ViewUser: FC<IViewUserModal> = (props) => {
    const { setModal } = props;
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const fetchData = usersApi();
    const deleting = deleteUserApi();
    const success = useSuccess();
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(fetchData.oneUserGet).every((value) => value === value)) {
            setModal(false);
            success.open();
            console.log(fetchData.oneUserGet, "error");
            setTimeout(success.close, 1000);
        } else {
            setModal(false);
            success.open();
            console.log(fetchData.oneUserGet, "something changed");
            setTimeout(success.close, 1000);
        }
    };
    const deleteUser = () => {
        deleting.deleteUser(fetchData.oneUserGet.id);
        setModal(false);
        success.open();
        setTimeout(success.close, 1000);
    };
    return (
        <form
            className={styles.ViewUser}
            onSubmit={postTrim}
        >
            <div className={styles.Top}>
                <div className={styles.TextTop}>Редактирование пользователя</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={() => setModal(false)}
                />
            </div>
            <div className={styles.Description}>
                <ViewPhoto />
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
                    <CustomInput
                        value={fetchData.oneUserGet.password}
                        name="password"
                        width={272}
                        placeholder="Напишите..."
                        type="password"
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
                <button
                    type="button"
                    className={styles.Delete}
                    onClick={deleteUser}
                >
                    Удалить
                </button>
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
                <CreateJobTitle setModal={setJobTitleModal} />
            </Modal>
            <Modal
                width={350}
                centered
                zIndex={11}
                open={success.isOpen}
                onCancel={success.close}
            >
                <SuccessModal content="Изменения успешно сохранены!" />
            </Modal>
        </form>
    );
};
