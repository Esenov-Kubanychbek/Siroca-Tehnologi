import React, { useState, FC, FormEvent, ChangeEvent } from "react";
import { SearchNormal } from "iconsax-react";
import styles from "./report.module.scss";

interface ReportFormProps {
    onSub: (formData: FormData) => void;
}

interface FormData {
    company: string;
    maneger: string;
    begin: string;
    end: string;
}

const ReportForm: FC<ReportFormProps> = ({ onSub }) => {
    const [openCompany, setOpenCompany] = useState<string>("");
    const [openManeger, setOpenManeger] = useState<string>("");
    const [openBegin, setOpenBegin] = useState<string>("");
    const [openEnd, setOpenEnd] = useState<string>("");

    const CleanFilters = () => {
        setOpenCompany("");
        setOpenManeger("");
        setOpenBegin("");
        setOpenEnd("");
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData: FormData = {
            company: openCompany,
            maneger: openManeger,
            begin: openBegin,
            end: openEnd,
        };
        onSub(formData);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setState(e.target.value);
    };

    return (
        <form onSubmit={submitForm} className={styles.Form}>
            <ul>
                <div className={styles.InputCont}>
                    <p>Компания</p>
                    <div className={styles.SearchIcn}>
                        <SearchNormal size={16} />
                    </div>
                    <input
                        type="text"
                        placeholder="Выбрать"
                        value={openCompany}
                        onChange={(e) => handleInputChange(e, setOpenCompany)}
                        className={styles.inpWithIcn}
                    />
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
                        onChange={(e) => handleInputChange(e, setOpenManeger)}
                        className={styles.inpWithIcn}
                    />
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
                <a href="#" onClick={CleanFilters}>
                    Очистить фильтр
                </a>
                <button type="submit">Показать</button>
            </div>
        </form>
    );
};

export default ReportForm;
