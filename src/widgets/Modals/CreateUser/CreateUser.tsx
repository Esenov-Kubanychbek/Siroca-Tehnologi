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
import axios from "axios";
import { BASE_URL } from "../../../shared/variables/variables";

export const CreateUser: FC = () => {
    const [formValues, setFormValue] = useState([
        { name: "role_type", value: null },
        { name: "first_name", value: null },
        { name: "surname", value: null },
        { name: "username", value: null },
        { name: "password", value: null },
        { name: "main_company", value: null },
        { name: "job_title", value: null },
        { name: "image", value: null },
    ]);
    const positionFunc = usePosition();
    const modal = useUser();
    const success = useSuccess();

    const postTrim = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const fl = await formValues.filter((el) => {
                if (el.value === null) {
                    return el;
                } else {
                    return;
                }
            });
            const formData = new FormData();
            if (fl[0]) {
                console.log("postrim err");
            } else if (!fl[0]) {
                formValues.forEach((el) => {
                    if (el.value !== null) {
                        if (el.name === "image") {
                            formData.append(el.name, el.value);
                        } else {
                            formData.append(el.name, el.value);
                        }
                    }
                });
                const response = await axios.post(`${BASE_URL}/users/create/`, formData);
                console.log(response);
            }
        } catch (error) {
            console.log(formValues);
        }
    };
    const addValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const state = [...formValues];
        state.map((el: { name: string; value: null | string | File }) => {
            if (el.name === e.target.name) {
                if (el.name === "image") {
                    el.value = e.target.files ? e.target.files[0] : null;
                } else {
                    el.value = e.target.value;
                }
            }
            return el;
        });
        setFormValue(state);
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
                <AddPhoto downLoad={addValues} />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            name="first_name"
                            width={340}
                            placeholder="Напишите..."
                            change={addValues}
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                name="surname"
                                width={340}
                                placeholder="Напишите..."
                                change={addValues}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton onChange={addValues} />
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
                        change={addValues}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
                        name="password"
                        width={272}
                        placeholder="Напишите..."
                        change={addValues}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Компания</div>
                    <CustomInput
                        type="text"
                        name="main_company"
                        width={272}
                        placeholder="Напишите..."
                        change={addValues}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <CustomInput
                            name="job_title"
                            width={210}
                            placeholder="Напишите..."
                            change={addValues}
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
