import styles from "./Description.module.scss";
import { FolderAdd } from "iconsax-react";
import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { CustomTextArea } from "../../../../../shared/ui";

export const Description: FC = () => {
    const fetchRequest = getOneRequestApi();
    return (
        <div className={styles.Description}>
            <CustomTextArea
                name="description"
                placeholder="Напишите..."
                height={100}
                width={580}
                variant="TextArea"
                readOnly={true}
                value={fetchRequest.oneRequest.description === null ? "" : fetchRequest.oneRequest.description}
            />
            <FolderAdd
                className={styles.Icon}
                size={24}
                color="#5C5C5C"
            />
<<<<<<< HEAD
=======
            {fetchRequest.oneRequest.files !== null && (
                <img
                    src={fetchRequest.oneRequest.files}
                    alt="description"
                />
            )}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
        </div>
    );
};
