import { CloseSquare } from "iconsax-react";
import ReportForm from "./ReportForm/ReportForm";
import styles from "./ReportModal.module.scss";
import { FC, useState } from "react";
import { useReport } from "../../../shared/hooks";

export const ReportModal: FC = () => {
    const [results, setResults] = useState();
    const subResults = (e: object) => {
        setResults(e);
        console.log(e);
    };
    const modal = useReport();
    return (
        <div className={styles.RepModalWindow}>
            <div className={styles.Header1}>
                <p>Скачать отчёт</p>
                <CloseSquare
                    cursor={"pointer"}
                    onClick={modal.close}
                    color="black"
                    size={34}
                />
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
