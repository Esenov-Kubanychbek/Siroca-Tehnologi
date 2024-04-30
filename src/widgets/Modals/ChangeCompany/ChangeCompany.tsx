import { CloseSquare, MoreSquare } from 'iconsax-react';
import styles from './ChangeCompany.module.scss';
import { FC, useState } from 'react';
import { useDataStoreComponies } from '../../Admin/Companies/api/componiesApi';
import { Modal } from 'antd';
import { ViewCompany } from '../ViewCompany/ViewCompany';
import { useDataInputCompaniesStore } from '../ViewCompany/api/dataInputCompanies';
import { CreateUser } from '../CreateUser/CreateUser';


interface props {
    message: (text: string, number: number) => void;
    count: number;
}
export const ChangeCompany: FC <props> = ({ message, count }) => {
    const [modalButtons, setModalButtons] = useState<boolean>(false);
    const { deleteCompany, data, idCompany, closeModalView, modalViewCompany, selectedCompanyData, users } = useDataStoreComponies();
    const { resetInput } = useDataInputCompaniesStore();
    const [modalCreateUser,setModalCreateUser] = useState<boolean>(false);
    const [viewModal, setViewModal] = useState<boolean>(false);
    const closeView = () => {
        setViewModal(false);
    };
    const openView = () => {
        setViewModal(true);
    };
    
    

    const deleteComp = () => {
        
        deleteCompany(idCompany);
        console.log(data);
        const number = count + 1;
        message(`Компания "${selectedCompanyData.name}" была удалена!`, number );
        closeView();
        closeModalView();
    }
    const names = (id: number | undefined): string => {
        const manager = users.find(manager => manager.id === id);
        return manager ? manager.first_name : '';
    };

    return (
        <>
            <div className={styles.ChangeCompany} style={{ display: `${modalViewCompany ? 'block' : 'none'}` }}>
                <div className={styles.buttons}>
                    <div>
                        <MoreSquare onClick={() => setModalButtons(prevState => !prevState)} size={34} />
                        <div style={{ display: `${modalButtons ? 'block' : 'none'}` }} className={styles.moreClick}>
                            <p onClick={() => {
                                openView();

                            }}>Редактировать</p>
                            <p onClick={() => setModalCreateUser(true)}>Создать пользователя</p>
                            <p onClick={deleteComp}>Удалить</p>
                        </div>
                        <div onClick={() => setModalButtons(false)} style={{ display: `${modalButtons ? 'block' : 'none'}` }} className={styles.blackBagr}></div>
                    </div>
                    <CloseSquare onClick={closeModalView} size={34} />
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
                        <div>{names(selectedCompanyData?.main_manager)}</div>
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
                width={700}
                open={viewModal}
                onCancel={() => {
                    closeView();
                    resetInput()
                }}
            >
                <ViewCompany closeModalView={closeView} message={message} count={count} viewModal={viewModal}/>
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
    )
}

