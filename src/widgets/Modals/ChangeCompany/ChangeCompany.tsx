import { CloseSquare, MoreSquare } from "iconsax-react";
import styles from "./ChangeCompany.module.scss";
import { useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { Modal } from "antd";
import { ViewCompany } from "../ViewCompany/ViewCompany";

export const ChangeCompany = () => {
    const [modalButtons, setModalButtons] = useState<boolean>(false);
    const { selectedCompanyData } = useDataStoreComponies();
    const { deleteCompany, data, idCompany, closeModalView, modalViewCompany } = useDataStoreComponies();
    const [modal, setModal] = useState<boolean>(false);
    const deleteComp = () => {
        deleteCompany(idCompany);
        console.log(data);
        closeModalView();
        setModal(false);
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
                            onClick={() => setModalButtons((prevState) => !prevState)}
                            size={34}
                        />
                        <div
                            style={{ display: `${modalButtons ? "block" : "none"}` }}
                            className={styles.moreClick}
                        >
                            <p onClick={() => setModal(true)}>Редактировать</p>
                            <p onClick={deleteComp}>Удалить</p>
                        </div>
                        <div
                            onClick={() => setModalButtons(false)}
                            style={{ display: `${modalButtons ? "block" : "none"}` }}
                            className={styles.blackBagr}
                        ></div>
                    </div>
                    <CloseSquare
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
                        <div>{selectedCompanyData?.main_manager}</div>
                    </div>
                    <div className={styles.count_usesrs}>
                        <span>Количество пользователей :</span>
                        <div>{selectedCompanyData?.count_users}</div>
                    </div>
                </div>
            </div>
            <Modal
                centered
                width={700}
                open={modal}
                onCancel={() => setModal(false)}
            >
                <ViewCompany setModal={setModal} />
            </Modal>
        </>
    );
};