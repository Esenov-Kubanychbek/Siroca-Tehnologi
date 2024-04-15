import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import styles from "./Companies.module.scss";
import { CreateCompany } from "../..";
import { useDataStoreComponies } from "./api/componiesApi";
import { FC, useEffect, useState } from "react";
import { ListTopName, ListTop, ItemInner } from "../../../shared/ui";
import { ChangeCompany } from "../../Modals/ChangeCompany/ChangeCompany";

export const Companies: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const { users, fetchDatas, getUsers, data, selectedIdCompany, openModalView, closeModalView, modalViewCompany } =
        useDataStoreComponies();

    useEffect(() => {
        getUsers();
        fetchDatas();
    }, [getUsers, fetchDatas]);

    const managerName = (id: number) => {
        const manager = users.find((user) => user.id === id);
        return manager ? manager.first_name : "";
    };

    return (
        <div className={styles.Companies}>
            <h3 onClick={closeModalView}>Поиск по компаниям</h3>
            <div className={styles.searchCompanies}>
                <SearchInput />
                <div
                    className={styles.Buttons}
                    onClick={() => setModal(true)}
                >
                    <ButtonCreate name="Создать компанию" />
                </div>
            </div>
            <div className={styles.container}>
                <div
                    style={{ width: modalViewCompany ? "1092px" : "100%" }}
                    className={styles.table}
                >
                    <ListTop>
                        <ListTopName
                            name="Компания"
                            width={modalViewCompany ? 160 : 206}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Страна ком..." : "Страна компании"}
                            width={modalViewCompany ? 160 : 210}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Количес..." : "Количество пользователей"}
                            width={modalViewCompany ? 160 : 306}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Количес..." : "Количество заявок"}
                            width={modalViewCompany ? 160 : 286}
                        />
                        <ListTopName
                            name="Менеджер"
                            width={modalViewCompany ? 160 : 208}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Дата созд..." : "Дата создания"}
                            width={modalViewCompany ? 160 : 206}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Дата пос..." : "Дата последнего редактирование"}
                            width={modalViewCompany ? 160 : 296}
                        />
                    </ListTop>
                    <ul>
                        {data.map((dataCompany) => (
                            <li
                                className={styles.datas}
                                onClick={() => {
                                    selectedIdCompany(dataCompany.id);
                                    openModalView();
                                }}
                                key={dataCompany.id}
                            >
                                <ItemInner
                                    width={modalViewCompany ? 160 : 206}
                                    content={dataCompany.name}
                                />
                                <ItemInner
                                    width={modalViewCompany ? 160 : 210}
                                    content={dataCompany.country}
                                />
                                <ItemInner
                                    width={modalViewCompany ? 160 : 306}
                                    content={dataCompany.count_users}
                                />
                                <ItemInner
                                    width={modalViewCompany ? 160 : 286}
                                    content={dataCompany.count_applications}
                                />
                                <div
                                    className={styles.managerName}
                                    style={{ width: `${modalViewCompany ? "160px" : "208px"}` }}
                                >
                                    {managerName(dataCompany.main_manager)}
                                </div>
                                <ItemInner
                                    width={modalViewCompany ? 160 : 206}
                                    content={dataCompany.created_at}
                                />
                                <ItemInner
                                    width={modalViewCompany ? 160 : 296}
                                    content={dataCompany.last_updated_at}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <ChangeCompany />
            </div>
            <Modal
                centered
                width={700}
                open={modal}
                onCancel={() => setModal(false)}
            >
                <CreateCompany setModal={setModal} />
            </Modal>
        </div>
    );
};
