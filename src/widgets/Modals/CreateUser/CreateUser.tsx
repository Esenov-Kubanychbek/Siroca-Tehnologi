import { FC, FormEvent, useState } from "react";
import styles from "./CreateUser.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CloseSquare } from "iconsax-react";
import { RoleButton } from "./ui/RoleButton";
import { AddButton } from "./ui/AddButton";
import { ConfigProvider, Modal } from "antd";
import { CreatePosition, SuccessModal } from "../..";
import { usePosition, useSuccess, useUser } from "../../../shared/hooks/modalHooks";
import { AddPhoto } from "./ui/AddPhoto";
import { usersApi } from "../../Admin/Users/api/usersApi";

export const CreateUser: FC = () => {
    const positionFunc = usePosition();
    const fetchData = usersApi();
    const modal = useUser();
    const success = useSuccess();


    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(fetchData.oneUser).every((value) => value !== "")) {
            fetchData.posting(fetchData.oneUser);
            console.log(fetchData.oneUser, "success");
        } else {
            console.log(fetchData.oneUser, "error");
        }
    };
    return (
        <form
            className={styles.CreateUser}
            onSubmit={postTrim}
        >
            <div className={styles.Top}>
                <div className={styles.TextTop}>Создание пользователя</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={modal.close}
                />
            </div>
            <div className={styles.Description}>
                <AddPhoto />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            name="first_name"
                            width={340}
                            placeholder="Напишите..."
                            change={fetchData.setOneUser}
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                name="surname"
                                width={340}
                                placeholder="Напишите..."
                                change={fetchData.setOneUser}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton onChange={fetchData.setOneUser} />
                    </div>
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        name="username"
                        width={272}
                        placeholder="@siroca.com"
                        change={fetchData.setOneUser}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
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
                <CustomButton
                    type="button"
                    variant="Without"
                    width={160}
                    onClick={modal.close}
                    text="Отменить"
                />
                <CustomButton
                    type="submit"
                    variant="Primary"
                    width={150}
                    text="Создать"
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
            <ConfigProvider
                theme={{
                    token: {
                        borderRadiusLG: 50,
                    },
                }}
            >
                <Modal
                    width={350}
                    centered
                    zIndex={11}
                    open={success.isOpen}
                    onCancel={success.close}
                >
                    <SuccessModal content="Пользователь Добавлен!" />
                </Modal>
            </ConfigProvider>
        </form>
    );
};
