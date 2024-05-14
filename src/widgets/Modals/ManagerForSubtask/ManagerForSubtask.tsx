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
    const [inputState, setInputState] = useState<string>("");
    const [chosen, setChosen] = useState<boolean>(false);
    const { setManagerModal } = props;
    const { usersList, setSearchList } = usersApi();
    const { allManagersList, filterManagers } = allManagersListApi();
    const { addManagerToOneSubtask } = checkListApi();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputState(value);
        setSearchList(value);
        setChosen(false);
        filterManagers(usersList, value);
    };
    const handleClick = (manager: string) => {
        setInputState(manager);
        filterManagers([], "");
        setChosen(true);
    };
    const searchWords = inputState.split(" ").filter((word) => word.trim() !== "");
    const hasFirstWord = allManagersList.some((manager) => {
        return manager.first_name || manager.surname === searchWords[0];
    });
    const hasSecondWord = allManagersList.some((manager) => {
        return hasFirstWord && (manager.first_name || manager.surname === searchWords[1]);
    });
    const closeFunc = () => {
        if (hasFirstWord && hasSecondWord) {
            console.log("success");
            // addManagerToOneSubtask(inputState);
        } else if (hasFirstWord) {
            console.log(hasFirstWord, "firstName");
        } else if (hasSecondWord) {
            console.log(hasSecondWord, "surname");
        } else {
            console.log("none");
        }
        // setInputState("");
        // filterManagers([], "");
        // setManagerModal(false);
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
                                inputState === "" || chosen
                                    ? styles.FirstInput
                                    : allManagersList.length === 0 && chosen === false
                                      ? styles.NotExist
                                      : styles.SecondInput
                            }
                            type="text"
                            placeholder="Введите имя пользователя..."
                            value={inputState}
                            onChange={handleChange}
                        />
                        {inputState !== "" && (
                            <>
                                {allManagersList.map((manager, i) => (
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
                    {inputState !== "" && allManagersList.length === 0 && chosen === false && (
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
                    onClick={closeFunc}
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
