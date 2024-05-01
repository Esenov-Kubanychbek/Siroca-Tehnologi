import { FC } from "react";
import styles from "./ShortDescription.module.scss";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { CustomTextArea } from "../../../../../shared/ui";

export const ShortDescription: FC = () => {
    const fetchRequest = getOneRequestApi();
    return (
        <div className={styles.ShortDescription}>
            <CustomTextArea
                maxLength={60}
                name="short_description"
                placeholder="Напишите..."
                height={100}
                width={580}
                variant="TextArea"
                readOnly={true}
                value={
                    fetchRequest.oneRequest.short_description === null ? "" : fetchRequest.oneRequest.short_description
                }
            />
        </div>
    );
};
