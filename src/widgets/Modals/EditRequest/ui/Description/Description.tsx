import { ChangeEvent, FC } from "react";
import styles from "./Description.module.scss";
import { CustomTextArea } from "../../../../../shared/ui";
import { FolderAdd } from "iconsax-react";

export const Description: FC<{ onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }> = ({ onChange }) => {
    return (
        <div className={styles.Description}>
            <CustomTextArea
                name="description"
                change={onChange}
                placeholder="Напишите..."
                height={100}
                width={580}
                variant="TextArea"
            />
            <FolderAdd
                className={styles.Icon}
                size={24}
                color="#5C5C5C"
            />
        </div>
    );
};
