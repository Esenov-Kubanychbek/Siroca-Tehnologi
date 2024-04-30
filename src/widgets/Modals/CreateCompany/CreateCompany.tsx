import { AddSquare, CloseSquare, LampOn } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { ChangeEvent, FC, useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { Modal } from "antd";
import { AddManager } from "../AddManager/AddManager";
import { IUserGet } from "../../../shared/types/userTypes";

interface modal {
    openModals: () => void;
    closeCreateModal: () => void;
    nameCreateCompany: (text: string, number: number) => void;
    count: number;
}

export const CreateCompany: FC<modal> = ({ openModals, closeCreateModal, nameCreateCompany, count }) => {
    const [allData, setAllData] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValueText, setInputValueText] = useState<string>('')
    const { addCompany, users, lamp } = useDataStoreComponies();
    const { changeInput, resetInput, dataInputCompanies, addMainManager, addManagers, company_code } = useDataInputCompaniesStore();
    const [filteredManager, setFilteredManager] = useState<IUserGet[]>([]);
    const managers = users.filter(item => item.role_type === 'manager');
    const [err, setErr] = useState<boolean>(false)
    const [addManagerModal, setAddManagerModal] = useState<boolean>(false);
    const closeAddManager = () => {
        setAddManagerModal(false)
    };
    const openAddManager = () => {
        setAddManagerModal(true)
    };
    const addNewCompany = () => {
        if (
            dataInputCompanies.name &&
            dataInputCompanies.company_code &&
            dataInputCompanies.country &&
            dataInputCompanies.managers &&
            dataInputCompanies.domain
        ) {
            const managerFound = filteredManager?.some((filtered) => {
                if (filtered.first_name === inputValue) {
                    addCompany(dataInputCompanies);
                    const number = count + 1;
                    nameCreateCompany(`Компания "${dataInputCompanies.name}" была создана!`, number)
                    resetInput();
                    setAllData(false);
                    closeCreateModal();
                    console.log(dataInputCompanies.main_manager);
                    setInputValue('');
                    setErr(false);
                    setTimeout(() => {
                        openModals();
                    }, 300)
                    return true;
                }
                return false;
            });
            if (!managerFound) {
                setErr(true);
            }
        } else {
            setAllData(true);
            console.log('error');
        }
    }


    const filterManager = (text: string) => {
        const filtered = managers.filter(manager => {
            const inputText = text.toLowerCase();
            const nameManager = manager.first_name.toLowerCase();
            return nameManager.startsWith(inputText);
        });
        return filtered;
    };

    const searchManagerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setInputValueText(value);
        const filter = filterManager(value);
        setFilteredManager(filter)
    }




    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>Создание компании</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={32}
                    onClick={closeCreateModal}
                />
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Название компании</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        change={changeInput}
                        name="name"
                        value={dataInputCompanies.name}
                        error={allData}
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        change={changeInput}
                        name="country"
                        value={dataInputCompanies.country}
                        error={allData}

                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <div className={styles.lamp} >
                        <CustomInput
                            placeholder="Ввести код "
                            width={272}
                            change={changeInput}
                            name="company_code"
                            value={dataInputCompanies.company_code}
                            maxLenght={3}
                            error={allData}

                        />
                        <div onClick={async () => {
                            const respose = await lamp(dataInputCompanies.name);
                            if(typeof respose === 'string'){
                                company_code(respose)
                            }  
                        }}><LampOn variant="Bold" color="#1c6ab1" /></div>
                       
                    </div>

                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        name="domain"
                        change={changeInput}
                        value={dataInputCompanies.domain}
                        error={allData}

                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Ответственный менеджер</label>
                    <br />

                    <div className={styles.managers}>
                        <div className={styles.addedManeger}>
                            <input value={inputValue} onChange={searchManagerChange} placeholder="Введите имя пользователя" type="text" className={styles.searchInput} />
                            <div style={{ display: `${inputValueText ? 'block' : 'none'}` }} className={styles.allManagers}>
                                {filteredManager.map((manager) => (
                                    <div onClick={() => {
                                        addMainManager(manager.id);
                                        setInputValue(manager.first_name);
                                        setInputValueText('');
                                        addManagers(manager.id)

                                    }} className={styles.manager}>{manager.first_name} </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={styles.hintAdd}
                            style={{ display: `${hovered ? "block" : "none"}` }}
                        >
                            <p className={styles.hint}>Нажмите что бы добавить менеджера</p>
                            <div className={styles.tre}> </div>
                        </div>

                        <div className={styles.addManagers}>
                            <AddSquare
                                color="white"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                onClick={openAddManager}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ display: `${allData ? 'block' : 'none'}` }}>Все поля должны быть обязательно заполнены*</p>
            <p style={{ display: `${err ? 'block' : 'none'}` }}>Такого менеджера не существует*</p>
            <div className={styles.buttons}>
                <div onClick={closeCreateModal}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Отменить"
                        onClick={() => {
                            resetInput();
                            setAllData(false);
                            setErr(false)
                        }}
                    />
                </div>
                <div>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Создать"
                        onClick={addNewCompany}
                    />
                </div>
            </div>
            <Modal
                open={addManagerModal}
                onCancel={closeAddManager}
                width={500}
                centered
            >
                <AddManager type='created' closeModal={closeAddManager} />
            </Modal>
        </div>
    );
};
