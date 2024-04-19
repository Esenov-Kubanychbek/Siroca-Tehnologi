import { CloseSquare, Import } from "iconsax-react";
import ReportForm from "./ReportForm/ReportForm";
import styles from "./ReportModal.module.scss";
import { FC, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/variables/variables";
import { FileExcelFilled } from "@ant-design/icons";
import { IReportModal } from "./types/types";

interface ResultsData {
    company: (string | null)[];
    maneger: (string | null)[];
    begin: string;
    end: string;
}

interface ExcelData {
    filtered_data_size: number;
    results: { company: string }[];
}

export const ReportModal: FC<IReportModal> = (props) => {
    const { setModal } = props;
    const [results, setResults] = useState<ResultsData | null>(null);
    const [excel, setExcel] = useState<ExcelData | false | null>(null);

    const subResults = async (e: ResultsData) => {
        setResults(e);
        try {
            const response = await axios.get(
                `${BASE_URL}/applications/filter/?${e.company ? `company_name=${e.company.map(el => el !== null ? `${el}` : '').join('')}` : ""}${e.maneger ? `&manager_first_name=${e.maneger.map(el => el !== null ? `${el}` : '').join('')}` : ""}${e.begin ? `&start_date=${e.begin}&` : ""}${e.end ? `&finish_date=${e.end}` : ""}`,
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                },
            );
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
            const response = await axios.get(
                `${BASE_URL}/applications/filter/export-to-excel/?${results?.company ? `company_name=${results?.company}&` : ""}${results?.maneger ? `manager_first_name=${results?.maneger}&` : ""}${results?.begin ? `start_date=${results?.begin}&` : ""}${results?.end ? `finish_date=${results?.end}&` : ""}`,
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                    responseType: "arraybuffer", // Указываем тип ответа как массив байтов
                },
            );

            // Создаем объект Blob из полученных данных
            const blob = new Blob([response.data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            // Создаем ссылку для скачивания файла
            const url = window.URL.createObjectURL(blob);

            // Создаем ссылку для загрузки
            const a = document.createElement("a");
            a.href = url;
            a.download = "Report.xlsx"; // Укажите имя файла
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.RepModalWindow}>
            <div className={styles.Header1}>
                <p>Скачать отчёт</p>
                <CloseSquare
                    cursor={"pointer"}
                    onClick={() => setModal(false)}
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
                            <div
                                className={styles.Icn}
                                style={{ margin: "0px 10px" }}
                            >
                                <FileExcelFilled size={30} />
                            </div>
                            <p className={styles.Name}>{excel.results[0].company}</p>
                        </div>
                        <p className={styles.kb}>{excel.filtered_data_size / 1000} kb</p>
                    </div>
                    <button
                        onClick={downLoad}
                        className={styles.DonwloadBtn}
                    >
                        Скачать <Import />
                    </button>
                </div>
            ) : null}
        </div>
    );
};
