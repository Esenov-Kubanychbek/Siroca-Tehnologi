import { ChangeEvent, FC, useState } from "react";
import styles from "./Comments.module.scss";
import { CustomTextArea } from '../../../../shared/ui';
import { IComments, commentsApi } from "../../../../shared/commentsApi";
import { Send2 } from "iconsax-react";



export const Comments: FC  = () => {
    const fetchComments = commentsApi()

    const [commentsState , setCommentsState] = useState<IComments>({
        text:"" ,
        user: null,
        application: null,
    });

    const CommentsValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentsState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log(commentsState)
    }; 
    fetchComments.posting(commentsState);
    return (
        <div className={styles.CommentsCtnr}>
            <div className={styles.Comments}>
                <CustomTextArea
                    name="text"
                    placeholder="Напишите..."
                    height={100}
                    width={590}
                    variant="TextArea"
                    change={CommentsValue}
                />
                <div>
                    <Send2 size={24} color="#5C5C5C"/>
                </div>
            </div>
        </div>
    );
};
