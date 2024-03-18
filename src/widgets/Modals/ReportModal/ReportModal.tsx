import { CloseSquare } from "iconsax-react";
import ReportForm from "./ReportForm/ReportForm";
import styles from "./report.module.scss";
import { FC, useState } from "react";
import reportModalWindow from "../../../features/Header/ReportButton/model/ReportModalWindow";

export const ReportModal: FC = () => {
    const [results, setResults] = useState();
    const subResults = (e: object) => {
        setResults(e);
        console.log(e);
    };
    const modal = reportModalWindow();
    return (
        <div className={styles.RepModalWindow}>
            <div className={styles.Header1}>
                <p>Скачивания отчета</p>
                <button
                    onClick={modal.close}
                    className={styles.CloseBtn}
                >
                    <CloseSquare
                        color="black"
                        size={34}
                    />
                </button>
            </div>
            <div className={styles.Header2}>
                <p>Ведение данных для поиска</p>
            </div>
            <div className={styles.Form}>
                <ReportForm onSub={subResults} />
            </div>
            <div className={styles.Results}>
                <p>Результаты:</p>
            </div>
        </div>
    );
};