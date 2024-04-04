import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import styles from "./Companies.module.scss";
import { CreateCompany } from "../..";
import { useCompany } from "../../../shared/hooks";
import { useDataStoreComponies } from "../../../shared/componiesApi";
import { useEffect } from "react";
import { ListTopName, ListTop } from "../../../shared/ui";
import { RequestInner } from "../../../entities";
import { ChangeCompany } from "../../Modals/ChangeCompany/ChangeCompany";

export const Companies = () => {
    const modal = useCompany();

    const { fetchDatas, data, selectedIdCompany, openModalView, closeModalView, modalViewCompany } = useDataStoreComponies();
    

    useEffect(() => {
        fetchDatas();

    }, [fetchDatas]);


    return (
        <div className={styles.Companies}>
            <h3 onClick={() => closeModalView()}>Поиск по компаниям</h3>
            <div className={styles.searchCompanies}>
                <SearchInput />
                <div className={styles.buttons} onClick={modal.open}>
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
                                // modalView.open();
                                selectedIdCompany(dataCompany.id);
                                openModalView();
                                console.log(modalViewCompany);

                            }} key={dataCompany.id}>
                                <RequestInner width={modalViewCompany ? 160 : 206} content={dataCompany.name} />
                                <RequestInner width={modalViewCompany ? 160 : 210} content={dataCompany.country} />
                                <RequestInner width={modalViewCompany ? 160 : 306} content={dataCompany.count_users} />
                                <RequestInner width={modalViewCompany ? 160 : 286} content={5} />
                                <RequestInner width={modalViewCompany ? 160 : 208} content={dataCompany.main_manager} />
                                <RequestInner width={modalViewCompany ? 160 : 206} content={dataCompany.created_at} />
                                <RequestInner width={modalViewCompany ? 160 : 296} content={120302} />
                                {/* <div style={{width: '93px'}}>{dataCompany.name}</div>
                <div style={{width: '163px'}}>{dataCompany.country}</div>
                <div>{dataCompany.count_users}</div>
                <div>5</div>
                <div>{dataCompany.main_manager}</div>
                <div >{dataCompany.created_at}</div>
                <div>120302</div> */}
                            </li>

                        ))}

                    </ul>
                </div>

                <ChangeCompany />
            </div>
            <Modal
                centered
                width={700}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CreateCompany />
            </Modal>
            
        </div>
    );
};
