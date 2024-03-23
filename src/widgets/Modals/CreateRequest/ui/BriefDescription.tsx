import { FC } from "react";
import styles from "./Comments.module.scss";
import { CustomTextArea } from '../../../../shared/ui';

export const BriefDescription: FC  = () => {
    
    return (

        <div className={styles.CommentsCtnr}>
            <div className={styles.Comments}>
                <CustomTextArea
                    name=""
                    placeholder="Напишите..."
                    height={100}
                    width={590}
                    variant="TextArea"
                />
            </div>
        </div>
    );
};
