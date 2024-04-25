import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import styles from "./Companies.module.scss";
import { CreateCompany } from "../..";
import {  useDataStoreComponies } from "./api/componiesApi";
import { FC, useEffect, useState } from "react";
import { ListTopName, ListTop, ItemInner } from "../../../shared/ui";
import { ChangeCompany } from "../../Modals/ChangeCompany/ChangeCompany";
import { useCompany } from "../../../shared/hooks/modalHooks";
import { SccessfullyModal } from "../../Modals/SccessfullyModal/SccessfullyModal";

export const Companies: FC = () => {
    const modal = useCompany();
    const {  fetchDatas, getUsers, data, selectedIdCompany, openModalView, closeModalView, modalViewCompany } = useDataStoreComponies();
    const [modalScc, setModalScc] = useState<string>('none');
    const closeModal = () => {
        setModalScc('none');
    };
    const openModal = () => {
        setModalScc('block');
        console.log(modalScc);
        
    }

    useEffect(() => {
        getUsers();
        fetchDatas();
    }, [getUsers, fetchDatas]);

    

    return (
        <div className={styles.Companies}>
            <h3 onClick={closeModalView}>Поиск по компаниям</h3>
            <div className={styles.searchCompanies}>
                <SearchInput />
                <div className={styles.Buttons} onClick={modal.open}>
                    <ButtonCreate name="Создать компанию" />
                </div>
            </div>
            <div className={styles.container}>
                <div style={{ width: modalViewCompany ? '1092px' : "100%" }} className={styles.table}>
                <ListTop>
                        <ListTopName name="Компания" width={modalViewCompany ? 160 : 206} />
                        <ListTopName name={modalViewCompany ? 'Страна ком...' : 'Страна компании'} width={modalViewCompany ? 160 : 210} />
                        <ListTopName name={modalViewCompany ? 'Количес...' : 'Количество пользователей'} width={modalViewCompany ? 160 : 306} />
                        <ListTopName name={modalViewCompany ? 'Количес...' : 'Количество заявок'} width={modalViewCompany ? 160 : 286} />
                        <ListTopName name="Менеджер" width={modalViewCompany ? 160 : 208} />
                        <ListTopName name={modalViewCompany ? 'Дата созд...' : 'Дата создания'}  width={modalViewCompany ? 160 : 206} />
                        <ListTopName name={modalViewCompany ? 'Дата пос...' : 'Дата последнего редактирование'}  width={modalViewCompany ? 160 : 296} />

                    </ListTop>
                    <ul>
                        {data.map((dataCompany) => (
                            <li className={styles.datas} onClick={() => {
                                selectedIdCompany(dataCompany.id);
                                openModalView();
                                
                            }} key={dataCompany.id}>
                                <ItemInner width={modalViewCompany ? 160 : 206} content={dataCompany.name} />
                                <ItemInner width={modalViewCompany ? 160 : 210} content={dataCompany.country} />
                                <ItemInner width={modalViewCompany ? 160 : 306} content={dataCompany.count_users} />
                                <ItemInner width={modalViewCompany ? 160 : 286} content={dataCompany.count_applications} />
                                <div className={styles.managerName} style={{ width: `${modalViewCompany ? '160px' : '225px'}`}}>
                                    {dataCompany.main_manager}
                                </div>
                                <ItemInner width={modalViewCompany ? 160 : 230} content={dataCompany.created_at} />
                                <ItemInner width={modalViewCompany ? 160 : 310} content={dataCompany.last_updated_at} />
                            </li>
                        ))}
                    </ul>
                </div>
                <ChangeCompany />               
            </div>
            {modalScc === 'block' ? <SccessfullyModal closeModal={closeModal} modalScc={modalScc} texts='Успешно'/> : null}

            <Modal
                centered
                width={700}
                open={modal.isOpen}
                onCancel={() => {
                    modal.close();
                }}
            >
                <CreateCompany  openModals={openModal}/>
            </Modal>
        </div>
    );
};

