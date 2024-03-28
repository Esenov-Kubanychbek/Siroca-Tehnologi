import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import styles from "./Companies.module.scss";
import { CreateCompany, ViewCompany } from "../..";
import { useCompany } from "../../../shared/hooks/modalHooks";
import { useViewCompany } from "../../../shared/hooks/modalHooks/useViewCompany";
import { useDataStoreComponies } from "./api/companiesApi";
import { FC, useEffect } from "react";
import { ListTopName, ListTop, ItemInner } from "../../../shared/ui";

export const Companies: FC = () => {
    const modal = useCompany();
    const modalView = useViewCompany();
    const { fetchDatas, data, selectedIdCompany } = useDataStoreComponies();
    useEffect(() => {
        fetchDatas();
    }, [data]);
    return (
        <div className={styles.Companies}>
            <div className={styles.Name}>Поиск по компаниям</div>
            <div className={styles.SearchCompanies}>
                <SearchInput />
                <div
                    className={styles.Buttons}
                    onClick={modal.open}
                >
                    <ButtonCreate name="Создать компанию" />
                </div>
            </div>
            <div className={styles.Table}>
                <ListTop>
                    <ListTopName
                        name="Компания"
                        width={206}
                    />
                    <ListTopName
                        name="Страна компании"
                        width={210}
                    />
                    <ListTopName
                        name="Количество пользователей"
                        width={306}
                    />
                    <ListTopName
                        name="Количество заявок"
                        width={286}
                    />
                    <ListTopName
                        name="Менеджер"
                        width={208}
                    />
                    <ListTopName
                        name="Дата создание"
                        width={206}
                    />
                    <ListTopName
                        name="Крайний редактирование"
                        width={296}
                    />
                </ListTop>
                <ul>
                    {data.map((dataCompany) => (
                        <li
                            className={styles.Datas}
                            onClick={() => {
                                modalView.open();
                                selectedIdCompany(dataCompany.id);
                            }}
                            key={dataCompany.id}
                        >
                            <ItemInner
                                width={206}
                                content={dataCompany.name}
                            />
                            <ItemInner
                                width={210}
                                content={dataCompany.country}
                            />
                            <ItemInner
                                width={306}
                                content={dataCompany.count_users}
                            />
                            <ItemInner
                                width={286}
                                content={5}
                            />
                            <ItemInner
                                width={208}
                                content={"kUBA"}
                            />
                            <ItemInner
                                width={206}
                                content={dataCompany.created_at}
                            />
                            <ItemInner
                                width={296}
                                content={120302}
                            />
                        </li>
                    ))}
                </ul>
            </div>
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
