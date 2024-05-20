import { ChangeEvent, FC, useState } from "react";
import styles from "./PeopleSelect.module.scss";
import { allManagersListApi } from "@/widgets/Modals/ManagerForSubtask/api/allManagersListApi";
import { usersApi } from "@/widgets/Admin/Users/api/usersApi";

export const PeopleSelect: FC = () => {
    const [chosen, setChosen] = useState<boolean>(false);
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
    return (
        <div className={styles.PeopleSelect}>
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
                <div className={styles.NotExistText}>Данного пользователя не существует! Повторите попытку.</div>
            )}
        </div>
    );
};
