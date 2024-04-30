import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./CreateUser.module.scss";
<<<<<<< HEAD
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CloseSquare } from "iconsax-react";
import { RoleButton } from "./ui/RoleButton";
import { AddButton } from "./ui/AddButton";
import { Modal } from "antd";
import { CreateJobTitle, SuccessModal } from "../..";
import { AddPhoto } from "./ui/AddPhoto";
import { ICreateUserModal } from "./types/types";
import { usersApi } from "../../Admin/Users/api/usersApi";

export const CreateUser: FC<ICreateUserModal> = (props) => {
    const { setModal } = props;
    const createUserApi = usersApi();
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
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
                createUserApi.postUser(formData);
                setModal(false);
                setModalSuccess(true);
                setTimeout(() => setModalSuccess(false), 1000);
            }
        } catch (error) {
            console.log(formValues);
        }
    };
    const addValues = (e: ChangeEvent<HTMLInputElement>) => {
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

=======
import { ButtonCreate, CustomButton, CustomInput } from "../../../shared/ui";
import { CloseSquare, InfoCircle, TickCircle } from "iconsax-react";
import { Modal } from "antd";
import { CreateJobTitle, SuccessModal } from "../..";
import { ICreateUserModal } from "./types/types";
import { createUserApi } from "./api/createUserApi";
import { AddImage, RoleButton } from "./ui";
import { jobTitleApi } from "../../Admin/JobTitles/api/jobTitleApi";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";

export const CreateUser: FC<ICreateUserModal> = (props) => {
    const { setModal } = props;
    const { createUser, createUserState, createUserChange } = createUserApi();
    const { jobTitleList } = jobTitleApi();
    const { data } = useDataStoreComponies();
    const [added, setAdded] = useState<boolean>(true);
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const hasJobTitle = jobTitleList.some((jobTitle) => {
        return createUserState.job_title === jobTitle.title;
    });
    const hasCompany = data.some((company) => {
        return createUserState.main_company === company.name;
    });
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            Object.values(createUserState).every((value) => value !== "") &&
            hasJobTitle === true &&
            hasCompany === true
        ) {
            createUser();
            setModal(false);
            setModalSuccess(true);
            setTimeout(() => setModalSuccess(false), 1000);
        } else if (createUserState.image === "") {
            setAdded(false);
        } else {
            console.log("trimUserError");
        }
    };
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
    return (
        <form
            className={styles.CreateUser}
            onSubmit={postTrim}
        >
            <div className={styles.Top}>
                <div>Создание пользователя</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={() => setModal(false)}
                />
            </div>
            <div className={styles.Description}>
                <AddImage
                    onChange={createUserChange}
                    added={added}
                />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            name="first_name"
                            width={340}
                            placeholder="Напишите..."
                            change={createUserChange}
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                name="surname"
                                width={340}
                                placeholder="Напишите..."
                                change={createUserChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.Text}>Тип роли</div>
                        <RoleButton onChange={createUserChange} />
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
                        change={createUserChange}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomInput
                        name="password"
                        width={272}
                        placeholder="Напишите..."
                        change={createUserChange}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div className={styles.Bottom}>
                    <div className={styles.Text}>Компания</div>
<<<<<<< HEAD
                    <CustomInput
                        type="text"
                        name="main_company"
                        width={272}
                        placeholder="Напишите..."
                        change={addValues}
                    />
=======
                    <div className={styles.Input}>
                        <input
                            type="text"
                            name="main_company"
                            style={{ width: "222px", border: hasCompany ? "2px solid #00A91B" : "none" }}
                            placeholder="Напишите..."
                            onChange={createUserChange}
                        />
                        {hasCompany === true || createUserState.main_company === "" ? (
                            hasCompany ? (
                                <TickCircle color="#00A91B" />
                            ) : null
                        ) : (
                            <InfoCircle color="#E51616" />
                        )}
                    </div>
                    {hasCompany === true || createUserState.main_company === "" ? null : (
                        <p className={styles.NotExist}>
                            Компании с таким названием не существует! Повторите попытку, или создайте новую компанию.
                        </p>
                    )}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
<<<<<<< HEAD
                        <CustomInput
                            name="job_title"
                            width={210}
                            placeholder="Напишите..."
                            change={addValues}
                        />
                        <AddButton onClick={() => setJobTitleModal(true)} />
=======
                        <div className={styles.Input}>
                            <input
                                name="job_title"
                                style={{ width: "160px", border: hasJobTitle ? "2px solid #00A91B" : "none" }}
                                placeholder="Напишите..."
                                onChange={createUserChange}
                            />
                            {hasJobTitle === true || createUserState.job_title === "" ? (
                                hasJobTitle ? (
                                    <TickCircle color="#00A91B" />
                                ) : null
                            ) : (
                                <InfoCircle color="#E51616" />
                            )}
                        </div>
                        <ButtonCreate onClick={() => setJobTitleModal(true)} />
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                    </div>
                    {hasJobTitle === true || createUserState.job_title === "" ? null : (
                        <p className={styles.NotExist}>
                            Данной должности не существует! Повторите попытку, или создайте новую должность.
                        </p>
                    )}
                </div>
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    type="button"
                    variant="Without"
                    width={160}
                    onClick={() => setModal(false)}
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
                <SuccessModal content="Пользователь Добавлен!" />
            </Modal>
        </form>
    );
};
