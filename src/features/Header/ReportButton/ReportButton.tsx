import styles from "./ReportButton.module.scss";
import { useState } from "react";

export const ReportButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
   const [btnState, setBtnState] = useState(true);

   return (
      <div
         onClick={onClick}
         className={btnState ? styles.Report : styles.ReportNone}
      >
         Cкачать отчет
      </div>
   );
};
