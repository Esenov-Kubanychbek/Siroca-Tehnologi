import { AddSquare, CloseSquare } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { ChangeEvent, FC, useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { useAddManager, useCompany } from "../../../shared/hooks/modalHooks";
import { Modal } from "antd";
import { AddManager } from "../AddManager/AddManager";
import { IUserGet } from "../../../shared/types/userTypes";

interface modal {
    openModals: () => void;
}

export const CreateCompany: FC<modal> = ({openModals}) => {
    const modal = useCompany();
    const [allData, setAllData] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValueText, setInputValueText] = useState<string>('')
    const { addCompany, users } = useDataStoreComponies();
    const { changeInput, resetInput, dataInputCompanies, addMainManager } = useDataInputCompaniesStore();
    const [filteredManager, setFilteredManager] = useState<IUserGet[]>([]);
    const managers = users.filter(item => item.role_type === 'manager');
    const [err, setErr] = useState<boolean>(false)
    const addManager = useAddManager();

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
                    resetInput();
                    setAllData(false);
                    modal.close();
                    console.log(dataInputCompanies.main_manager);
                    setInputValue('');
                    setErr(false);
                    setTimeout(() => {
                        openModals();
                    }, 300)
                    return true; // Возвращаем true, чтобы завершить поиск
                }
                return false; // Возвращаем false, чтобы продолжить поиск
            });
            if (!managerFound) {
                setErr(true); // Устанавливаем ошибку, если менеджер не найден
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
                    onClick={modal.close}
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
                        allData={allData}
                        datas={dataInputCompanies.name}
                        value={dataInputCompanies.name}
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        change={changeInput}
                        name="country"
                        allData={allData}
                        datas={dataInputCompanies.country}
                        value={dataInputCompanies.country}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <CustomInput
                        placeholder="Ввести код "
                        width={272}
                        change={changeInput}
                        name="company_code"
                        allData={allData}
                        datas={dataInputCompanies.company_code}
                        value={dataInputCompanies.company_code}
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        name="domain"
                        change={changeInput}
                        allData={allData}
                        datas={dataInputCompanies.domain}
                        value={dataInputCompanies.domain}
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
                                    }} className={styles.manager}>{manager.first_name} </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={styles.hintAdd}
                            style={{ display: `${hovered ? 'block' : 'none'}` }}

                        >
                            <p className={styles.hint}>
                                Нажмите что бы добавить менеджера
                            </p>
                            <div className={styles.tre}> </div>
                        </div>

                        <div
                            className={styles.addManagers}
                        >

                            <AddSquare
                                color="white"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                onClick={() => {
                                    addManager.open();
                                }}
                            />
                        </div>
                    </div>


                </div>

            </div>
            <p style={{ display: `${allData ? 'block' : 'none'}` }}>Все поля должны быть обязательно заполнены*</p>
            <p style={{ display: `${err ? 'block' : 'none'}` }}>Такого менеджера не существует*</p>
            <div className={styles.buttons}>
                <div onClick={modal.close}>
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
                open={addManager.isOpen}
                onCancel={addManager.close}
                width={500}
                centered
            >
                <AddManager type='created'/>
            </Modal>

        </div>
    );
};
