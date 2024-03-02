import styles from "./formSearch.module.scss"
import { useState, useEffect } from "react"

interface IFormSearch {
    name: string,
    date: string,
    onSave: (inputValue: object) => void;
}

const FormSearch: React.FC<IFormSearch> = ({ name, date, onSave }) => {
    const [inputValue, setInputValue] = useState('');
    const [inputValueDate, setInputValueDate] = useState('');
    const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueDate(event.target.value);
    };

    useEffect(() => {
        const values = {
            name: inputValue,
            date: inputValueDate
        }
        onSave(values);
    }, [inputValueDate, inputValue])

    return (
        <div className={styles.FormSearch}>
            <p>{name}</p>
            <input placeholder={name} className={styles.Input} type="text" value={inputValue} onChange={handleInputChange1} />
            <div className={styles.DateInputBlock}>
                <input className={styles.InputDate} type="date" value={inputValueDate} onChange={handleInputChange2} />
                <div className={styles.DateVal}></div>
            </div>
        </div>
    )
}

export default FormSearch