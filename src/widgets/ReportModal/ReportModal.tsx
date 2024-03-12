import { CloseSquare } from "iconsax-react";
import ReportForm from "./ReportForm/ReportForm";
import styles from "./reportModal.module.scss";
import { FC, useState } from "react";

interface IReportModal {
    onClose: () => void;
}

export const ReportModal: FC<IReportModal> = ({ onClose }) => {
    const [results, setResults] = useState();
    const subResults = (e: object) => {
        setResults(e);
        console.log(e);
    };
    return (
        <div className={styles.bg}>
            <div className={styles.repModalWindow}>
                <div className={styles.header1}>
                    <p>Скачивания отчета</p>
                    <button
                        onClick={onClose}
                        className={styles.CloseBtn}
                    >
                        <CloseSquare
                            color="black"
                            size={34}
                        />
                    </button>
                </div>
                <div className={styles.header2}>
                    <p>Ведение данных для поиска</p>
                </div>
                <div className={styles.form}>
                    <ReportForm onSub={subResults} />
                </div>

                <div className={styles.results}>
                    <p>Результаты:</p>
                </div>
            </div>
        </div>
    );
};
