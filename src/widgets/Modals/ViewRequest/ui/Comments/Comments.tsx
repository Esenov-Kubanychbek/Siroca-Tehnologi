import styles from "./Comments.module.scss";
import Avatar from "antd/es/avatar/avatar";
import { FC } from "react";
import { MoreSquare } from "iconsax-react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { CustomInput } from "../../../../../shared/ui";
import { Popover } from "antd";
import { deleteCommentApi } from "../../api/deleteCommentApi";

export const Comments: FC = () => {
    const fetchRequest = getOneRequestApi();
    const deleteComment = deleteCommentApi()
    const deleteFunc = (props: number) => {
        deleteComment.deleteComment(props)
        fetchRequest.getOneRequest(fetchRequest.oneRequest.id)
    }
    return (
        <>
            {fetchRequest.oneRequest.comments.map((card, i) => (
                <div
                    className={styles.OneComment}
                    key={i}
                >
                    <div className={styles.Header}>
                        <div className={styles.HeaderLeft}>
                            <Avatar />
                            <p>{card.user}</p>
                        </div>
                        <Popover
                            placement="bottomRight"
                            content={
                            <div className={styles.MoreButtons}>
                                <button className={styles.Button}>Редактировать</button>
                                <button className={styles.Button} onClick={()=>deleteFunc(card.id)}>Удалить</button>
                            </div>}
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
            <CustomInput width={580} placeholder="Добавьте коментарии"/>
        </>
    );
};
