import ButtonSave from "../../widgets/request/ui/buttonsSave/ButtonSave"
import FormSearch from "./Components/FormSearch"
import styles from "./reportModal.module.scss"
import { useState, useEffect } from "react"

interface ReportModalProps {

}
const ReportModal: React.FC<ReportModalProps> = ({ }) => {
    const [savedValue, setSavedValue] = useState<object>();
    console.log(savedValue);
    
    const handleSaveValue = (value: object) => {
        // setSavedValue(value);
    };
    return (
        <div className={styles.Container}>
            <FormSearch onSave={setSavedValue} date="Дата началы" name="Название" />
            <FormSearch onSave={setSavedValue} date="Дата конца" name="Название" />
            <button>Найти</button>
        </div>
    )
}

export default ReportModal