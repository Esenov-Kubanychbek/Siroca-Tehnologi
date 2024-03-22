import { CloseSquare, GalleryAdd } from "iconsax-react";
import styles from "./ViewUser.module.scss";
import { usePosition, useSuccess, useViewUser } from "../../../shared/hooks";
import { ChangeEvent, FC, useState } from "react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { RoleButton } from "../CreateUser/ui/RoleButton";
import { AddButton } from "../CreateUser/ui/AddButton";
import { Modal } from "antd";
import { CreatePosition, SuccessModal } from "../..";
import { IUser } from "../../../shared/types/userTypes";
import { usersApi } from "../../../shared/api";

export const ViewUser: FC = () => {
    const positionFunc = usePosition();
    const fetchData = usersApi();
    const modal = useViewUser();
    const success = useSuccess();
    const [userState, setUserState] = useState<IUser>({
        first_name: fetchData.oneUser.first_name,
        image: fetchData.oneUser.image,
        job_title: fetchData.oneUser.job_title,
        main_company: fetchData.oneUser.main_company,
        password: fetchData.oneUser.password,
        role_type: fetchData.oneUser.role_type,
        surname: fetchData.oneUser.surname,
        username: fetchData.oneUser.username,
    });

    const formCreateValue = (e: ChangeEvent<HTMLInputElement>) => {
        setUserState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const postTrim = () => {
        if (Object.values(userState).every((value) => value !== value)) {
            fetchData.putting(userState, 1);
            modal.close();
            success.open();
            console.log(userState);
        } else {
            modal.close();
            success.open();
            console.log(userState, "error");
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
                <div className={styles.AddPhoto}>
                    <GalleryAdd
                        size={50}
                        color="#252525"
                    />
                    <div className={styles.Text2}>Добавьте фотографию пользователя</div>
                </div>
                <div className={styles.UserRole}>
                    <div>
                        <div className={styles.Text}>Имя/Фамилия</div>
                        <CustomInput
                            value={userState.first_name}
                            name="first_name"
                            width={340}
                            placeholder="Напишите..."
                            change={formCreateValue}
                        />
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton
                            role={userState.role_type}
                            change={formCreateValue}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        name="username"
                        value={userState.username}
                        width={272}
                        placeholder="@siroca.com"
                        change={formCreateValue}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
                        value={userState.password}
                        name="password"
                        width={272}
                        placeholder="Напишите..."
                        change={formCreateValue}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Компания</div>
                    <CustomInput
                        value={userState.main_company}
                        type="number"
                        name="main_company"
                        width={272}
                        placeholder="Напишите..."
                        change={formCreateValue}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <CustomInput
                            value={userState.job_title}
                            name="job_title"
                            type="number"
                            width={210}
                            placeholder="Напишите..."
                        />
                        <AddButton onClick={positionFunc.open} />
                    </div>
                </div>
            </div>
            <div className={styles.Buttons}>
                <div onClick={() => console.log(userState, fetchData.oneUser)}>
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
                        text="Создать"
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
