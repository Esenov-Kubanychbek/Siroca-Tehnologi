import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import styles from "./Users.module.scss";
import { SearchInput } from "@/features";
import { ButtonCreate } from "@/shared/ui";
import { Modal } from "antd";
import { CreateUser } from "../..";
import { usersApi } from "./api/usersApi";
import { UsersList } from "./ui";
import { postUserApi } from "@/widgets/Modals/CreateUser/api/postUserApi";
import { allCompaniesListApi } from "@/shared/api";

export const Users: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [closeState, setCloseState] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>("");
    const { resetPostUserState } = postUserApi();
    const { getUsersList, setSearchList } = usersApi();
    const { setCompanyInputState } = allCompaniesListApi();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputState(e.target.value);
        setCloseState(true);
    };
    const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            setSearchList(inputState);
        }
    };
    const closeFunc = () => {
        setCloseState(false);
        setInputState("");
        getUsersList(1);
    };
    const closeUserModal = () => {
        setCompanyInputState("");
        resetPostUserState();
        setModal(false);
    };
    return (
        <div className={styles.Users}>
            <div className={styles.UsersSearch}>
                <div className={styles.Name}>Поиск по пользователям</div>
                <div className={styles.Search}>
                    <SearchInput
                        value={inputState}
                        onChange={handleChange}
                        closeState={closeState}
                        closeFunc={closeFunc}
                        onKeyDown={handleKeyPress}
                    />
                    <ButtonCreate
                        name="Создать пользователя"
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
            <UsersList />
            <Modal
                centered
                width={700}
                open={modal}
                onCancel={closeUserModal}
                zIndex={5}
            >
                <CreateUser setModal={setModal} />
            </Modal>
        </div>
    );
};
