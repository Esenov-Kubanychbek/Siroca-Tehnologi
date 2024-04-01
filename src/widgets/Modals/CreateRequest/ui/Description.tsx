import { ChangeEvent, FC } from "react";
import styles from "./Comments.module.scss";
import { CustomTextArea } from "../../../../shared/ui";
import { FolderAdd } from "iconsax-react";

export const Description: FC<{ onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }> = ({ onChange }) => {
    return (
        <div className={styles.CommentsCtnr}>
            <div className={styles.Comments}>
                <CustomTextArea
                    name="description"
                    change={onChange}
                    placeholder="Напишите..."
                    height={100}
                    width={590}
                    variant="TextArea"
                />
                <div>
                    <FolderAdd
                        size={24}
                        color="#5C5C5C"
                    />
                </div>
            </div>
        </div>
    );
};
