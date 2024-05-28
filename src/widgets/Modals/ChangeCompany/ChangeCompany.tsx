import { ArrowDown2, CloseSquare } from "iconsax-react";
import styles from "./ChangeCompany.module.scss";
import { FC, useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { Modal } from "antd";
import { ViewCompany } from "../ViewCompany/ViewCompany";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { CreateUser } from "../CreateUser/CreateUser";
import { allUsersListApi } from "@/shared/api";
import { ReadyModal } from "../ReadyModal/ReadyModal";
import { CustomMoreSquare } from "@/shared/ui";

interface props {
    message: (text: string, number: number) => void;
    count: number;
    page: number;
}
export const ChangeCompany: FC<props> = ({ message, count, page }) => {
    const { deleteCompany, idCompany, closeModalView, modalViewCompany, selectedCompanyData } = useDataStoreComponies();
    const { resetInput } = useDataInputCompaniesStore();
    const { allUsersList } = allUsersListApi();
    const [modalCreateUser, setModalCreateUser] = useState<boolean>(false);
    const [viewModal, setViewModal] = useState<boolean>(false);
    const [managerState, setManagerState] = useState<boolean>(false);
    const [userState, setUserState] = useState<boolean>(false);
    const [readyModal, setReadyModal] = useState<boolean>(false);

    const closeView = () => {
        setViewModal(false);
    };
    const openView = () => {
        setViewModal(true);
    };

    const deleteComp = () => {
        setReadyModal(false);
        deleteCompany(idCompany, page);
        const number = count + 1;
        message(`Компания "${selectedCompanyData.name}" была удалена!`, number);
        closeView();
        closeModalView();
    };
    const names = (id: number | undefined): string => {
        const manager = allUsersList.find((manager) => manager.id === id);
        return manager ? `${manager.full_name}` : "";
    };

    return (
        <>
            <div
                className={styles.ChangeCompany}
                style={{ display: `${modalViewCompany ? "block" : "none"}` }}
            >
                <div className={styles.buttons}>
                    <CustomMoreSquare>
                        <button
                            onClick={() => {
                                openView();
                            }}
                        >
                            Редактировать
                        </button>
                        <button onClick={() => setModalCreateUser(true)}>Создать пользователя</button>
                        <button onClick={() => setReadyModal(true)}>Удалить</button>
                    </CustomMoreSquare>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={closeModalView}
                        size={34}
                        style={{ marginLeft: "8px" }}
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
                        <div className={styles.mainManagers}>
                            {selectedCompanyData.main_manager
                                ? names(selectedCompanyData.main_manager)
                                : "Менеджеров отсутствует!"}
                            <ArrowDown2
                                onClick={() => {
                                    setManagerState(!managerState);
                                    managerState ? setUserState(false) : null;
                                }}
                                style={{ transform: `${managerState ? "rotate(360deg)" : "rotate(270deg)"}` }}
                                color="rgba(28, 106, 177, 1)"
                            />
                        </div>
                    </div>
                    <div
                        className={styles.managers}
                        style={{
                            display: managerState ? "block" : "none",
                            zIndex: managerState ? "100" : "0",
                        }}
                    >
                        <div>
                            {selectedCompanyData.managers.map((manager) => (
                                <p key={manager}>{names(manager)}</p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.main_manager}>
                        <span>Список пользователей</span>
                        <div>
                            {selectedCompanyData?.users && selectedCompanyData.users.length > 0
                                ? selectedCompanyData.users.length > 1
                                    ? `${selectedCompanyData.users[1].first_name} ${selectedCompanyData.users[1].surname}`
                                    : `${selectedCompanyData.users[0].first_name} ${selectedCompanyData.users[0].surname}`
                                : "Пользователей отсутствует!"}
                            <ArrowDown2
                                color="rgba(28, 106, 177, 1)"
                                onClick={() => {
                                    setUserState(!userState);
                                    userState ? setManagerState(false) : null;
                                }}
                                style={{ transform: `${userState ? "rotate(360deg)" : "rotate(270deg)"}` }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: `${userState ? "block" : "none"}`,
                        }}
                        className={styles.users}
                    >
                        {selectedCompanyData.users?.map((user) => (
                            <p key={user.id}>{`${user.first_name} ${user.surname}`}</p>
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
            <Modal
                centered
                width={550}
                open={readyModal}
                onCancel={() => setReadyModal(false)}
            >
                <ReadyModal
                    yes={deleteComp}
                    no={() => setReadyModal(false)}
                >
                    <div>
                        <p>Вы уверены?</p>
                        <p>Компания будет удалена безвозвратно!</p>
                    </div>
                </ReadyModal>
            </Modal>
        </>
    );
};
