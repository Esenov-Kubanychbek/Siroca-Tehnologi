import { ArrowDown2, CloseSquare, MoreSquare } from "iconsax-react";
import styles from "./ChangeCompany.module.scss";
import { FC, useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { Modal } from "antd";
import { ViewCompany } from "../ViewCompany/ViewCompany";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { CreateUser } from "../CreateUser/CreateUser";

interface props {
    message: (text: string, number: number) => void;
    count: number;
    page: number;
}
export const ChangeCompany: FC<props> = ({ message, count, page }) => {
    const [modalButtons, setModalButtons] = useState<boolean>(false);
    const { deleteCompany, idCompany, closeModalView, modalViewCompany, selectedCompanyData, users } = useDataStoreComponies();
    const { resetInput } = useDataInputCompaniesStore();
    const [modalCreateUser, setModalCreateUser] = useState<boolean>(false);
    const [viewModal, setViewModal] = useState<boolean>(false);
    const [managerState, setManagerState] = useState<boolean>(false);
    const [userState, setUserState] = useState<boolean>(false);
    const userssss = selectedCompanyData.users !== undefined  
    ? `${selectedCompanyData.users[0].first_name} ${selectedCompanyData.users[0].last_name}`
    : 'Пользователей нету!';
    const closeView = () => {
        setViewModal(false);
    };
    const openView = () => {
        setViewModal(true);
    };

    const deleteComp = () => {
        deleteCompany(idCompany, page);
        const number = count + 1;
        message(`Компания "${selectedCompanyData.name}" была удалена!`, number);
        closeView();
        closeModalView();
    };
    const names = (id: number | undefined): string => {
        const manager = users.find((manager) => manager.id === id);
        return manager ? manager.full_name : "";
    };

    return (
        <>
            <div
                className={styles.ChangeCompany}
                style={{ display: `${modalViewCompany ? "block" : "none"}` }}
            >
                <div className={styles.buttons}>
                    <div>
                        <MoreSquare
                            cursor={"pointer"}
                            color="black"
                            size={34}
                            onClick={() => setModalButtons((prevState) => !prevState)}
                        />
                        <div
                            style={{ display: `${modalButtons ? "block" : "none"}` }}
                            className={styles.moreClick}
                        >
                            <p
                                onClick={() => {
                                    openView();
                                }}
                            >
                                Редактировать
                            </p>
                            <p onClick={() => setModalCreateUser(true)}>Создать пользователя</p>
                            <p onClick={deleteComp}>Удалить</p>
                        </div>
                    </div>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={closeModalView}
                        size={34}
                    />
                </div>
                <div className={styles.datasCompany}>
                    <div className={styles.headerText}>{selectedCompanyData?.name}</div>
                    <div className={styles.container1}>
                        <div className={styles.block1}>
                            <div className={styles.miniContainer}>
                                <span>Название компании:</span>
                                <p>{selectedCompanyData?.name}</p>
                            </div>
                            <div className={styles.miniContainer}>
                                <span>Страна:</span>
                                <p>{selectedCompanyData?.country}</p>
                            </div>
                        </div>
                        <div className={styles.block2}>
                            <div className={styles.miniContainer}>
                                <span>Краткий код:</span>
                                <p>{selectedCompanyData?.company_code}</p>
                            </div>
                            <div className={styles.miniContainer}>
                                <span>Домен:</span>
                                <p>{selectedCompanyData?.domain}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.main_manager}>
                        <span>Ответственный менеджер:</span>
                        <div className={styles.mainManagers}>{names(selectedCompanyData.main_manager)}<ArrowDown2 onClick={() => {
                            setManagerState(!managerState);
                            managerState ? setUserState(false) : null
                        }} style={{ transform: `${managerState ? 'rotate(360deg)' : 'rotate(270deg)'}` }} color="rgba(28, 106, 177, 1)" /></div>
                    </div>
                    <div className={styles.managers} style={{
                        display: managerState ? 'block' : 'none',
                        zIndex: managerState ? '100' : '0'
                    }}>
                        <div>
                            {selectedCompanyData.managers.map(manager => (
                                <p key={manager}>{names(manager)}</p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.main_manager}>
                        <span>Список пользователей</span>
                        <div>
                            {userssss}
                            <ArrowDown2 color="rgba(28, 106, 177, 1)" onClick={() => {setUserState(!userState); userState ? setManagerState(false) : null}} style={{ transform: `${userState ? 'rotate(360deg)' : 'rotate(270deg)'}` }} />
                        </div>
                    </div>
                    <div style={{
                        display: `${userState ? 'block' : 'none'}`
                    }} className={styles.users}>
                        {selectedCompanyData.users?.map((user) => (
                            <p key={user.id}>{`${user.first_name}     ${user.last_name}`}</p>
                        ))}
                    </div>
                    <div className={styles.miniContainer}>
                        <span>Количество заявок:</span>
                        <p>{selectedCompanyData.count_applications}</p>
                    </div>

                    <div className={styles.miniContainer}>
                        <span>Количество пользователей:</span>
                        <p>{selectedCompanyData.count_users}</p>
                    </div>
                    <div className={styles.times}>
                        <div className={styles.miniContainer}>
                            <span>Дата создания:</span>
                            <p>{selectedCompanyData.created_at}</p>
                        </div>
                        <div className={styles.miniContainer}>
                            <span>Дата крайнего редактирование:</span>
                            <p>{selectedCompanyData.last_updated_at}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                centered
                width={660}
                open={viewModal}
                onCancel={() => {
                    closeView();
                    resetInput();
                }}
            >
                <ViewCompany
                    closeModalView={closeView}
                    message={message}
                    count={count}
                    viewModal={viewModal}
                    page={page}
                />
            </Modal>
            <Modal
                centered
                width={700}
                open={modalCreateUser}
                onCancel={() => setModalCreateUser(false)}
                zIndex={5}
            >
                <CreateUser setModal={setModalCreateUser} />
            </Modal>
        </>
    );
};
