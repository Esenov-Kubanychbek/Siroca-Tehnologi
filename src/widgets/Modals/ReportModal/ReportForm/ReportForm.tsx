import React, { useState, FC, FormEvent, ChangeEvent, useEffect, KeyboardEvent } from "react";
import { SearchNormal } from "iconsax-react";
import styles from "./report.module.scss";
import { useDataStoreComponies } from "../../../Admin/Companies/api/componiesApi";

interface ReportFormProps {
    onSub: (formData: FormData) => void;
}

interface FormData {
    company: (string | null)[];
    maneger: (string | null)[];
    begin: string;
    end: string;
}

const ReportForm: FC<ReportFormProps> = ({ onSub }) => {
    const [openCompany, setOpenCompany] = useState<string>("");
    const [openManeger, setOpenManeger] = useState<string>("");
    const [openBegin, setOpenBegin] = useState<string>("");
    const [openEnd, setOpenEnd] = useState<string>("");
    const [choosedFilters, setChoosedGilters] = useState<string[]>([])
    const [showItems, setShowItems] = useState<(string | null)[]>([])
    const [managerShow, setManagerShow] = useState<(string | null)[]>([])
    const { data, fetchDatas } = useDataStoreComponies()

    useEffect(() => {
        fetchDatas()
    }, [])
    const CleanFilters = () => {
        setOpenCompany("");
        setOpenManeger("");
        setOpenBegin("");
        setOpenEnd("");
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData: FormData = {
            company: showItems,
            maneger: managerShow,
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
                    return el.name
                } else {
                    return null
                }
            })
            setState(e.target.value);
            setShowItems(mapped)
        } else if (e.target.id && e.target.id === "manager") {
            const mapped = data.map((el) => {
                if (el.name.includes(e.target.value)) {
                    return el.name
                } else {
                    return null
                }
            })
            setManagerShow(mapped)
            setState(e.target.value);
        } else {
            setState(e.target.value);
        }

    };
    const addChoosed = (e: ChangeEvent<HTMLInputElement>) => {
        if(!choosedFilters.includes(e.target.id) && e.target.checked === true){
          setChoosedGilters([...choosedFilters, e.target.id])  
        }else if(!e.target.checked){
            const find = [...choosedFilters]
            const filt = find.filter((el) => {
                if(el !== e.target.id){
                    return el
                }else{
                    return null
                }
                
            })
            setChoosedGilters(filt)
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLUListElement>)=> {
        if(e.key === "Enter"){
            setOpenCompany('')
            setOpenManeger('') 
        }
    }

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
                        {openCompany && showItems && showItems.map((el, index) => {
                            if (el === null) {
                                return null
                            } else {
                                return (
                                    <p id={`${index}`}>{el} <input type="checkbox" id={el} onChange={addChoosed} /></p>
                                )
                            }

                        })}
                    </div>
                    <div className={styles.choosed}>
                {
                    choosedFilters.map((el) => {
                       
                            return(
                                <div>
                                    <p>{el}</p>
                                </div>
                            )
                    })
                }
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
