import styles from "./EditUser.module.scss";
import { FC, FormEvent, useEffect, useState } from "react";
import { CloseSquare, InfoCircle, TickCircle } from "iconsax-react";
import { ButtonCreate, CustomButton, CustomInput } from "../../../shared/ui";
import { IEditUserModal } from "./types/types";
import { editUserApi } from "./api/editUserApi";
import { EditImage, Modals, RoleButton } from "./ui";
import { deleteUserApi } from "./api/deleteUserApi";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { jobTitleApi } from "../../Admin/JobTitles/api/jobTitleApi";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { IAddUser } from "../../../shared/types/userTypes";

export const EditUser: FC<IEditUserModal> = (props) => {
    const fetchData = usersApi();
    const deleting = deleteUserApi();
    const [passwordModal, setPasswordModal] = useState<boolean>(false);
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const { editUser, setEditState, editUserState, editUserChange } = editUserApi();
    const { setModal } = props;
    const { jobTitleList } = jobTitleApi();
    const { data } = useDataStoreComponies();
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
    const hasJobTitle = jobTitleList.some((jobTitle) => {
        return editUserState.job_title === jobTitle.title;
    });
    const hasCompany = data.some((company) => {
        return editUserState.main_company === company.name;
    });
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedAdded: IAddUser = { ...added };
        Object.keys(editUserState).forEach((key) => {
            updatedAdded[key] = editUserState[key] !== "";
        });
        console.log(added);
        setAdded(updatedAdded);
        if (Object.values(editUserState).every((value) => value !== "") && hasJobTitle && hasCompany) {
            editUser(fetchData.oneUserGet.id);
            setModal(false);
        } else {
            console.log("trimUserError");
        }
    };

    const deleteUser = () => {
        deleting.deleteUser(fetchData.oneUserGet.id);
        setModal(false);
        setModalSuccess(true);
        setTimeout(() => setModalSuccess(false), 1000);
    };

    useEffect(() => {
        setEditState(fetchData.oneUserGet);
    }, [fetchData.oneUserGet]);

    return (
        <form className={styles.EditUser} onSubmit={postTrim}>
            <div className={styles.Top}>
                <div className={styles.TextTop}>Редактирование</div>
                <CloseSquare cursor={"pointer"} size={34} onClick={() => setModal(false)} />
            </div>
            <div className={styles.Description}>
                <EditImage
                    added={added.image}
                    onChange={editUserChange}
                />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            trim={added.first_name}
                            name="first_name"
                            change={editUserChange}
                            value={editUserState.first_name}
                            width={340}
                            placeholder="Напишите..."
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                trim={added.surname}
                                change={editUserChange}
                                name="surname"
                                value={editUserState.surname}
                                width={340}
                                placeholder="Напишите..."
                            />
                        </div>
                    </div>
                    <RoleButton
                        trim={added.role_type}
                        role={editUserState.role_type}
                        onChange={editUserChange}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        trim={added.username}
                        change={editUserChange}
                        name="username"
                        value={editUserState.username}
                        width={272}
                        placeholder="@siroca.com"
                    />
                </div>
                <div>
                    <div className={styles.Text}>Пароль</div>
                    <CustomButton
                        text="Сбросить пароль"
                        width={272}
                        variant="ColorBlue"
                        type="button"
                        onClick={() => setPasswordModal(true)}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div className={styles.Bottom}>
                    <div className={styles.Text}>Компания</div>
                    <div className={styles.Input}>
                        <input
                            value={editUserState.main_company}
                            type="text"
                            name="main_company"
                            style={{
                                width: "222px",
                                border:
                                    hasCompany || added.main_company
                                        ? hasCompany
                                            ? "2px solid #00A91B"
                                            : "none"
                                        : "2px solid #E51616",
                            }}
                            placeholder="Напишите..."
                            onChange={editUserChange}
                        />
                        {hasCompany || editUserState.main_company === "" ? (
                            hasCompany ? (
                                <TickCircle color="#00A91B" />
                            ) : null
                        ) : (
                            <InfoCircle color="#E51616" />
                        )}
                    </div>
                    {hasCompany || editUserState.main_company === "" ? null : (
                        <p className={styles.NotExist}>
                            Компании с таким названием не существует! Повторите попытку, или создайте новую компанию.
                        </p>
                    )}
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <div className={styles.Input}>
                            <input
                                value={editUserState.job_title}
                                name="job_title"
                                style={{
                                    width: "160px",
                                    border:
                                        hasJobTitle || added.job_title
                                            ? hasJobTitle
                                                ? "2px solid #00A91B"
                                                : "none"
                                            : "2px solid #E51616",
                                }}
                                placeholder="Напишите..."
                                onChange={editUserChange}
                            />
                            {hasJobTitle || editUserState.job_title === "" ? (
                                hasJobTitle ? (
                                    <TickCircle color="#00A91B" />
                                ) : null
                            ) : (
                                <InfoCircle color="#E51616" />
                            )}
                        </div>
                        <ButtonCreate onClick={() => setJobTitleModal(true)} />
                    </div>
                    {hasJobTitle || editUserState.job_title === "" ? null : (
                        <p className={styles.NotExist}>
                            Данной должности не существует! Повторите попытку, или создайте новую должность.
                        </p>
                    )}
                </div>
            </div>
            {Object.values(added).every((value) => value === true) ? null : (
                <div className={styles.MustTrim}>
                    <p>Все поля должны быть обязательно заполнены*</p>
                </div>
            )}
            <div className={styles.Buttons}>
                <CustomButton
                    type="button"
                    width={150}
                    onClick={deleteUser}
                    variant="ColorRed"
                    text="Удалить"
                />
                <CustomButton
                    type="button"
                    variant="Without"
                    width={160}
                    text="Отменить"
                    onClick={() => setModal(false)}
                />
                <CustomButton variant="Primary" width={150} text="Сохранить" type="submit" />
            </div>
            <Modals
                jobTitleModal={jobTitleModal}
                setJobTitleModal={setJobTitleModal}
                modalSuccess={modalSuccess}
                setModalSuccess={setModalSuccess}
                passwordModal={passwordModal}
                setPasswordModal={setPasswordModal}
            />
        </form>
    );
};
