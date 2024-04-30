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
        </div>
    );
};
