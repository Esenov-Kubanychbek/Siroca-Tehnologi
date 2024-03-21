import { ChangeEvent, FC, useState } from "react";
import styles from "./CreateUser.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CloseSquare, GalleryAdd } from "iconsax-react";
import { RoleButton } from "./ui/RoleButton";
import { AddButton } from "./ui/AddButton";
import usersApi from "../../Admin/Users/api/UsersApi";
import { Modal } from "antd";
import { CreatePosition, SuccessModal } from "../..";
import { usePosition, useSuccess, useUser } from "../../../shared/hooks";

export const CreateUser: FC = () => {
    const positionFunc = usePosition();
    const fetchData = usersApi();
    const modal = useUser();
    const success = useSuccess();
    const [userState, setUserState] = useState<Record<string, unknown>>({
        first_name: "",
        image: null,
        job_title: null,
        main_company: 0,
        password: "",
        role_type: "",
        surname: "surname",
        username: "",
    });

    const formCreateValue = (e: ChangeEvent<HTMLInputElement>) => {
        setUserState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const postTrim = () => {
        if (Object.values(userState).every((value) => value !== "")) {
            fetchData.posting(userState);
            modal.close();
            success.open();
            console.log("success");
        } else {
            modal.close();
            success.open();
            console.log(userState, "error");
        }
    };

    return (
        <form className={styles.CreateUser}>
            <div className={styles.Top}>
                <div className={styles.TextTop}>Создание пользователя</div>
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
                            name="first_name"
                            width={340}
                            placeholder="Напишите..."
                            change={formCreateValue}
                        />
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton change={formCreateValue} />
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
                        change={formCreateValue}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
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
                <div onClick={modal.close}>
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
