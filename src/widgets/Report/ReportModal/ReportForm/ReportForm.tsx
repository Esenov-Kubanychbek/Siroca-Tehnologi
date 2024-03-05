import { ArrowDown, ArrowDown2 } from "iconsax-react"
import ChooseMenu from "./ChooseMenu"
import styles from "./reportForm.module.scss"
import { useState, useEffect } from "react"

interface ReportFormProps {
    onSub: () => void
}

const ReportForm: React.FC = ({ onSub }) => {
    const [company, setCompany] = useState<boolean>(false)
    const [maneger, setManeger] = useState<boolean>(false)
    const [begin, setBegin] = useState<boolean>(false)
    const [end, setEnd] = useState<boolean>(false)

    const [openCompany, setOpenCompany] = useState<string>('')
    const [openManeger, setOpenManeger] = useState<string>('')
    const [openBegin, setOpenBegin] = useState<string>('Дата началы')
    const [openEnd, setOpenEnd] = useState<string>('Дата окончания')
    const CleanFilters = () => {
        setOpenCompany('')
        setOpenManeger('')
        setOpenBegin('Дата началы')
        setOpenEnd('Дата конца')
    }
    const openMenu = (ev: any) => {
        const id = ev.target.id
        if (id === "company") {
            setCompany(!company)
            setManeger(false)
            setBegin(false)
            setEnd(false)
        } else if (id === "maneger") {
            setManeger(!maneger)
            setCompany(false)
            setBegin(false)
            setEnd(false)
        } else if (id === "begin") {
            setBegin(!begin)
            setCompany(false)
            setManeger(false)
            setEnd(false)
        } else if (id === "end") {
            setEnd(!end)
            setCompany(false)
            setManeger(false)
            setBegin(false)
        }
    }

    const submitForm = () => {

        const formData = {
            company: openCompany,
            maneger: openManeger,
            begin: openBegin,
            end: openEnd
        }
        onSub(formData)
    }
    const menuCompanys = ['Optima', 'Ail bank', 'Mbank']
    const menuManeger = ['Abu', 'Aman', 'Daler', 'Kubanych']

    const getChoose = (ev: object) => {
        if(ev.input === "company"){
            setOpenCompany(ev.choosedItem)
            setCompany(!company)
        }else if(ev.input === "maneger"){
            setOpenManeger(ev.choosedItem)
            setManeger(!maneger)
        }else if(ev.input === "begin"){
            setOpenBegin(ev.choosedItem)
            setBegin(!begin)
        }else if(ev.input === "end"){
            setOpenEnd(ev.choosedItem)
            setEnd(!end)
        }
    }

    return (
        <form className={styles.Form}>
            <ul>
                <div className={styles.InputCont}>
                    <input type="text" placeholder="Компания" value={openCompany} onChange={(ev) => { setOpenCompany(ev.target.value) }} />
                    <div className={styles.contIcn}>
                        <div id="company" onClick={openMenu} className={company ? styles.OpenFindClose : styles.OpenFind}></div>
                    </div>
                    {company ? <ChooseMenu upChoose={getChoose} itemsData={menuCompanys} inputId='company'/> : null}
                </div>
                <div className={styles.InputCont}>
                    <input type="text" placeholder="Менеджер" value={openManeger} onChange={(ev) => { setOpenManeger(ev.target.value) }} />
                    <div id="maneger" onClick={openMenu} className={maneger ? styles.OpenFindClose : styles.OpenFind}></div>
                    {maneger ? <ChooseMenu upChoose={getChoose} itemsData={menuManeger} inputId="maneger"/> : null}
                </div>
                <div className={styles.InputCont}>
                    <p>{openBegin}</p>
                    <div id="begin" onClick={openMenu} className={begin ? styles.OpenFindClose : styles.OpenFind}></div>
                    {begin ? <ChooseMenu upChoose={getChoose} itemsData={menuManeger} inputId="begin"/> : null}
                </div>
                <div className={styles.InputCont}>
                    <p>{openEnd}</p>
                    <div id="end" onClick={openMenu} className={end ? styles.OpenFindClose : styles.OpenFind}></div>
                    {end ? <ChooseMenu upChoose={getChoose} itemsData={menuManeger} inputId="end"/> : null}
                </div>
            </ul>
            <div className={styles.EnterCont}>
                <a href="#" onClick={CleanFilters}>Очистить фильтр</a>
                <button onClick={submitForm}>Показать</button>
            </div>
        </form>
    )
}

export default ReportForm

