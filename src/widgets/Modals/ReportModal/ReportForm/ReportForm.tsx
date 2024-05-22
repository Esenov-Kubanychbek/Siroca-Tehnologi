import React, { useState, FC, FormEvent, ChangeEvent, useEffect, KeyboardEvent } from "react";
import { SearchNormal } from "iconsax-react";
import styles from "./report.module.scss";
import { useDataStoreComponies } from "../../../Admin/Companies/api/componiesApi";
import { usersApi } from "../../../Admin/Users/api/usersApi";

interface ReportFormProps {
    onSub: (formData: FormData) => void;
    setExcel: (e: null) => void;
}

interface FormData {
    company: (string | null)[];
    maneger: (string | null)[];
    begin: string;
    end: string;
}

const ReportForm: FC<ReportFormProps> = ({ onSub, setExcel }) => {
    const [openCompany, setOpenCompany] = useState<string>("");
    const [openManeger, setOpenManeger] = useState<string>("");
    const [openBegin, setOpenBegin] = useState<string>("");
    const [openEnd, setOpenEnd] = useState<string>("");

    const [showItems, setShowItems] = useState<(string | null)[]>([]);

    const [choosedFilters, setChoosedGilters] = useState<string[]>([]);
    const [choosedFiltersManager, setChoosedGiltersManager] = useState<string[]>([]);

    const { data, fetchDatas } = useDataStoreComponies();
    const { getUsersList, usersList } = usersApi();

    const CleanFilters = () => {
        setChoosedGilters([]);
        setChoosedGiltersManager([]);
        setShowItems([]);
        setOpenCompany("");
        setOpenManeger("");
        setOpenBegin("");
        setOpenEnd("");
        setExcel(null);
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData: FormData = {
            company: choosedFilters,
            maneger: choosedFiltersManager,
            begin: openBegin,
            end: openEnd,
        };
        onSub(formData);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<React.SetStateAction<string>>,
    ) => {
        if (e.target.id && e.target.id === "company") {
            const mapped = data.map((el) => {
                if (el.name.includes(e.target.value)) {
                    return el.name;
                } else {
                    return null;
                }
            });
            setState(e.target.value);
            setShowItems(mapped);
        } else if (e.target.id && e.target.id === "manager") {
            setState(e.target.value);
        } else {
            setState(e.target.value);
        }
    };
    const addChoosed = (e: ChangeEvent<HTMLInputElement>) => {
        setOpenCompany("");
        if (!choosedFilters.includes(e.target.id) && e.target.checked === true) {
            setChoosedGilters([...choosedFilters, e.target.id]);
        } else if (!e.target.checked) {
            const find = [...choosedFilters];
            const filt = find.filter((el) => {
                if (el !== e.target.id) {
                    return el;
                } else {
                    return null;
                }
            });
            setChoosedGilters(filt);
        }
    };
    const addChoosedManager = (e: ChangeEvent<HTMLInputElement>) => {
        setOpenManeger("");
        if (!choosedFiltersManager.includes(e.target.id)) {
            setChoosedGiltersManager((prev) => [...prev, e.target.id]);
        }
    };

    const onEnter = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === "Enter") {
            setOpenCompany("");
            setOpenManeger("");
        }
    };
    useEffect(() => {
        fetchDatas(1);
        getUsersList(1);
    }, []);

    return (
        <form
            onSubmit={submitForm}
            className={styles.Form}
        >
            <ul onKeyDown={onEnter}>
                <div className={styles.InputCont}>
                    <p>Компания</p>
                    <div className={styles.SearchIcn}>
                        <SearchNormal size={16} />
                    </div>
                    <input
                        type="text"
                        placeholder="Выбрать"
                        value={openCompany}
                        id="company"
                        onChange={(e) => handleInputChange(e, setOpenCompany)}
                        className={styles.inpWithIcn}
                    />
                    <div className={styles.showItems}>
                        {openCompany &&
                            showItems &&
                            showItems.map((el, index) => {
                                if (el !== null && !choosedFilters.includes(el)) {
                                    return (
                                        <p id={`${index}`}>
                                            {el}{" "}
                                            <input
                                                type="checkbox"
                                                id={el}
                                                onChange={addChoosed}
                                            />
                                        </p>
                                    );
                                }
                            })}
                    </div>
                    <div className={styles.choosed}>
                        {choosedFilters.map((el) => {
                            return (
                                <div>
                                    <p>{el}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.InputCont}>
                    <p>Менеджер</p>
                    <div className={styles.SearchIcn}>
                        <SearchNormal size={16} />
                    </div>
                    <input
                        type="text"
                        placeholder="Выбрать"
                        value={openManeger}
                        id="manager"
                        onChange={(e) => handleInputChange(e, setOpenManeger)}
                        className={styles.inpWithIcn}
                    />
                    <div className={styles.showItems}>
                        {openManeger &&
                            usersList &&
                            usersList.map((el, index) => {
                                if (
                                    el.full_name.includes(openManeger) &&
                                    !choosedFiltersManager.includes(el.full_name)
                                ) {
                                    return (
                                        <p id={`${index}`}>
                                            {el.full_name}{" "}
                                            <input
                                                type="checkbox"
                                                id={`${el.full_name}`}
                                                onChange={addChoosedManager}
                                            />
                                        </p>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                    </div>
                    <div className={styles.choosed}>
                        {choosedFiltersManager.map((el) => {
                            return (
                                <div>
                                    <p>{el}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.InputCont}>
                    <p>Дата начала</p>
                    <input
                        type="date"
                        placeholder="Выбрать"
                        value={openBegin}
                        onChange={(e) => handleInputChange(e, setOpenBegin)}
                    />
                </div>
                <div className={styles.InputCont}>
                    <p>Дата конца</p>
                    <input
                        type="date"
                        placeholder=""
                        value={openEnd}
                        onChange={(e) => handleInputChange(e, setOpenEnd)}
                    />
                </div>
            </ul>

            <div className={styles.EnterCont}>
                <a
                    href="#"
                    onClick={CleanFilters}
                >
                    Очистить фильтр
                </a>
                <button type="submit">Показать</button>
            </div>
        </form>
    );
};

export default ReportForm;
