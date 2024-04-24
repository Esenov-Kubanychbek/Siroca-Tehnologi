import { ChangeEvent, FC, useState } from "react";
import { CustomTextArea } from "../../../../../shared/ui";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";
import styles from "./AddComment.module.scss";
import { Send2 } from "iconsax-react";
import { postCommentApi } from "../../api/postCommentApi";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const AddComment: FC = () => {
    const roles = idRoles();
    const role_type = localStorage.getItem("role_type");
    const [comment, setComment] = useState<string>("");
    const fetchRequest = getOneRequestApi();
    const fetchComment = postCommentApi();
    const changeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };
    const postComment = () => {
        if (comment !== "") {
            fetchComment.postComment({
                application: fetchRequest.oneRequest.id,
                text: comment,
            });
            setComment("");
            fetchRequest.getOneRequest(fetchRequest.oneRequest.id);
        } else {
            console.log("trimCommentError");
        }
    };

    const render = () => {
        if (roles.formatedState && role_type === "client" && roles.formatedState.client_can_edit_comments_extra) {
            return (
                <div className={styles.AddComment}>
                    <CustomTextArea
                        name="text"
                        value={comment}
                        placeholder="Добавьте коментарий..."
                        height={44}
                        width={580}
                        variant="TextArea"
                        change={changeComment}
                    />
                    <Send2
                        color="#1c6ab1"
                        cursor={"pointer"}
                        size={32}
                        onClick={postComment}
                    />
                </div>
            );
        } else if (role_type === "manager" || role_type === "") {
            return (
                <div className={styles.AddComment}>
                    <CustomTextArea
                        name="text"
                        value={comment}
                        placeholder="Добавьте коментарий..."
                        height={44}
                        width={580}
                        variant="TextArea"
                        change={changeComment}
                    />
                    <Send2
                        color="#1c6ab1"
                        cursor={"pointer"}
                        size={32}
                        onClick={postComment}
                    />
                </div>
            );
        } else {
            return (
                <p style={{ fontSize: "20px", color: "red" }}>У вас нет таких прав, обратитесь к администратору! </p>
            );
        }
    };

    return <>{render()}</>;
};
