import { FC } from "react";
import styles from "./ShortDescription.module.scss";
import { getOneRequestApi } from "../../api/getOneRequestApi";
<<<<<<< HEAD

export const ShortDescription: FC = () => {
    const fetchData = getOneRequestApi();
    return <p className={styles.ShortDescription}>{fetchData.oneRequest.short_description}</p>;
=======
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
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
};
