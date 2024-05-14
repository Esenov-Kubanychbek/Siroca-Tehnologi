import styles from "./ManagerForSubtask.module.scss";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "@/shared/ui";
import { usersApi } from "@/widgets/Admin/Users/api/usersApi";
import { allManagersListApi } from "./api/allManagersListApi";
import { checkListApi } from "@/features/CheckLists/api/checkListApi";

interface IManagerForSubtask {
    setManagerModal: Dispatch<SetStateAction<boolean>>;
}

export const ManagerForSubtask: FC<IManagerForSubtask> = (props) => {
    const [chosen, setChosen] = useState<boolean>(false);
    const { setManagerModal } = props;
    const { addManagerToOneSubtask } = checkListApi();
    const { usersList, setSearchList } = usersApi();
    const { managerState, setManagerState, managerExists, setManagerExists, searchManagersList, filterManagers } =
        allManagersListApi();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setManagerState(value);
        setSearchList(value);
        setChosen(false);
        setManagerExists(value);
        filterManagers(usersList, value);
    };
    const handleClick = (manager: string) => {
        setManagerState(manager);
        filterManagers([], "");
        setManagerExists(manager);
        setChosen(true);
    };
    const closeFunc = () => {
        if (managerExists === true) {
            addManagerToOneSubtask(managerState);
            setManagerState("");
            filterManagers([], "");
            setManagerModal(false);
        }
    };
    return (
        <div className={styles.ManagerForSubtask}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <p>Назначить менеджера</p>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setManagerModal(false)}
                    />
                </div>
                <div className={styles.SelectManager}>
                    <div>
                        <input
                            className={
                                managerState === "" || chosen
                                    ? styles.FirstInput
                                    : searchManagersList.length === 0 && chosen === false
                                      ? styles.NotExist
                                      : styles.SecondInput
                            }
                            type="text"
                            placeholder="Введите имя пользователя..."
                            value={managerState}
                            onChange={handleChange}
                        />
                        {managerState !== "" && (
                            <>
                                {searchManagersList.map((manager, i) => (
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
                    {managerState !== "" && managerExists === false && searchManagersList.length === 0 && (
                        <div className={styles.NotExistText}>
                            Данного пользователя не существует! Повторите попытку.
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Without"
                    width={101}
                    text="Отмена"
                    onClick={() => setManagerModal(false)}
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
