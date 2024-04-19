import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import styles from "./Users.module.scss";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui";
import { UsersList } from "./ui/UsersList";
import { Modal } from "antd";
import { CreateUser } from "../..";
import { usersApi } from "./api/usersApi";

export const Users: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [closeState, setCloseState] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>("");
    const fetchUsers = usersApi();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputState(e.target.value);
        setCloseState(true)
    };
    const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            fetchUsers.setSearchList(inputState)
        }
    };
    const closeFunc = () => {
        setCloseState(false);
        setInputState("");
        fetchUsers.getUsersList()
    }
    return (
        <div className={styles.Users}>
            <div className={styles.UsersSearch}>
                <div className={styles.Name}>Поиск по пользователям</div>
                <div className={styles.Search}>
                    <SearchInput value={inputState} onChange={handleChange} closeState={closeState} closeFunc={closeFunc} onKeyDown={handleKeyPress}/>
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
                onCancel={() => setModal(false)}
                zIndex={5}
            >
                <CreateUser setModal={setModal} />
            </Modal>
        </div>
    );
};
