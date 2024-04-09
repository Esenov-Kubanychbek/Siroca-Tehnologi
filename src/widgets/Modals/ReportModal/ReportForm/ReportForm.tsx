import { ArrowLeft2, SearchNormal } from "iconsax-react";
import ChooseMenu from "./ChooseMenu";
import styles from "./report.module.scss";
import { useState, FC, FormEvent } from "react";

interface ReportFormProps {
    onSub: () => void;
}

const ReportForm: FC<ReportFormProps> = ({ onSub }) => {
    const [openCompany, setOpenCompany] = useState<string>("");
    const [openManeger, setOpenManeger] = useState<string>("");
    const [openBegin, setOpenBegin] = useState<string>();
    const [openEnd, setOpenEnd] = useState<string>();

    const CleanFilters = () => {
        setOpenCompany("");
        setOpenManeger("");
        setOpenBegin("");
        setOpenEnd("");
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = {
            company: openCompany,
            maneger: openManeger,
            begin: openBegin,
            end: openEnd,
        };
        onSub(formData);
    };

    return (
        <form onSubmit={submitForm} className={styles.Form}>
            <ul>
                <div className={styles.InputCont}>
                    <p>Компания</p>
                    <div className={styles.SearchIcn}>
                        <SearchNormal size={16}/>
                    </div>
                    <input
                        type="text"
                        placeholder="Выбрать"
                        value={openCompany}
                        onChange={(e) => {
                            setOpenCompany(e.target.value);
                        }}
                        className={styles.inpWithIcn}
                    />
                </div>
                <div className={styles.InputCont}>
                    <p>Менеджер</p>
                    <div className={styles.SearchIcn}>
                        <SearchNormal size={16}/>
                    </div>
                    <input
                        type="text"
                        placeholder="Выбрать"
                        value={openManeger}
                        onChange={(e) => {
                            setOpenManeger(e.target.value);
                        }}
                        className={styles.inpWithIcn}
                    />
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
                <button type="submit">Показать</button>
            </div>
        </form>
    );
};

export default ReportForm;
