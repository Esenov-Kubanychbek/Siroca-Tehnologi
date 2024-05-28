import { ChangeEvent, FC, useState } from "react";
import styles from "./DateInput.module.scss";
import { CustomDatePicker, CustomInput } from "@/shared/ui";
import { IDateInput } from "./types/DateInputTypes";
import { editRequestApi } from "@/widgets/Modals/EditRequest/api/editRequestApi";
import { Calendar } from "iconsax-react";

export const DateInput: FC<IDateInput> = (props) => {
    const { text, value, name } = props;
    const [dateOpened, setDateOpened] = useState<boolean>(false);
    const { requestChange } = editRequestApi();
    return (
        <div className={styles.DateInput}>
            <p>{text}</p>
            <div className={styles.Input}>
                <CustomInput
                    type="date"
                    value={value === null ? "" : value}
                    name={String(name)}
                    change={requestChange}
                    width={282}
                />
                <Calendar
                    className={styles.Icon}
                    color="#5C5C5C"
                    onClick={() => setDateOpened(!dateOpened)}
                />
                {dateOpened && (
                    <div className={styles.DatePicker}>
                        <CustomDatePicker
                            value={value ? value : ""}
                            onClick={() => console.log("this date")}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
