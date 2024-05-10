import styles from "./Comments.module.scss";
import { FC } from "react";
import { MoreSquare } from "iconsax-react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { Popover } from "antd";
import { deleteCommentApi } from "../../api/deleteCommentApi";

export const Comments: FC = () => {
    const { oneRequest, deleteCommentFromComments } = getOneRequestApi();
    const deleteComment = deleteCommentApi();
    const deleteFunc = (props: number) => {
        deleteComment.deleteComment(props);
        deleteCommentFromComments(props)
    };
    return (
        <div className={styles.Comments}>
            {oneRequest.comments.map((comment, i) => (
                <div
                    className={styles.OneComment}
                    key={i}
                >
                    <div className={styles.Header}>
                        <div className={styles.HeaderLeft}>
                            <img src={comment.user_image} />
                            <p>{comment.user}</p>
                        </div>
                        <div className={styles.HeaderRight}>
                            <div className={styles.Date}>{comment.formatted_date_added}</div>
                            <Popover
                                placement="bottomRight"
                                content={
                                    <div className={styles.MoreButtons}>
                                        <button className={styles.Button}>Редактировать</button>
                                        <button
                                            className={styles.Button}
                                            onClick={() => deleteFunc(Number(comment.id))}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                }
                                trigger={"click"}
                            >
                                <MoreSquare
                                    cursor={"pointer"}
                                    variant="Bulk"
                                    color="#929292"
                                    size={34}
                                />
                            </Popover>
                        </div>
                    </div>
                    <div className={styles.Comment}>{comment.text}</div>
                </div>
            ))}
        </div>
    );
};
