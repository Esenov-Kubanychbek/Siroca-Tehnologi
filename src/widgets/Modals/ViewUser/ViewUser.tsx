import { CloseSquare } from "iconsax-react";
import styles from "./ViewUser.module.scss";
import { usePosition, useSuccess, useViewUser } from "../../../shared/hooks";
import { FC } from "react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { AddButton } from "../CreateUser/ui/AddButton";
import { Modal } from "antd";
import { CreatePosition, SuccessModal } from "../..";
import { usersApi } from "../../../shared/api";
import { RoleButton } from "./ui/RoleButton";
import { ViewPhoto } from "./ui/ViewPhoto";

export const ViewUser: FC = () => {
    const positionFunc = usePosition();
    const fetchData = usersApi();
    const modal = useViewUser();
    const success = useSuccess();
    const postTrim = () => {
        if (Object.values(fetchData.oneUserGet).every((value) => value === value)) {
            modal.close();
            success.open();
            console.log(fetchData.oneUserGet, "error");
        } else {
            fetchData.putting(fetchData.oneUserGet, fetchData.oneUserGet.id);
            modal.close();
            success.open();
            console.log(fetchData.oneUserGet, "something changed");
        }
    };

    return (
        <form className={styles.ViewUser}>
            <div className={styles.Top}>
                <div className={styles.TextTop}>Пользователь</div>
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
                            change={fetchData.setOneUser}
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                name="surname"
                                value={fetchData.oneUserGet.surname}
                                width={340}
                                placeholder="Напишите..."
                                change={fetchData.setOneUser}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton
                            role={fetchData.oneUserGet.role_type}
                            change={fetchData.setOneUser}
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
                        change={fetchData.setOneUser}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
                        value={fetchData.oneUserGet.password}
                        name="password"
                        width={272}
                        placeholder="Напишите..."
                        change={fetchData.setOneUser}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Компания</div>
                    <CustomInput
                        value={fetchData.oneUserGet.main_company}
                        type="number"
                        name="main_company"
                        width={272}
                        placeholder="Напишите..."
                        change={fetchData.setOneUser}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <CustomInput
                            value={fetchData.oneUserGet.job_title}
                            name="job_title"
                            type="number"
                            width={210}
                            placeholder="Напишите..."
                            change={fetchData.setOneUser}
                        />
                        <AddButton onClick={positionFunc.open} />
                    </div>
                </div>
            </div>
            <div className={styles.Buttons}>
                <div onClick={() => console.log(fetchData.oneUserGet)}>
                    <CustomButton
                        variant="Without"
                        width={160}
                        text="Отменить"
                    />
                </div>
                <div onClick={postTrim}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Сохранить"
                    />
                </div>
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
                <SuccessModal />
            </Modal>
        </form>
    );
};
