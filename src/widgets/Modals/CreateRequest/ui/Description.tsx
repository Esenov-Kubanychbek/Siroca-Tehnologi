import { ChangeEvent, FC } from "react";
import styles from "./Comments.module.scss";
import { CustomTextArea } from '../../../../shared/ui';


export const Description: FC <{ onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }> = ({onChange}) => {
    
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
            </div>
        </div>
    );
};
