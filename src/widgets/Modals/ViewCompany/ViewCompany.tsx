import { AddSquare, ArrowDown2, CloseSquare, Star1, Trash } from "iconsax-react";
import styles from "./ViewCompany.module.scss"
import { CustomButton, CustomInput } from "../../../shared/ui";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { FC, useEffect, useState } from "react";
import { Modal } from "antd";
import { allUsersListApi } from "@/shared/api";
import { ManagerForSubtask } from "../ManagerForSubtask/ManagerForSubtask";

interface props {
    closeModalView: () => void;
    message: (text: string, number: number) => void;
    count: number;
    viewModal: boolean;
    page: number;
}

export const ViewCompany: FC<props> = ({ closeModalView, message, count, page }) => {
    interface managers {
        id: number | undefined;
        main: boolean;
        index: number;
    }
    const {
        selectedCompanyData,
        fetchDatas,
        changeInputOne,
        changeInputCompany,
        selectedIdCompany,
    } = useDataStoreComponies();
    const [managersMain, setManagersMain] = useState<managers[]>([]);
    const [hovered, setHovered] = useState<boolean>(false);
    const [managersModal, setManagersModal] = useState<boolean>(false);
    const { allUsersList } = allUsersListApi();

    const change = async () => {
        const mainManager = managersMain.find((manager) => manager.main === true);
        const idMainManager = mainManager !== undefined && mainManager.id;
        const newIdManagers = managersMain.map((manager) => manager.id);
        const filteredNewIdManagers = newIdManagers.filter((item) => typeof item === "number");
        await changeInputOne( idMainManager, filteredNewIdManagers);
        const number = count + 1;
        message(`Изменение были сохранены!`, number);
        fetchDatas(page);
    };

    useEffect(() => {
        const otherManagers = selectedCompanyData.managers.map((manager, index) => ({
            id: manager,
            main: manager === selectedCompanyData.main_manager,
            index: index,
        }));
        if (otherManagers) {
            setManagersMain(otherManagers);
        }
    }, [selectedCompanyData]);
    const names = (id: number | undefined): string => {
        const manager = allUsersList.find(manager => manager.id === id);
        return manager ? `${manager.full_name}` : '';
    };
    const [addManagerModal, setAddManagerModal] = useState<boolean>(false);
    
    const openAddManager = () => {
        setAddManagerModal(true);
    };
    const style = {
        marginTop: `${managersModal ? "0" : '-100px'}`,
        zIndex: `${managersModal ? "10" : '-50'}`,
    }
    const stylesArrow = {
        transform: ` rotate( ${managersModal ? '360deg' : '270deg'})`,
        cursor: 'pointer'
    }
    


    return (
        <div className={styles.ViewCompany}>
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
                        color="black"
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
                        color="black"
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
                        maxLength={3}
                        color="black"
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
                        color="black"
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div className={styles.blockTwoOne}>
                    <br />
                    <div className={styles.mainManager}>Ответственный менеджер <div onClick={() => {
                        setManagersModal(!managersModal);
                    }}><ArrowDown2 color="rgba(28, 106, 177, 1)" className={styles.arrow} style={stylesArrow} /></div></div>
                    {managersMain.map((managerId) => (
                        <div
                            className={styles.managers}
                            key={managerId.id}
                            style={style}
                        >
                            <p className={styles.manager}>{names(managerId.id)}</p>
                            {managerId.main ? 
                                <div className={styles.gold}>
                                    <Star1 variant="Bold" color="rgba(210, 195, 55, 1)" size={24} />
                                </div> :
                                <div className={styles.icons}>
                                    <Trash onClick={() => {
                                        setManagersMain(prevState => {
                                            const newManagers = prevState.filter(manager => manager.id !== managerId.id);
                                            return newManagers;
                                            
                                        })
                                    }} size={24}/>
                                    <Star1 onClick={() => {
                                        setManagersMain(prevState => {
                                            const updatedManagers = prevState.map((item, i) => ({
                                                ...item,
                                                main: i === managerId.index
                                            }));
                                            return updatedManagers;
                                        });
                                    }} />
                                </div>}

                        </div>
                    ))}
                </div>
                <div className={styles.adds} >
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
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => { openAddManager() }}
                    >

                        <AddSquare color="white" />
                    </div>
                </div>
            </div>

            <div className={styles.buttons}>
                <div className={styles.buttonss}>
                    <div
                        onClick={() => {
                            closeModalView();
                            if (selectedCompanyData.id !== undefined) {
                                selectedIdCompany(selectedCompanyData.id);
                            }
                        }}
                    >
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
            </div>
            <Modal
                open={addManagerModal}
                onCancel={() => setAddManagerModal(false)}
                width={500}
                centered
            >
                <ManagerForSubtask
                    forWhat="changeCompany"
                    setManagerModal={setAddManagerModal}
                />
            </Modal>
        </div>
    );
};
