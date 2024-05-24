import { AddSquare, CloseSquare, LampOn } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { FC, useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { Modal } from "antd";
import { allUsersListApi } from "@/shared/api";
import { ManagerForSubtask } from "../ManagerForSubtask/ManagerForSubtask";

interface modal {
    openModals: () => void;
    closeCreateModal: () => void;
    nameCreateCompany: (text: string, number: number) => void;
    count: number;
    page: number;
}

export const CreateCompany: FC<modal> = ({ openModals, closeCreateModal, nameCreateCompany, count, page }) => {
    const [allData, setAllData] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const { addCompany, lamp } = useDataStoreComponies();
    const { changeInput, resetInput, dataInputCompanies, addMainManager, addManagers, company_code } = useDataInputCompaniesStore();
    const [err, setErr] = useState<boolean>(false)
    const [addManagerModal, setAddManagerModal] = useState<boolean>(false);
    const { managerInputState, managerInputChange, searchManagersNamesList, setManagerInputState, allUsersList, allManagersNamesList } = allUsersListApi();

    const functionCreateCompany = () => {
        addCompany(dataInputCompanies, page);
        const number = count + 1;
        nameCreateCompany(`Компания "${dataInputCompanies.name}" была создана!`, number);
        resetInput();
        setAllData(false);
        closeCreateModal();
        setManagerInputState('')
        setErr(false);
        setTimeout(() => {
            openModals();
        }, 300);
    }

    const addNewCompany = () => {
        if (
            dataInputCompanies.name &&
            dataInputCompanies.company_code &&
            dataInputCompanies.country &&
            dataInputCompanies.domain
        ) {
            if (managerInputState !== '') {
                const managerFound = allManagersNamesList?.some((filtered) => {
                    if (filtered === managerInputState) {
                        functionCreateCompany();
                        return true;
                    }
                    return false;
                });
                if (!managerFound) {
                    setErr(true);
                }
            }else{
                functionCreateCompany();
            }
        } else {
            setAllData(true);
            console.log("error");
        }
    };



    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>Создание компании</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={32}
                    onClick={() => {
                        closeCreateModal();
                        resetInput();
                    }}
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
                        trim={allData || err ? dataInputCompanies.name : true}
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
                        trim={allData || err ? dataInputCompanies.country : true}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <div className={styles.lamp}>
                        <CustomInput
                            placeholder="Ввести код "
                            width={272}
                            change={changeInput}
                            name="company_code"
                            value={dataInputCompanies.company_code}
                            maxLength={3}
                            trim={allData || err ? dataInputCompanies.company_code : true}
                        />
                        <div className={styles.lampCursor} onClick={async () => {
                            const respose = await lamp(dataInputCompanies.name);
                            if (typeof respose === 'string') {
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
                        trim={allData || err ? dataInputCompanies.domain : true}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Ответственный менеджер</label>
                    <br />

                    <div className={styles.managers}>
                        <div className={styles.addedManeger}>
                            <input value={managerInputState} onChange={managerInputChange} placeholder="Введите имя пользователя" type="text" className={styles.searchInput} style={{
                                border: `${err ? '2px solid #E51616' : 'none'}`,
                                color: `${err ? '#E51616' : 'black'}`
                            }} />
                            <div style={{ display: `${managerInputState ? 'block' : 'none'}` }} className={styles.allManagers}>
                                {searchManagersNamesList.map((manager) => (
                                    <div key={manager} onClick={() => {
                                        setManagerInputState(manager);
                                        const id = allUsersList.find(user => user.full_name === manager);
                                        if (id) {
                                            addMainManager(id.id);
                                            addManagers(id.id);
                                        }
                                    }} className={styles.manager}>{manager} </div>
                                ))}
                            </div>
                        </div>


                        <div className={styles.addManagers}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            onClick={() => setAddManagerModal(true)}
                        >

                            <div
                                className={styles.hintAdd}
                                style={{ display: `${hovered ? "block" : "none"}` }}
                            >
                                <p className={styles.hint}>Нажмите что бы добавить менеджера</p>
                                <div className={styles.tre}> </div>
                            </div>
                            <AddSquare
                                color="white"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ display: `${allData ? "block" : "none"}` }}>Все поля должны быть обязательно заполнены*</p>
            <p style={{ display: `${err ? "block" : "none"}` }}>Такого менеджера не существует*</p>
            <div className={styles.buttons}>
                <div onClick={closeCreateModal}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Отменить"
                        onClick={() => {
                            resetInput();
                            setAllData(false);
                            setErr(false);
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
                onCancel={() => setAddManagerModal(false)}
                width={500}
                centered
            >
                <ManagerForSubtask
                    forWhat="createCompany"
                    setManagerModal={setAddManagerModal}
                />
            </Modal>
        </div>
    );
};
