import { FC } from "react";
import styles from "./Comments.module.scss";
import { CustomTextArea } from '../../../../shared/ui';
// import { IComments, commentsApi } from "../../../../shared/commentsApi";


export const Comments: FC  = () => {
    // const fetchComments = commentsApi()

    // const [commentsState , setCommentsState] = useState<IComments>({
    //     text:"" ,
    //     user: 0,
    //     application: 0,
    // });

    // const CommentsValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement >) => {
    //     setCommentsState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    //     console.log(commentsState)
    // }; 
    // fetchComments.posting(commentsState);
    return (
        <div className={styles.CommentsCtnr}>
            <div className={styles.Comments}>
                <CustomTextArea
                    name="text"
                    placeholder="Напишите..."
                    height={100}
                    width={590}
                    variant="TextArea"
                    // change={CommentsValue}
                />
            </div>
        </div>
    );
};
