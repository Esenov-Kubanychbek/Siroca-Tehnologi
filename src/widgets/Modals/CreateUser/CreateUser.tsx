import styles from "./CreateUser.module.scss";
import { FC, FormEvent } from "react";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "@/shared/ui";
import { ICreateUserModal } from "./types/types";
import { AddImage, CompanyDetails, Login, Names, RoleButton } from "./ui";
import { postUserApi } from "./api/postUserApi";
import { allCompaniesListApi } from "@/shared/api";

export const CreateUser: FC<ICreateUserModal> = (props) => {
    const { setModal } = props;
    const { jobTitleExists, setPostUserAdded, resetPostUserState, postUser, postUserAdded } = postUserApi();
    const { setCompanyInputState, companyExists } = allCompaniesListApi();
    const closeFunc = () => {
        setCompanyInputState("");
        resetPostUserState();
        setModal(false);
    };
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPostUserAdded();
        if (Object.values(postUserAdded).every((value) => value !== false) && jobTitleExists && companyExists) {
            postUser();
            setModal(false);
        }
    };
    return (
        <form
            className={styles.CreateUser}
            onSubmit={postTrim}
        >
            <div className={styles.Top}>
                <div>Создать пользователя</div>
                <CloseSquare onClick={closeFunc} />
            </div>
            <div className={styles.Description}>
                <AddImage />
                <div className={styles.UserRole}>
                    <Names />
                    <RoleButton />
                </div>
            </div>
            <Login />
            <CompanyDetails />
            <div className={styles.MustTrim}>
                {Object.values(postUserAdded).every((value) => value === true) ? null : (
                    <p>Все поля должны быть обязательно заполнены*</p>
                )}
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    type="button"
                    variant="Without"
                    width={160}
                    onClick={closeFunc}
                    text="Отменить"
                />
                <CustomButton
                    type="submit"
                    variant="Primary"
                    width={150}
                    text="Создать"
                />
            </div>
        </form>
    );
};
