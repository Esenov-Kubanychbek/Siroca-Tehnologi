import styles from "./ManagerForSubtask.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "@/shared/ui";
import { allUsersListApi } from "@/shared/api";
import { checkListApi } from "@/features/CheckLists/api/checkListApi";
import { createSubtaskApi } from "@/features/CheckLists/api/createSubtaskApi";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { useDataStoreComponies } from "@/widgets/Admin/Companies/api/componiesApi";

interface IManagerForSubtask {
    forWhat: "createSubtask" | "editSubtask" | 'createCompany' | 'changeCompany';
    setManagerModal: Dispatch<SetStateAction<boolean>>;
}

export const ManagerForSubtask: FC<IManagerForSubtask> = (props) => {
    const { setManagerModal, forWhat } = props;
    const { addManagerToCreateSubtask } = createSubtaskApi();
    const { addManagerToOneSubtask } = checkListApi();
    const { addManager } = useDataInputCompaniesStore()
    const { allUsersList } = allUsersListApi();
    const { addedNewManagers } = useDataStoreComponies();
    const {
        managerInputState,
        setManagerInputState,
        managerExists,
        managerInputChange,
        setManagerExists,
        searchManagersNamesList,
    } = allUsersListApi();
    const postTrim = () => {
        if (managerExists === true) {
            if (forWhat === "createSubtask") {
                addManagerToCreateSubtask(managerInputState);
            } else if (forWhat === "editSubtask") {
                addManagerToOneSubtask(managerInputState);
            } else if (forWhat === 'createCompany') {
                const managerId = allUsersList.find(user => user.full_name === managerInputState);
                if (managerId) {
                    addManager(managerId.id)
                }
            } else if(forWhat === 'changeCompany'){
                const managerId = allUsersList.find(user => user.full_name === managerInputState);
                if (managerId) {
                    addedNewManagers(managerId.id);
                }
            }
            setManagerInputState("");
            setManagerModal(false);
        } else {
            setManagerExists(false);
        }
    };
    const closeFunc = () => {
        setManagerInputState("")
        setManagerModal(false)
    }
    return (
        <div className={styles.ManagerForSubtask}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <p>Назначить менеджера</p>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={closeFunc}
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
                    onClick={closeFunc}
                />
                <CustomButton
                    variant="Primary"
                    text="Добавить"
                    width={121}
                    onClick={postTrim}
                />
            </div>
        </div>
    );
};
