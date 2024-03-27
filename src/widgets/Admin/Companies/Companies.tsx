import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import styles from "./Companies.module.scss";
import { CreateCompany, ViewCompany } from "../..";
import { useCompany } from "../../../shared/hooks";
import { useViewCompany } from "../../../shared/hooks/useViewCompany";
import { useDataStoreComponies } from "../../../shared/componiesApi";
import { useEffect } from "react";
import { ListTopName, ListTop } from "../../../shared/ui";
import { RequestInner } from "../../../entities";

export const Companies = () => {
    const modal = useCompany();
    const modalView = useViewCompany();

    const { fetchDatas, data, selectedIdCompany } = useDataStoreComponies();

    useEffect(() => {
        fetchDatas();

    }, [data]);

    return (
        <div className={styles.Companies}>
            <h3>Поиск по компаниям</h3>
            <div className={styles.searchCompanies}>
                <SearchInput />
                <div className={styles.buttons} onClick={modal.open}>
                    <ButtonCreate name="Создать компанию" />

                </div>
            </div>
            <div className={styles.table}>

                <ListTop>
                    <ListTopName name="Компания" width={206} />
                    <ListTopName name="Страна компании" width={210} />
                    <ListTopName name="Количество пользователей" width={306} />
                    <ListTopName name="Количество заявок" width={286} />
                    <ListTopName name="Менеджер" width={208} />
                    <ListTopName name="Дата создание" width={206} />
                    <ListTopName name="Крайний редактирование" width={296} />

                </ListTop>
                <ul>
                    {data.map((dataCompany) => (
                        <li className={styles.datas} onClick={() => {
                            modalView.open();
                            selectedIdCompany(dataCompany.id)
                        }} key={dataCompany.id}>
                            <RequestInner width={206} content={dataCompany.name} />
                            <RequestInner width={210} content={dataCompany.country} />
                            <RequestInner width={306} content={dataCompany.count_users} />
                            <RequestInner width={286} content={5} />
                            <RequestInner width={208} content={'kUBA'} />
                            <RequestInner width={206} content={dataCompany.created_at} />
                            <RequestInner width={296} content={120302} />
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

            {/* <ul>
                <li className={styles.h}>
                    <div>Компания</div>
                    <div>Страна компании</div>
                    <div>Количество пользователей</div>
                    <div>Количество заявок</div>
                    <div>Менеджер</div>
                    <div>Дата создание</div>
                    <div>Крайний редактирование</div>
                </li>
                <div className={styles.scrol}>
                    <div>
                        {data.map((dataCompany) => (
                            <li className={styles.datas} onClick={() => {
                                modalView.open();
                                selectedIdCompany(dataCompany.id)
                            }} key={dataCompany.id}>
                                <div style={{width: '93px'}}>{dataCompany.name}</div>
                                <div style={{width: '163px'}}>{dataCompany.country}</div>
                                <div>{dataCompany.count_users}</div>
                                <div>5</div>
                                <div>{dataCompany.main_manager}</div>
                                <div >{dataCompany.created_at}</div>
                                <div>120302</div>
                            </li>
                            
                        ))}
                    </div>
                </div>
            </ul> */}
            <Modal
                centered
                width={700}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CreateCompany />
            </Modal>
            <Modal
                centered
                width={700}
                open={modalView.isOpen}
                onCancel={modalView.close}
            >
                <ViewCompany />
            </Modal>
        </div>
    );
};
