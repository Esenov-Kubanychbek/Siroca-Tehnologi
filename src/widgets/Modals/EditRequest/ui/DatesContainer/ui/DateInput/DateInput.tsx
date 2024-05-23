import { FC } from "react";
import styles from "./DateInput.module.scss";
import { CustomInput } from "@/shared/ui";
import { IDateInput } from "./types/DateInputTypes";
import { editRequestApi } from "@/widgets/Modals/EditRequest/api/editRequestApi";

export const DateInput: FC<IDateInput> = (props) => {
    const { text, value, name } = props;
    const { requestChange } = editRequestApi();
    return (
        <div className={styles.DateInput}>
            <p>{text}</p>
            <CustomInput
                type="date"
                value={value === null ? "" : value}
                name={String(name)}
                change={requestChange}
                width={282}
            />
        </div>
    );
};
