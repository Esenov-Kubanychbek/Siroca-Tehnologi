import styles from "./Comments.module.scss";
<<<<<<< HEAD
import Avatar from "antd/es/avatar/avatar";
import { FC } from "react";
import { MoreSquare } from "iconsax-react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { CustomInput } from "../../../../../shared/ui";
=======
import { FC } from "react";
import { MoreSquare } from "iconsax-react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
import { Popover } from "antd";
import { deleteCommentApi } from "../../api/deleteCommentApi";

export const Comments: FC = () => {
    const fetchRequest = getOneRequestApi();
    const deleteComment = deleteCommentApi();
    const deleteFunc = (props: number) => {
        deleteComment.deleteComment(props);
        fetchRequest.getOneRequest(fetchRequest.oneRequest.id);
    };
    return (
<<<<<<< HEAD
        <>
=======
        <div className={styles.Comments}>
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
            {fetchRequest.oneRequest.comments.map((card, i) => (
                <div
                    className={styles.OneComment}
                    key={i}
                >
                    <div className={styles.Header}>
                        <div className={styles.HeaderLeft}>
<<<<<<< HEAD
                            <Avatar />
                            <p>{card.user}</p>
                        </div>
                        <Popover
                            placement="bottomRight"
                            content={
                                <div className={styles.MoreButtons}>
                                    <button className={styles.Button}>Редактировать</button>
                                    <button
                                        className={styles.Button}
                                        onClick={() => deleteFunc(card.id)}
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
                    <div className={styles.Comment}>{card.text}</div>
                    <div className={styles.Date}>{card.date_added}</div>
                </div>
            ))}
            <CustomInput
                width={580}
                placeholder="Добавьте коментарии"
            />
        </>
=======
                            <img src={card.user_image} />
                            <p>{card.user}</p>
                        </div>
                        <div className={styles.HeaderRight}>
                            <div className={styles.Date}>{card.formatted_date_added}</div>
                            <Popover
                                placement="bottomRight"
                                content={
                                    <div className={styles.MoreButtons}>
                                        <button className={styles.Button}>Редактировать</button>
                                        <button
                                            className={styles.Button}
                                            onClick={() => deleteFunc(card.id)}
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
                    <div className={styles.Comment}>{card.text}</div>
                </div>
            ))}
        </div>
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
    );
};
