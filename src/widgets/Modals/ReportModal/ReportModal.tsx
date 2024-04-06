import { CloseSquare, Import } from "iconsax-react";
import ReportForm from "./ReportForm/ReportForm";
import styles from "./ReportModal.module.scss";
import { FC, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/variables/variables";
import { useReport } from "../../../shared/hooks/modalHooks";

export const ReportModal: FC = () => {
    const [results, setResults] = useState();
    const [excel, setExcel] = useState();
    const subResults = async (e: object) => {
        setResults(e);
        console.log(e);
        try {
            const response = await axios.get(
                `${BASE_URL}/applications/filter/?company_name=${e.company}&manager_first_name=${e.maneger}&start_date=${e.begin}&finish_date=${e.end}&week=unknown&month=unknown&all_time=unknown`,
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                },
            );
            console.log(response.data);

            if (response.status === 200) {
                setExcel(response.data);
            } else setExcel(false);
        } catch (error) {
            console.log(error);
        }
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
            {excel ? (
                <div className={styles.ExcelCont}>
                    <div className={styles.ExelUpload}>
                        <div className={styles.ItemXl}>
                            <div className={styles.Icn}></div>
                            <p className={styles.Name}>Интеграция Лис Мбанк</p>
                        </div>
                        <p className={styles.kb}>{excel.filtered_data_size / 100} kb</p>
                    </div>
                    <button className={styles.DonwloadBtn}>
                        Скачать <Import />
                    </button>
                </div>
            ) : null}
        </div>
    );
};
