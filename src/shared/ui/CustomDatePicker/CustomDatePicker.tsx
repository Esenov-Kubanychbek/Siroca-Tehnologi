import { FC, useEffect, useState } from "react";
import styles from "./CustomDatePicker.module.scss";
import { ArrowSquareLeft, ArrowSquareRight } from "iconsax-react";
import { changeMonth, dateHelper, getMonthName, getYear } from "./helpers";
import { ICustomDatePicker } from "./types/CustomDatePickerTypes";
import { currentDate } from "@/shared/variables/variables";

export const CustomDatePicker: FC<ICustomDatePicker> = (props) => {
    const { value, onClick } = props;
    const [date, setDate] = useState<string>(value ? (value === "" ? currentDate : value) : currentDate);
    useEffect(() => {
        console.log(date, "date");
        console.log(value, "value");
    }, [date, value]);
    const handleChange = () => {
        const fakeEvent = {
            target: {
                name: name,
                value: value
            }
        } as ChangeEvent<HTMLInputElement>;
    }
    return (
        <div className={styles.CustomDatePicker}>
            <div className={styles.CustomDatePickerTop}>
                <p className={styles.Month}>{getMonthName(date)}</p>
                <p>{getYear(date)}</p>
                <div>
                    <ArrowSquareLeft
                        onClick={() => {
                            setDate(changeMonth(date, "prev")), console.log(changeMonth(date, "prev"));
                        }}
                        color="#717171"
                        variant="Bold"
                    />
                    <ArrowSquareRight
                        onClick={() => {
                            setDate(changeMonth(date, "next")), console.log(changeMonth(date, "next"));
                        }}
                        color="#717171"
                        variant="Bold"
                    />
                </div>
            </div>
            <div className={styles.Calendar}>
                <div className={styles.WeekDays}>
                    <p>ПН</p>
                    <p>ВТ</p>
                    <p>СР</p>
                    <p>ЧТ</p>
                    <p>ПТ</p>
                    <p className={styles.WeekendDay}>СБ</p>
                    <p className={styles.WeekendDay}>ВС</p>
                </div>
                <div className={styles.CalendarMain}>
                    {dateHelper(date).map((day, i) => (
                        <button
                            style={{
                                color: date === day.value ? "white" : day.color,
                                backgroundColor: date === day.value ? "#1C6AB1" : "none",
                            }}
                            key={i}
                            type="button"
                            onClick={onClick}
                        >
                            {day.day}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
