import styles from "./ManagerForSubtask.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "@/shared/ui";
import { allUsersListApi } from "@/shared/api";
import { checkListApi } from "@/features/CheckLists/api/checkListApi";
import { createSubtaskApi } from "@/features/CheckLists/api/createSubtaskApi";

interface IManagerForSubtask {
    forWhat: "createSubtask" | "editSubtask";
    setManagerModal: Dispatch<SetStateAction<boolean>>;
}

export const ManagerForSubtask: FC<IManagerForSubtask> = (props) => {
    const { setManagerModal, forWhat } = props;
    const { addManagerToCreateSubtask } = createSubtaskApi();
    const { addManagerToOneSubtask } = checkListApi();
    const {
        managerInputState,
        setManagerInputState,
        managerExists,
        managerInputChange,
        setManagerExists,
        searchManagersNamesList,
    } = allUsersListApi();
    const closeFunc = () => {
        if (managerExists === true) {
            if (forWhat === "createSubtask") {
                addManagerToCreateSubtask(managerInputState);
            } else if (forWhat === "editSubtask") {
                addManagerToOneSubtask(managerInputState);
            }
            setManagerInputState("");
            setManagerModal(false);
        } else {
            setManagerExists(false);
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
                                managerInputState === "" || managerExists
                                    ? styles.FirstInput
                                    : searchManagersNamesList.length === 0 && managerExists === false
                                      ? styles.NotExist
                                      : styles.SecondInput
                            }
                            type="text"
                            placeholder="Введите имя пользователя..."
                            value={managerInputState}
                            onChange={managerInputChange}
                        />
                        {managerInputState !== "" && (
                            <>
                                {searchManagersNamesList.map((manager, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setManagerInputState(manager)}
                                    >
                                        {manager}
                                    </button>
                                ))}
                            </>
                        )}
                    </div>
                    {managerInputState !== "" && managerExists === false && searchManagersNamesList.length === 0 && (
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
