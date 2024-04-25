import { AddSquare, ArrowDown2, CloseSquare, Star1 } from "iconsax-react";
import styles from "./ViewCompany.module.scss"
import { CustomButton, CustomInput } from "../../../shared/ui";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { FC, useEffect, useState, } from "react";
import { useViewCompany } from "../../../shared/hooks/modalHooks/useViewCompany";
import { useDataInputCompaniesStore } from "./api/dataInputCompanies";
import { useAddManager } from "../../../shared/hooks/modalHooks";
import { Modal } from "antd";
import { AddManager } from "../AddManager/AddManager";

export const ViewCompany: FC = () => {
    interface managers {
        id: number | undefined,
        main: boolean,
        index: number
    }
    const modal = useViewCompany();
    const { selectedCompanyData, fetchDatas, changeInputOne, idCompany, changeInputCompany, users } = useDataStoreComponies();
    const { dataInputCompanies } = useDataInputCompaniesStore();
    const [managersMain, setManagersMain] = useState<managers[]>([]);
    const [hovered, setHovered] = useState<boolean>(false);
    const addManager = useAddManager();
    const [idManagers, setIdManagers] = useState<number[]>([])

    const addNewChangeManager = (id: number) => {
        setIdManagers((prevState)=>[
            ...prevState,
            id
        ])
    }
    const addNewChangeManagers = (id: (number)[]) => {
        setIdManagers((prevState)=>[
            ...prevState,
            ...id
        ])
    }

    const change = async () => {
        const mainManager = managersMain.find(manager => manager.main === true);
        const managers = managersMain.filter(manager => manager.main === false);
        const idMainManager = mainManager !== undefined && mainManager.id;
        const newIdManagers = managers.map(manager => manager.id);
        const filteredNewIdManagers = newIdManagers.filter(item => typeof item === 'number');
        addNewChangeManagers(filteredNewIdManagers);
        await changeInputOne(dataInputCompanies, selectedCompanyData, idCompany, idMainManager, idManagers);
        fetchDatas();
    }

    useEffect(() => {
        const mainManager = {
            id: selectedCompanyData.main_manager,
            main: true,
            index: 0
        };

        const otherManagers = selectedCompanyData.managers.map((manager, index) => ({
            id: manager,
            main: false,
            index: index + 1
        }));
        setManagersMain([mainManager, ...otherManagers]);
        console.log(managersMain);
        

    }, [selectedCompanyData]);
    const names = (id: number | undefined): string => {
        const manager = users.find(manager => manager.id === id);
        return manager ? manager.first_name : '';
    }
    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>{selectedCompanyData?.name}</div>
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
                    <p className={styles.mainManager}>Ответственный менеджер <ArrowDown2 /></p>
                    {managersMain.map((managerId) => (
                        <div className={styles.managers} key={managerId.id}>
                            <p className={styles.manager}>{names(managerId.id)}</p>
                            {managerId.main ? <Star1 variant="Bold" color="yellow" size={30} /> : <Star1 onClick={() => {
                                setManagersMain(prevState => {
                                    const updatedManagers = prevState.map((item, i) => ({
                                        ...item,
                                        main: i === managerId.index
                                    }));


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
                            addManager.open();
                        }}
                    />
                </div>
            </div>

            <div className={styles.buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Сбросить"
                    />
                </div>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Сохранить"
                        onClick={change}

                    />
                </div>
            </div>
            <Modal
                open={addManager.isOpen}
                onCancel={addManager.close}
                width={500}
                centered
            >
                <AddManager type='changes' addNewChangeManager={addNewChangeManager}/>
            </Modal>
        </div>
    );
};

