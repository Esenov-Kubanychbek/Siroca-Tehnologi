import styles from "./ReportButton.module.scss";
import { FC, useState } from "react";

export const ReportButton: FC<{ click: () => void }> = ({ click }) => {
    const [btnState, setBtnState] = useState(true);
    return (
        <div
            onClick={click}
            className={btnState ? styles.Report : styles.ReportNone}
        >
            Cкачать отчет
        </div>
    );
};
