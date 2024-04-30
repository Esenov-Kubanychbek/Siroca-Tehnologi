import { FC } from "react";
import styles from "./Description.module.scss";
import { CustomTextArea } from "../../../../../shared/ui";
import { FolderAdd } from "iconsax-react";
import { editRequestApi } from "../../api/editRequestApi";

export const Description: FC = () => {
    const { requestState, requestChange, requestFileChange } = editRequestApi();
    return (
        <div className={styles.Description}>
            <CustomTextArea
                value={requestState.description === null ? "" : requestState.description}
                name="description"
                change={requestChange}
                placeholder="Напишите..."
                height={100}
                width={580}
                variant="TextArea"
            />
            <FolderAdd
                cursor={"pointer"}
                className={styles.Icon}
                size={24}
                color="#5C5C5C"
            />
            <input
                type="file"
                name="files"
                onChange={requestFileChange}
                multiple
            />
        </div>
    );
};
