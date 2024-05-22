import styles from "./Comments.module.scss";
import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { deleteCommentApi } from "../../api/deleteCommentApi";
import { CustomMoreSquare } from "@/shared/ui";
import { ViewUserProfile } from "@/widgets";

export const Comments: FC = () => {
    const { oneRequest, deleteCommentFromComments } = getOneRequestApi();
    const deleteComment = deleteCommentApi();
    const deleteFunc = (props: number) => {
        deleteComment.deleteComment(props);
        deleteCommentFromComments(props);
    };
    return (
        <div className={styles.Comments}>
            {oneRequest.comments.map((comment, i) => (
                <div
                    className={styles.OneComment}
                    key={i}
                >
                    <div className={styles.Header}>
                        <ViewUserProfile userId={Number(comment.user_id)}>
                            <div
                                className={styles.HeaderLeft}
                            >
                                <img src={comment.user_image} />
                                <p>{comment.user}</p>
                                <p className={styles.Date}>{comment.formatted_date_added}</p>
                            </div>
                        </ViewUserProfile>
                        <CustomMoreSquare>
                            <button>Редактировать</button>
                            <button onClick={() => deleteFunc(Number(comment.id))}>Удалить</button>
                        </CustomMoreSquare>
                    </div>
                    <div className={styles.CommentText}>{comment.text}</div>
                </div>
            ))}
        </div>
    );
};
