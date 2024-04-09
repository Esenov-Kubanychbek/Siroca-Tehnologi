import { CloseSquare } from "iconsax-react";
import styles from "./ViewUser.module.scss";
import { usePosition, useSuccess, useViewUser } from "../../../shared/hooks/modalHooks";
import { FC, FormEvent } from "react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { AddButton } from "../CreateUser/ui/AddButton";
import { Modal } from "antd";
import { CreatePosition, SuccessModal } from "../..";
import { RoleButton } from "./ui/RoleButton";
import { ViewPhoto } from "./ui/ViewPhoto";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { deleteUserApi } from "./api/deleteUserApi";

export const ViewUser: FC = () => {
    const positionFunc = usePosition();
    const fetchData = usersApi();
    const deleting = deleteUserApi()
    const modal = useViewUser();
    const success = useSuccess();
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(fetchData.oneUserGet).every((value) => value === value)) {
            modal.close();
            success.open();
            console.log(fetchData.oneUserGet, "error");
            setTimeout(success.close, 1000);
        } else {
            modal.close();
            success.open();
            console.log(fetchData.oneUserGet, "something changed");
            setTimeout(success.close, 1000);
        }
    };
    const deleteUser = () => {
        deleting.deleteUser(fetchData.oneUserGet.id)
        modal.close()
        success.open()
        setTimeout(success.close, 1000);
    }
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
                    onClick={modal.close}
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
                        <RoleButton
                            role={fetchData.oneUserGet.role_type}
                        />
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
                        <AddButton onClick={positionFunc.open} />
                    </div>
                </div>
            </div>
            <div className={styles.Buttons}>
                <button type="button" className={styles.Delete} onClick={deleteUser}>
                    Удалить
                </button>
                <CustomButton
                    type="button"
                    variant="Without"
                    width={160}
                    text="Отменить"
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
                open={positionFunc.isOpen}
                onCancel={positionFunc.close}
                zIndex={10}
            >
                <CreatePosition />
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
