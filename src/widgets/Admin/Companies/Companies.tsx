import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import styles from "./Companies.module.scss";
import { CreateCompany } from "../..";
import { dataCompanies, useDataStoreComponies } from "./api/componiesApi";
import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { ListTopName, ListTop, ItemInner } from "../../../shared/ui";
import { ChangeCompany } from "../../Modals/ChangeCompany/ChangeCompany";
import { SccessfullyModal } from "../../Modals/SccessfullyModal/SccessfullyModal";
import { Pagination } from "../../../shared/ui/Pagination/Pagination";
import { usePassword } from "../../Modals/ChangePassword/api/ChangePassword";
import { ItemCount } from "../../../shared/ui/ItemCount/ItemCount";
import { useDataInputCompaniesStore } from "@/widgets/Modals/ViewCompany/api/dataInputCompanies";
import { allUsersListApi } from "@/shared/api";

export const Companies: FC = () => {
    const { fetchDatas, data, selectedIdCompany, searchReset, openModalView, closeModalView, modalViewCompany, searchCompanies, countCompany } = useDataStoreComponies();
    const { getAllUsersList, allUsersList } = allUsersListApi()
    const { resetInput } = useDataInputCompaniesStore();
    const [modalScc, setModalScc] = useState<string>('none');
    const [createCompany, setCreateCompany] = useState<boolean>(false);
    const [companyList, setCompanyList] = useState<dataCompanies[] | undefined>();
    const [closeState, setCloseState] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");
    const [createCompanyName, setCreateCompanyName] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const usePasswordScc = usePassword();

    const openModalCreateCompany = () => {
        setCreateCompany(true);
    };
    const closeModalCreateCompany = () => {
        setCreateCompany(false);
    };

    const closeModal = () => {
        setModalScc("none");
    };
    const openModal = () => {
        setModalScc("block");
    };
    const message = (name: string, number: number) => {
        setCreateCompanyName(name);
        setCount(number);
    };
    useEffect(() => {
        getAllUsersList();
        fetchDatas(page);
    }, [fetchDatas, page, getAllUsersList]);

    const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            setCompanyList(data);
            searchCompanies(searchText);
        }
    };
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setCloseState(true);
    };
    const closeStates = () => {
        setCloseState(false);
        setSearchText("");
    };
    const truncatedStr = (str: string | null | undefined): string => {
        if (!str) {
            return '';
        }
        return str.length > 5 ? str.substring(0, 5) + '...' : str;
    }
    const names = (id: number | undefined): string => {
        const manager = allUsersList.find(manager => manager.id === id);
        return manager ? `${manager.full_name}` : '';
    };
    useEffect(() => {
        if (searchText === "") {
            fetchDatas(page);
            companyList !== undefined && searchReset(companyList);
            setCompanyList(undefined);
        }
    }, [searchText, fetchDatas]);

    useEffect(() => {
        if (count > 0) {
            setModalScc("block");
        }
    }, [createCompanyName, count])


    return (
        <div className={styles.Companies}>
            <div
                className={styles.h3}
                onClick={closeModalView}
            >
                Поиск по компаниям
            </div>
            <div className={styles.searchCompanies}>
                <SearchInput
                    value={searchText}
                    onChange={handleChangeSearch}
                    closeState={closeState}
                    onKeyDown={handleKeyPress}
                    closeFunc={closeStates}
                />
                <div
                    className={styles.Buttons}
                    onClick={openModalCreateCompany}
                >
                    <ButtonCreate name="Создать компанию" />
                </div>
            </div>
            <div className={styles.container}>
                <div
                    style={{ width: modalViewCompany ? "1092px" : "1718px" }}
                    className={styles.table}
                >
                    <ListTop>
                        <ListTopName
                            name="Компания"
                            width={modalViewCompany ? 160 : 204}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Страна ком..." : "Страна компании"}
                            width={modalViewCompany ? 160 : 206}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Количес..." : "Количество пользователей"}
                            width={modalViewCompany ? 160 : 302}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Количес..." : "Количество заявок"}
                            width={modalViewCompany ? 160 : 281}
                        />
                        <ListTopName
                            name="Менеджер"
                            width={modalViewCompany ? 160 : 204}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Дата созд..." : "Дата создания"}
                            width={modalViewCompany ? 160 : 202}
                        />
                        <ListTopName
                            name={modalViewCompany ? "Дата пос..." : "Дата последнего редактирования"}
                            width={modalViewCompany ? 160 : 292}
                        />
                    </ListTop>
                    {data.length !== 0 ? (
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
                                        width={modalViewCompany ? 160 : 215}
                                        content={modalViewCompany ? truncatedStr(dataCompany.name) : dataCompany.name}
                                    />
                                    <ItemInner
                                        width={modalViewCompany ? 160 : 220}
                                        content={modalViewCompany ? truncatedStr(dataCompany.country) : dataCompany.country}
                                    />
                                    <ItemInner
                                        width={modalViewCompany ? 160 : 325}
                                        content={dataCompany.count_users}
                                    />
                                    <ItemInner
                                        width={modalViewCompany ? 160 : 300}
                                        content={dataCompany.count_applications}
                                    />
                                    <div
                                        className={styles.managerName}
                                        style={{ width: `${modalViewCompany ? "160px" : "230px"}` }}
                                    >
                                        {modalViewCompany ? truncatedStr(names(dataCompany.main_manager)) : names(dataCompany.main_manager)}
                                    </div>
                                    <ItemInner
                                        width={modalViewCompany ? 160 : 220}
                                        content={dataCompany.created_at}
                                    />
                                    <ItemInner
                                        width={modalViewCompany ? 160 : 306}
                                        content={dataCompany.last_updated_at}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.alert}>По вашему запросу не чего не найдено!</p>
                    )}
                </div>
                <ChangeCompany
                    message={message}
                    count={count}
                    page={page}
                />
            </div>
            <div
                className={styles.pogin}
                style={{ width: `${modalViewCompany ? "1200px" : "100%"}` }}
            >
                <Pagination
                    count={countCompany}
                    page={page}
                    setPage={setPage}
                />
                <div className={styles.count}>
                    <ItemCount
                        page={page}
                        count={countCompany}
                    />
                </div>
            </div>
            {
                <SccessfullyModal
                    closeModal={closeModal}
                    modalScc={modalScc}
                    texts={createCompanyName}
                />
            }
            {
                <SccessfullyModal
                    closeModal={usePasswordScc.closeModalScc}
                    modalScc={usePasswordScc.changePasswordScc}
                    texts="Изменения были успешно сохранены"
                />
            }

            <Modal
                centered
                width={660}
                open={createCompany}
                onCancel={() => {
                    closeModalCreateCompany();
                    resetInput()
                }}
            >
                <CreateCompany
                    nameCreateCompany={message}
                    count={count}
                    openModals={openModal}
                    closeCreateModal={closeModalCreateCompany}
                    page={page}
                />
            </Modal>
        </div>
    );
};
