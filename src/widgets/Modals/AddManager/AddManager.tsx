import { CloseSquare } from "iconsax-react";
import { ChangeEvent, FC, useState } from "react";
import styles from "./AddManager.module.scss";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { IUserGet } from "../../../shared/types/userTypes";
import { CustomButton } from "../../../shared/ui";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { IAddManagerModal } from "./types/types";

export const AddManager: FC<IAddManagerModal> = (props) => {
    const { setModal } = props;
    const { users } = useDataStoreComponies();
    const managers = users.filter((array) => array.role_type === "manager");
    const [filteredManager, setFilteredManager] = useState<IUserGet[]>();
    const [inputValue, setInputValue] = useState<string>("");
    const { addManager } = useDataInputCompaniesStore();
    const [err, setErr] = useState<boolean>(false);

    const filterManager = (text: string) => {
        const filtered = managers.filter((manager) => {
            const inputText = text.toLowerCase();
            const nameManager = manager.first_name.toLowerCase();
            return nameManager.startsWith(inputText);
        });
        return filtered;
    };

    const searchManagerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        const filter = filterManager(value);
        setFilteredManager(filter);
        setErr(false);
    };

    const addManagers = () => {
        console.log(inputValue);

        managers?.some((array) => {
            if (inputValue === array.first_name) {
                if (filteredManager?.length === 1) {
                    setErr(false);
                    filteredManager.map((array) => {
                        addManager(array.id);
                    });
                    setModal(false);
                    setInputValue("");
                }
                return true;
            } else {
                setErr(true);
            }
        });
    };
    return (
        <div className={styles.AddManager}>
            <CloseSquare
                className={styles.close}
                cursor={"pointer"}
                onClick={() => setModal(false)}
            />
            <div className={styles.addContainer}>
                <p className={styles.head}>Добавить менеджера</p>

                <div className={styles.searchManager}>
                    <input
                        onChange={searchManagerChange}
                        value={inputValue}
                        type="text"
                        className={styles.searchManagers}
                        name="searchManager"
                    />
                    <div
                        className={styles.results}
                        style={{ display: `${inputValue ? "block" : "none"}` }}
                    >
                        {filteredManager !== undefined &&
                            filteredManager.map((manager) => (
                                <p
                                    className={styles.manager}
                                    key={manager.id}
                                    onClick={() => {
                                        setInputValue(manager.first_name);
                                    }}
                                >
                                    {manager.first_name}
                                </p>
                            ))}
                    </div>
                </div>
            </div>
            <p
                style={{
                    display: `${err ? "block" : "none"} `,
                    color: "red",
                }}
            >
                Данного менеджера не существует! Повторите попытку или создайте нового менеджера.
            </p>
            <div className={styles.buttons}>
                <CustomButton
                    variant="Secondary"
                    width={150}
                    text="Отмена"
                    onClick={() => setModal(false)}
                />
                <CustomButton
                    variant="Primary"
                    width={150}
                    text="Добавить"
                    onClick={addManagers}
                />
            </div>
        </div>
    );
};
