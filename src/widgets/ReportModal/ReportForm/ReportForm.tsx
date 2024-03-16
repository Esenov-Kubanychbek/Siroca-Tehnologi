import { ArrowLeft, ArrowLeft2 } from "iconsax-react";
import ChooseMenu from "./ChooseMenu";
import styles from "./reportForm.module.scss";
import { useState, FC } from "react";

interface ReportFormProps {
    onSub: () => void;
}

const ReportForm: FC = ({ onSub }) => {
    const [company, setCompany] = useState<boolean>(false);
    const [maneger, setManeger] = useState<boolean>(false);

    const [openCompany, setOpenCompany] = useState<string>("");
    const [openManeger, setOpenManeger] = useState<string>("");
    const [openBegin, setOpenBegin] = useState<string>();
    const [openEnd, setOpenEnd] = useState<string>();


    const CleanFilters = () => {
        setOpenCompany("");
        setOpenManeger("");
        setOpenBegin("Дата началы");
        setOpenEnd("Дата конца");
    };
    const openMenu = (e: any) => {
        const id = e.target.id;
        if (id === "company") {
            setCompany(!company);
            setManeger(false);
            setBegin(false);
            setEnd(false);
        } else if (id === "maneger") {
            setManeger(!maneger);
            setCompany(false);
            setBegin(false);
            setEnd(false);
        } else if (id === "begin") {
            setBegin(!begin);
            setCompany(false);
            setManeger(false);
            setEnd(false);
        } else if (id === "end") {
            setEnd(!end);
            setCompany(false);
            setManeger(false);
            setBegin(false);
        }
    };

    const submitForm = () => {
        const formData = {
            company: openCompany,
            maneger: openManeger,
            begin: openBegin,
            end: openEnd,
        };
        onSub(formData);
    };
    const menuCompanys = ["Optima", "Ail bank", "Mbank"];
    const menuManeger = ["Abu", "Aman", "Daler", "Kubanych"];

    const getChoose = (e: object) => {
        if (e.input === "company") {
            setOpenCompany(e.choosedItem);
            setCompany(!company);
        } else if (e.input === "maneger") {
            setOpenManeger(e.choosedItem);
            setManeger(!maneger);
        } else if (e.input === "begin") {
            setOpenBegin(e.choosedItem);
            setBegin(!begin);
        } else if (e.input === "end") {
            setOpenEnd(e.choosedItem);
            setEnd(!end);
        }
    };

    return (
        <form className={styles.Form}>
            <ul>
                <div className={styles.InputCont}>
                <p>Компания</p>
                    <input
                        type="text"
                        placeholder="Выбрать"
                        value={openCompany}
                        onChange={(e) => {
                            setOpenCompany(e.target.value);
                        }}
                    />
                    <div onClick={() => setCompany(!company)} className={company ? styles.DrdownIcnOpen : styles.DrdownIcn}>
                    <ArrowLeft2/>
                    </div>
                    {company ? (
                        <ChooseMenu
                            upChoose={getChoose}
                            itemsData={menuCompanys}
                            inputId="company"
                        />
                    ) : null}

                </div>
                <div className={styles.InputCont}>
                    <p>Менеджер</p>
                    <input
                        type="text"
                        placeholder="Выбрать"
                        value={openManeger}
                        onChange={(e) => {
                            setOpenManeger(e.target.value);
                        }}
                    />
                    <div onClick={() => setManeger(!maneger)} className={maneger ? styles.DrdownIcnOpen : styles.DrdownIcn}>
                    <ArrowLeft2/>
                    </div>
                    {maneger ? (
                        <ChooseMenu
                            upChoose={getChoose}
                            itemsData={menuManeger}
                            inputId="maneger"
                        />
                    ) : null}
                </div>
                <div className={styles.InputCont}>
                <p>Дата начало</p>
                <input
                        type="date"
                        placeholder="Выбрать"
                        value={openBegin}
                        onChange={(ev) => {
                            setOpenBegin(ev.target.value);
                        }}
                    />
                    
                </div>
                <div className={styles.InputCont}>
                <p>Дата конец</p>
                <input
                        type="date"
                        placeholder=""
                        value={openEnd}
                        onChange={(ev) => {
                            setOpenEnd(ev.target.value);
                        }}
                        
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
                <button onClick={submitForm}>Показать</button>
            </div>
        </form>
    );
};

export default ReportForm;
