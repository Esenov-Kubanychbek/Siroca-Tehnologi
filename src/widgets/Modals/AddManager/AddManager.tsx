import { CloseSquare } from "iconsax-react"
import { ChangeEvent, FC, useEffect, useState } from "react"
import styles from './AddManager.module.scss'
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi"
import { IUserGet } from "../../../shared/types/userTypes"
import { CustomButton } from "../../../shared/ui"
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies"
interface types {
    type: string,
    addNewChangeManager?: (id: number) => void,
    closeModal: () => void,
}
export const AddManager: FC<types> = ({ type, addNewChangeManager, closeModal }) => {
    const { users } = useDataStoreComponies();
    const managers = users.filter((array) => array.role_type === "manager");
    const [filteredManager, setFilteredManager] = useState<IUserGet[]>();
    const [inputValue, setInputValue] = useState<string>("");
    const { addManager } = useDataInputCompaniesStore();
    const [err, setErr] = useState<boolean>(false);
    const [object, setObject] = useState<IUserGet>();
    const [text, setText] = useState<string>('');

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
        setText(value);
        const filter = filterManager(value);
        setFilteredManager(filter);
        setErr(false);
    };

    const addManagers = () => {

        managers?.some((array) => {
            if (text === array.first_name) {
                if (filteredManager) {
                    setErr(false);
                    filteredManager.map(array => {
                        if (type === 'created') {
                            addManager(array.id);
                            closeModal();
                        }
                        if (type === 'changes') {
                            array.id !== undefined && addNewChangeManager !== undefined && addNewChangeManager(array.id)
                            closeModal();
                            console.log(array.id);
                            
                        }
                    });
                    setInputValue("");
                }
                return true;
            } else {
                setErr(true);
            }
        });
    };

    useEffect(() => {
        if (object) {
            setInputValue('');
        }
    }, [object])
    return (
        <div className={styles.AddManager}>
            <CloseSquare className={styles.close} onClick={() => {
                closeModal();
                setInputValue('')
            }} />

            <div className={styles.addContainer}>
                <p className={styles.head}>Добавить менеджера</p>

                <div className={styles.searchManager}>
                    <input
                        onChange={searchManagerChange}
                        value={text}
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
                                        setObject(manager);
                                        setText(manager.first_name)
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
                    onClick={() => {
                        closeModal();
                        setInputValue('')
                    }}
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
