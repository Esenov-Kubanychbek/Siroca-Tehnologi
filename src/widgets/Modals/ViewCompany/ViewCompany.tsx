import { AddSquare, ArrowDown2, CloseSquare, Star1 } from "iconsax-react";
import styles from "./ViewCompany.module.scss"
import { CustomButton, CustomInput } from "../../../shared/ui";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { FC, useEffect, useState, } from "react";
import { useDataInputCompaniesStore } from "./api/dataInputCompanies";
import { Modal } from "antd";
import { AddManager } from "../AddManager/AddManager";

interface props {
    closeModalView: () => void;
    message: (text: string, number: number) => void;
    count: number;
    viewModal: boolean,
    page: number,
}

export const ViewCompany: FC<props> = ({ closeModalView, message, count, page }) => {
    interface managers {
        id: number | undefined,
        main: boolean,
        index: number
    }
    const { selectedCompanyData, fetchDatas, changeInputOne, idCompany, changeInputCompany, users, addedNewManagers, selectedIdCompany } = useDataStoreComponies();
    const { dataInputCompanies } = useDataInputCompaniesStore();
    const [managersMain, setManagersMain] = useState<managers[]>([]);
    const [hovered, setHovered] = useState<boolean>(false);
    const [managersModal, setManagersModal] = useState<boolean>(false);



    const change = async () => {
        const mainManager = managersMain.find(manager => manager.main === true);
        console.log(mainManager)
        const idMainManager = mainManager !== undefined && mainManager.id;
        const newIdManagers = managersMain.map(manager => manager.id);
        const filteredNewIdManagers = newIdManagers.filter(item => typeof item === 'number');
        await changeInputOne(dataInputCompanies, selectedCompanyData, idCompany, idMainManager, filteredNewIdManagers);
        const number = count + 1;
        message(`Изменение были сохранены!`, number)
        fetchDatas(page);
    }

    useEffect(() => {
        
        const otherManagers = selectedCompanyData.managers.map((manager, index) => ({
            id: manager,
            main: manager === selectedCompanyData.main_manager,
            index: index
        }));
        if (otherManagers) {
            setManagersMain(otherManagers);
        }
    }, [selectedCompanyData]);
    const names = (id: number | undefined): string => {
        const manager = users.find(manager => manager.id === id);
        return manager ? manager.first_name : '';
    };
    const [addManagerModal, setAddManagerModal] = useState<boolean>(false);

    const closeAddManager = () => {
        setAddManagerModal(false)
    };
    const openAddManager = () => {
        setAddManagerModal(true)
    };
    const style = {
        top: `${managersModal ? "0" : '-200px'}`,
        zIndex: `${managersModal ? "10" : '-50'}`
    }
    const stylesArrow = {
        transform: ` ${managersMain ? 'rotate( 180deg)' : 'none'}`
    }
    const addNewChangeManager = (id: number) => {
        const managers = [...selectedCompanyData.managers, id];
        addedNewManagers(selectedCompanyData, managers);
    }



    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>{selectedCompanyData?.name}</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={32}
                    onClick={closeModalView}
                />
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Название компании</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.name}
                        width={272}
                        change={changeInputCompany}
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.country}
                        width={272}
                        change={changeInputCompany}
                        name="country"
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.company_code}
                        width={272}
                        change={changeInputCompany}
                        name="company_code"
                        maxLenght={3}
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.domain}
                        width={272}
                        change={changeInputCompany}
                        name="domain"
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <br />
                    <div className={styles.mainManager}>Ответственный менеджер <div onClick={() => {setManagersModal(!managersModal);
        console.log(managersModal);

                    }}><ArrowDown2  style={stylesArrow}/></div></div>
                    {managersMain.map((managerId) => (
                        <div className={styles.managers} key={managerId.id} style={style}>
                            <p className={styles.manager}>{names(managerId.id)}</p>
                            {managerId.main ? <Star1 variant="Bold" color="yellow" size={30} /> : <Star1 onClick={() => {
                                setManagersMain(prevState => {
                                    const updatedManagers = prevState.map((item, i) => ({
                                        ...item,
                                        main: i === managerId.index
                                    }));

                                    console.log(managersMain);
                                    return updatedManagers;
                                });
                            }} />}

                        </div>
                    ))}
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
                            openAddManager();

                        }}
                    />
                </div>
            </div>

            <div className={styles.buttons}>
                <div onClick={() => {
                    closeModalView();
                    if (selectedCompanyData.id !== undefined) {
                        selectedIdCompany(selectedCompanyData.id);
                    }
                }}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Сбросить"

                    />
                </div>
                <div onClick={closeModalView}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Сохранить"
                        onClick={() => {
                            change();
                        }}

                    />
                </div>
            </div>
            <Modal
                open={addManagerModal}
                onCancel={closeAddManager}
                width={500}
                centered
            >
                <AddManager type='changes' addNewChangeManager={addNewChangeManager} closeModal={closeAddManager} />
            </Modal>
        </div>
    );
};
