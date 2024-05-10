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

export const Companies: FC = () => {
    const { fetchDatas, getUsers, data, selectedIdCompany,searchReset, openModalView, closeModalView, modalViewCompany, searchCompanies, countCompany } = useDataStoreComponies();
    const [modalScc, setModalScc] = useState<string>('none');
    const [createCompany, setCreateCompany] = useState<boolean>(false);
    const [companyList, setCompanyList] = useState<dataCompanies[] | undefined>()
    const [closeState, setCloseState] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');
    const [createCompanyName, setCreateCompanyName] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const usePasswordScc = usePassword();
    console.log(modalScc);
    
    const openModalCreateCompany = () => {
        setCreateCompany(true);
    }
    const closeModalCreateCompany = () => {
        setCreateCompany(false);
    }

    const closeModal = () => {
        setModalScc('none');
    };
    const openModal = () => {
        setModalScc('block');
        console.log(modalScc);

    }
    const message = (name: string, number: number) => {
        setCreateCompanyName(name);
        setCount(number);
    }
    useEffect(() => {
        getUsers();
        fetchDatas(page);
    }, [getUsers, fetchDatas, page]);

    const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            setCompanyList(data);
            searchCompanies(searchText);
        }
    };
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setCloseState(true);
    }
    const closeStates = () => {
        setCloseState(false);
        setSearchText('');

    }
    useEffect(() => {
        if (searchText === '') {
            fetchDatas(page);
            companyList !== undefined && searchReset(companyList);
            setCompanyList(undefined);
        }
        console.log(data);
        
    }, [ searchText, fetchDatas]);

    useEffect(() => {
        if(count > 0){
            setModalScc('block');
        }
    },[createCompanyName, count])


    return (
        <div className={styles.Companies}>
            <div className={styles.h3} onClick={closeModalView}>Поиск по компаниям</div>
            <div className={styles.searchCompanies}>
                <SearchInput
                    value={searchText}
                    onChange={handleChangeSearch}
                    closeState={closeState}
                    onKeyDown={handleKeyPress}
                    closeFunc={closeStates}
                />
                <div className={styles.Buttons} onClick={openModalCreateCompany}>
                    <ButtonCreate name="Создать компанию" />
                </div>
            </div>
            <div className={styles.container}>
                <div style={{ width: modalViewCompany ? '1092px' : "1718px" }} className={styles.table}>
                    <ListTop>
                        <ListTopName name="Компания" width={modalViewCompany ? 160 : 204} />
                        <ListTopName name={modalViewCompany ? 'Страна ком...' : 'Страна компании'} width={modalViewCompany ? 160 : 206} />
                        <ListTopName name={modalViewCompany ? 'Количес...' : 'Количество пользователей'} width={modalViewCompany ? 160 : 302} />
                        <ListTopName name={modalViewCompany ? 'Количес...' : 'Количество заявок'} width={modalViewCompany ? 160 : 281} />
                        <ListTopName name="Менеджер" width={modalViewCompany ? 160 : 204} />
                        <ListTopName name={modalViewCompany ? 'Дата созд...' : 'Дата создания'} width={modalViewCompany ? 160 : 202} />
                        <ListTopName name={modalViewCompany ? 'Дата пос...' : 'Дата последнего редактирования'} width={modalViewCompany ? 160 : 292} />

                    </ListTop>
                    {data.length !== 0 ? <ul>
                        { data.map((dataCompany) => (
                            <li className={styles.datas} onClick={() => {
                                selectedIdCompany(dataCompany.id);
                                openModalView();
                            }} key={dataCompany.id}>
                                <ItemInner width={modalViewCompany ? 160 : 201} content={dataCompany.name} />
                                <ItemInner width={modalViewCompany ? 160 : 206} content={dataCompany.country} />
                                <ItemInner width={modalViewCompany ? 160 : 301} content={dataCompany.count_users} />
                                <ItemInner width={modalViewCompany ? 160 : 284} content={dataCompany.count_applications} />
                                <div className={styles.managerName} style={{ width: `${modalViewCompany ? '160px' : '221px'}` }}>
                                    {dataCompany.main_manager}
                                </div>
                                <ItemInner width={modalViewCompany ? 160 : 226} content={dataCompany.created_at} />
                                <ItemInner width={modalViewCompany ? 160 : 306} content={dataCompany.last_updated_at} />
                            </li>
                        )) }
                    </ul> : 
                    <p className={styles.alert}>По вашему запросу не чего не найдено!</p>}
                </div>
                <ChangeCompany message={message} count={count} page={page}/>
            </div>
            <div className={styles.pogin} style={{width: `${modalViewCompany ? '1300px' : '100%'}`}}>
            <Pagination count={countCompany} page={page} setPage={setPage} />
            </div>
            {<SccessfullyModal closeModal={closeModal} modalScc={modalScc} texts={createCompanyName} /> }
            {<SccessfullyModal closeModal={usePasswordScc.closeModalScc} modalScc={usePasswordScc.changePasswordScc} texts='Изменения были успешно сохранены' />}

            <Modal
                centered
                width={700}
                open={createCompany}
                onCancel={() => {
                    closeModalCreateCompany();
                }}
            >
                <CreateCompany nameCreateCompany={message} count={count} openModals={openModal} closeCreateModal={closeModalCreateCompany} page={page}/>
            </Modal>
        </div>
    );
};
