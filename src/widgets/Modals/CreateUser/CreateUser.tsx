import { ChangeEvent, FC, useState } from "react";
import styles from "./CreateUser.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CloseSquare, GalleryAdd } from "iconsax-react";
import userModal from "./model/UserModal";
import { RoleButton } from "./ui/RoleButton";
import { AddButton } from "./ui/AddButton";
import usersApi from "../../Admin/Users/api/UsersApi";
import positionModal from "../CreatePosition/model/PositionModal";
import { Modal } from "antd";
import { CreatePosition } from "../..";

export const CreateUser: FC = () => {
    const positionFunc = positionModal();
    const fetchData = usersApi();
    const modal = userModal();

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
            console.log("success");
        } else {
            console.log(userState, "error");
        }
    };

    return (
        <form className={styles.CreateUser}>
            <div className={styles.Top}>
                <div className={styles.TextTop}>Создание пользователя</div>
                <div
                    onClick={modal.close}
                    className={styles.Close}
                >
                    <CloseSquare size={34} />
                </div>
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
                        <div className={styles.Text}>Фамилия имя</div>
                        <CustomInput
                            name="first_name"
                            width={290}
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
                        width={222}
                        placeholder="@siroca.com"
                        change={formCreateValue}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
                        name="password"
                        width={222}
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
                        width={222}
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
                            width={160}
                            placeholder="Напишите..."
                            // change={formCreateValue}
                        />
                        <AddButton onClick={positionFunc.open} />
                    </div>
                </div>
            </div>
            <div className={styles.Buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Secondary"
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
                bodyStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "30px 0",
                }}
                footer={null}
                width={700}
                centered
                closeIcon={false}
                open={positionFunc.isOpen}
                onCancel={positionFunc.close}
                zIndex={10}
            >
                <CreatePosition />
            </Modal>
        </form>
    );
};
