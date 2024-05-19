import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./UserForSubtask.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "../../../shared/ui";
import { usersApi } from "@/widgets/Admin/Users/api/usersApi";
import { allUsersListApi } from "./api/allUsersListApi";
import { createSubtaskApi } from "@/features/CheckLists/api/createSubtaskApi";

interface IUserForSubtask {
    setUserModal: Dispatch<SetStateAction<boolean>>;
}

export const UserForSubtask: FC<IUserForSubtask> = (props) => {
    const [chosen, setChosen] = useState<boolean>(false);
    const { setUserModal } = props;
    const { usersList, setSearchList } = usersApi();
    const { addUserToCreateSubtask } = createSubtaskApi();
    const { userState, setUserState, userExists, setUserExists, searchUsersList, filterUsers } = allUsersListApi();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserState(value);
        setSearchList(value);
        setChosen(false);
        setUserExists(value);
        filterUsers(usersList, value);
    };
    const handleClick = (manager: string) => {
        setUserState(manager);
        filterUsers([], "");
        setUserExists(manager);
        setChosen(true);
    };
    const closeFunc = () => {
        if (userExists === true) {
            addUserToCreateSubtask(userState);
            setUserState("");
            filterUsers([], "");
            setUserModal(false);
        }
    };
    return (
        <div className={styles.UserForSubtask}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <p>Отметить пользователя</p>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setUserModal(false)}
                    />
                </div>
                <div className={styles.SelectUser}>
                    <div>
                        <input
                            className={
                                userState === "" || chosen
                                    ? styles.FirstInput
                                    : searchUsersList.length === 0 && chosen === false
                                      ? styles.NotExist
                                      : styles.SecondInput
                            }
                            type="text"
                            placeholder="Введите имя пользователя..."
                            value={userState}
                            onChange={handleChange}
                        />
                        {userState !== "" && (
                            <>
                                {searchUsersList.map((manager, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleClick(`${manager.first_name} ${manager.surname}`)}
                                    >
                                        {manager.first_name} {manager.surname}
                                    </button>
                                ))}
                            </>
                        )}
                    </div>
                    {userState !== "" && userExists === false && searchUsersList.length === 0 && (
                        <div className={styles.NotExistText}>
                            Данного менеджера не существует! Повторите попытку или создайте нового менеджера.
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Without"
                    width={101}
                    text="Отмена"
                    onClick={() => setUserModal(false)}
                />
                <CustomButton
                    variant="Primary"
                    text="Добавить"
                    width={121}
                    onClick={closeFunc}
                />
            </div>
        </div>
    );
};
