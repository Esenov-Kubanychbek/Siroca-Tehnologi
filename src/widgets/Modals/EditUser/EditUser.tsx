import styles from "./EditUser.module.scss";
import { FC, FormEvent, useEffect, useState } from "react";
import { CloseSquare } from "iconsax-react";
import { ButtonCreate, CustomButton, CustomInput, ItemExists } from "@/shared/ui";
import { IEditUserModal } from "./types/types";
import { EditImage, RoleButton, EditUserModals } from "./ui";
import { deleteUserApi } from "./api/deleteUserApi";
import { jobTitleApi } from "../../Admin/JobTitles/api/jobTitleApi";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { IAddUser } from "@/shared/types/userTypes";
import { oneUserApi } from "@/shared/api";
import { inputBorder } from "@/shared/helpers";
import { putUserApi } from "./api/putUserApi";

export const EditUser: FC<IEditUserModal> = (props) => {
    const deleting = deleteUserApi();
    const { oneUserState } = oneUserApi();
    const [passwordModal, setPasswordModal] = useState<boolean>(false);
    const [jobTitleModal, setJobTitleModal] = useState<boolean>(false);
    const { putUser, setPutUserState, putUserState, putUserChange } = putUserApi();
    const { setModal } = props;
    const { jobTitleList, getJobTitleList } = jobTitleApi();
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
        return putUserState.job_title === jobTitle.title;
    });
    const hasCompany = data.some((company) => {
        return putUserState.main_company === company.name;
    });
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedAdded: IAddUser = { ...added };
        Object.keys(putUserState).forEach((key) => {
            updatedAdded[key] = putUserState[key] !== "";
        });
        setAdded(updatedAdded);
        if (Object.values(putUserState).every((value) => value !== "") && hasJobTitle && hasCompany) {
            putUser(oneUserState.id);
            setModal(false);
        } else {
            console.log("trimUserError");
        }
    };

    const deleteUser = () => {
        deleting.deleteUser(oneUserState.id);
        setModal(false);
    };

    useEffect(() => {
        setPutUserState(oneUserState);
    }, [oneUserState]);
    useEffect(() => {
        getJobTitleList();
    }, []);
    return (
        <form
            className={styles.EditUser}
            onSubmit={postTrim}
        >
            <div className={styles.Top}>
                <div className={styles.TextTop}>Редактирование</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={() => setModal(false)}
                />
            </div>
            <div className={styles.Description}>
                <EditImage
                    added={added.image}
                    onChange={putUserChange}
                />
                <div className={styles.UserRole}>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Имя</div>
                        <CustomInput
                            trim={added.first_name}
                            name="first_name"
                            change={putUserChange}
                            value={putUserState.first_name}
                            width={340}
                            placeholder="Напишите..."
                        />
                        <div>
                            <div className={styles.Text}>Фамилия</div>
                            <CustomInput
                                trim={added.surname}
                                change={putUserChange}
                                name="surname"
                                value={putUserState.surname}
                                width={340}
                                placeholder="Напишите..."
                            />
                        </div>
                    </div>
                    <RoleButton
                        trim={added.role_type}
                        role={putUserState.role_type}
                        onChange={putUserChange}
                    />
                </div>
            </div>
            <div className={styles.Login}>
                <div>
                    <div className={styles.Text}>Логин</div>
                    <CustomInput
                        trim={added.username}
                        change={putUserChange}
                        name="username"
                        value={putUserState.username}
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
                            value={putUserState.main_company}
                            type="text"
                            name="main_company"
                            style={{
                                width: "222px",
                                border: inputBorder(putUserState.main_company, added.main_company, hasCompany),
                            }}
                            placeholder="Напишите..."
                            onChange={putUserChange}
                        />
                        <ItemExists
                            inputState={putUserState.main_company}
                            exists={hasCompany}
                            text="Компании с таким названием не существует! Повторите попытку, или создайте новую компанию."
                        />
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Text}>Должность в компании</div>
                    <div className={styles.AddRole}>
                        <div className={styles.Input}>
                            <input
                                value={putUserState.job_title}
                                name="job_title"
                                style={{
                                    width: "160px",
                                    border: inputBorder(putUserState.job_title, added.job_title, hasJobTitle),
                                }}
                                placeholder="Напишите..."
                                onChange={putUserChange}
                            />
                            <ItemExists
                                inputState={putUserState.job_title}
                                exists={hasJobTitle}
                                text="Данной должности не существует! Повторите попытку, или создайте новую должность."
                            />
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
                <CustomButton
                    variant="Primary"
                    width={150}
                    text="Сохранить"
                    type="submit"
                />
            </div>
            <EditUserModals
                jobTitleModal={jobTitleModal}
                setJobTitleModal={setJobTitleModal}
                passwordModal={passwordModal}
                setPasswordModal={setPasswordModal}
            />
        </form>
    );
};
