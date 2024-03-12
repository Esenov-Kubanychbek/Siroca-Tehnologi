import { FC } from "react";
import styles from "./Date.module.scss";
import { IDate } from "./model/types";

export const Date: FC<IDate> = (props) => {
    const { name, children, dates } = props;
    return (
        <div className={styles.Date}>
            <div className={styles.DateCalendar}>
                <div className={styles.Name}>{name}</div>
                <div className={styles.Calendar}>{children}</div>
            </div>
            <div className={styles.DateText}>{dates}</div>
        </div>
    );
};
