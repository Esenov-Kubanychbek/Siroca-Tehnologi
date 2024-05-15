import styles from "./CreateUser.module.scss";
import { FC, FormEvent, useState } from "react";
import { CloseSquare, Eye, EyeSlash, InfoCircle, TickCircle } from "iconsax-react";
import { ButtonCreate, CustomButton, CustomInput } from "../../../shared/ui";
import { Modal, Popover } from "antd";
import { CreateJobTitle } from "../..";
import { ICreateUserModal } from "./types/types";
import { createUserApi } from "./api/createUserApi";
import { AddImage, RoleButton } from "./ui";
import { jobTitleApi } from "../../Admin/JobTitles/api/jobTitleApi";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { IAddUser } from "../../../shared/types/userTypes";

export const CreateUser: FC<ICreateUserModal> = (props) => {
    const { setModal } = props;
    const { createUser, createUserState, createUserChange } = createUserApi();
    const { jobTitleList } = jobTitleApi();
    const { data } = useDataStoreComponies();
    const [passwordState, setPasswordState] = useState<boolean>(false);
    const [added, setAdded] = useState<IAddUser>({
        first_name: true,
        surname: true,
        role_type: true,
        image: true,
        username: true,
        job_title: true,
        main_company: true,
        password: true,
    });
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const hasJobTitle = jobTitleList.some((jobTitle) => {
        return createUserState.job_title === jobTitle.title;
    });
    const hasCompany = data.some((company) => {
        return createUserState.main_company === company.name;
    });
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedAdded: IAddUser = { ...added };
        Object.keys(createUserState).forEach((key) => {
            updatedAdded[key] = createUserState[key] !== "";
        });
        console.log(added);
        setAdded(updatedAdded);
        if (Object.values(createUserState).every((value) => value !== "") && hasJobTitle && hasCompany) {
            createUser();
            setModal(false);
        } else {
            console.log("trimUserError");
        }
    };
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
                    added={added.image}
                />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            trim={added.first_name}
                            name="first_name"
                            width={340}
                            placeholder="Напишите..."
                            change={createUserChange}
                        />
                        <div className={styles.Text}>Фамилия</div>
                        <CustomInput
                            trim={added.surname}
                            name="surname"
                            width={340}
                            placeholder="Напишите..."
                            change={createUserChange}
                        />
                    </div>
                    <RoleButton
                        onChange={createUserChange}
                        trim={added.role_type}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        trim={added.username}
                        name="username"
                        width={272}
                        placeholder="@siroca.com"
                        change={createUserChange}
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <div className={styles.PasswordInput}>
                        <CustomInput
                            trim={added.password}
                            name="password"
                            width={272}
                            type={passwordState ? "text" : "password"}
                            placeholder="Напишите..."
                            change={createUserChange}
                        />
                        {passwordState ? (
                            <Eye onClick={() => setPasswordState(false)} />
                        ) : (
                            <EyeSlash onClick={() => setPasswordState(true)} />
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.Login}>
                <div className={styles.Bottom}>
                    <div className={styles.Text}>Компания</div>
                    <div className={styles.Input}>
                        <input
                            type="text"
                            name="main_company"
                            style={{
                                width: "272px",
                                border:
                                    hasCompany || added.main_company
                                        ? hasCompany
                                            ? "2px solid #00A91B"
                                            : createUserState.main_company !== "" ? "2px solid #E51616" : "none"
                                        : "2px solid #E51616",
                            }}
                            placeholder="Напишите..."
                            onChange={createUserChange}
                        />
                        {hasCompany || createUserState.main_company === "" ? (
                            hasCompany ? (
                                <TickCircle color="#00A91B" />
                            ) : null
                        ) : (
                            <Popover
                                placement="top"
                                color="#F4F4F4"
                                content={
                                    <p className={styles.NotExist}>
                                        Компании с таким названием не существует! Повторите попытку, или создайте новую
                                        компанию.
                                    </p>
                                }
                            >
                                <InfoCircle color="#E51616" />
                            </Popover>
                        )}
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <div className={styles.Input}>
                            <input
                                name="job_title"
                                style={{
                                    width: "210px",
                                    border:
                                        hasJobTitle || added.job_title
                                            ? hasJobTitle
                                                ? "2px solid #00A91B"
                                                : createUserState.job_title !== "" ? "2px solid #E51616" : "none"
                                            : "2px solid #E51616",
                                }}
                                placeholder="Напишите..."
                                onChange={createUserChange}
                            />
                            {hasJobTitle || createUserState.job_title === "" ? (
                                hasJobTitle ? (
                                    <TickCircle color="#00A91B" />
                                ) : null
                            ) : (
                                <Popover
                                    placement="top"
                                    color="#F4F4F4"
                                    content={
                                        <p className={styles.NotExist}>
                                            Данной должности не существует! Повторите попытку, или создайте новую
                                            должность.
                                        </p>
                                    }
                                >
                                    <InfoCircle color="#E51616" />
                                </Popover>
                            )}
                        </div>
                        <ButtonCreate onClick={() => setJobTitleModal(true)} />
                    </div>
                </div>
            </div>
            <div className={styles.MustTrim}>
                {Object.values(added).every((value) => value === true) ? null : (
                    <p>Все поля должны быть обязательно заполнены*</p>
                )}
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
                <CreateJobTitle setModal={setJobTitleModal} />
            </Modal>
        </form>
    );
};
