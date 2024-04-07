import { CloseSquare, Import } from "iconsax-react";
import ReportForm from "./ReportForm/ReportForm";
import styles from "./ReportModal.module.scss";
import { FC, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/variables/variables";
import { useReport } from "../../../shared/hooks/modalHooks";

interface ResultsData {
    company: string;
    maneger: string;
    begin: string;
    end: string;
}

interface ExcelData {
    filtered_data_size: number;
    // Добавьте другие свойства из ответа API, если это необходимо
}

export const ReportModal: FC = () => {
    const [results, setResults] = useState<ResultsData | null>(null);
    const [excel, setExcel] = useState<ExcelData | false | null>(null);




    const subResults = async (e: ResultsData) => {
        setResults(e);
        try {
            const response = await axios.get(`${BASE_URL}/applications/filter/?company_name=${e.company}&manager_first_name=${e.maneger}&start_date=${e.begin}&finish_date=${e.end}&week=unknown&month=unknown&all_time=unknown`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                setExcel(response.data);
            } else {
                setExcel(false);
            }
        } catch (error) {
            console.log(error);
        }
    };


    const downLoad = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/filter/export-to-excel/?company_name=${results?.company}&manager_first_name=${results?.maneger}&start_date=${results?.begin}&finish_date=${results?.end}&week=unknown&month=unknown&all_time=unknown`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                },
                responseType: 'arraybuffer' // Указываем тип ответа как массив байтов
            });
    
            // Создаем объект Blob из полученных данных
            const blob = new Blob([response.data], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
    
            // Создаем ссылку для скачивания файла
            const url = window.URL.createObjectURL(blob);
    
            // Создаем ссылку для загрузки
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Report.xlsx'; // Укажите имя файла
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
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
                    <button onClick={downLoad} className={styles.DonwloadBtn}>Скачать <Import /></button>
                </div>
            ) : null}
        </div>
    );
};
