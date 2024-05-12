import { ChangeEvent, FC, useEffect, useState } from "react";
import { CustomTextArea } from "../../../../../shared/ui";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";
import styles from "./AddComment.module.scss";
import { Send2 } from "iconsax-react";
import { postCommentApi } from "../../api/postCommentApi";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const AddComment: FC = () => {
    const roles = idRoles();
    const role_type = localStorage.getItem("role_type");
    const [commentState, setCommentState] = useState<string>("");
    const { oneRequest, setComment } = getOneRequestApi();
    const { oneComment, postComment } = postCommentApi();
    const changeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentState(e.target.value);
    };
    const postTrim = () => {
        if (commentState !== "") {
            postComment({
                application: oneRequest.id,
                text: commentState,
            });
            setCommentState("");
        } else {
            console.log("trimCommentError");
        }
    };
    useEffect(() => {
        if (oneComment.application !== 0) {
            setComment(oneComment);
        }
    }, [oneComment]);
    const render = () => {
        if (roles.formatedState && role_type === "client" && roles.formatedState.client_can_edit_comments_extra) {
            return (
                <div className={styles.AddComment}>
                    <CustomTextArea
                        name="text"
                        value={commentState}
                        placeholder="Добавьте коментарий..."
                        height={56}
                        width={580}
                        variant="TextArea"
                        change={changeComment}
                    />
                    <Send2
                        color={commentState === "" ? "#5c5c5c" : "#1c6ab1"}
                        cursor={"pointer"}
                        size={24}
                        onClick={postTrim}
                    />
                </div>
            );
        } else if (role_type === "manager" || role_type === "") {
            return (
                <div className={styles.AddComment}>
                    <CustomTextArea
                        name="text"
                        value={commentState}
                        placeholder="Добавьте коментарий..."
                        height={56}
                        width={580}
                        variant="TextArea"
                        change={changeComment}
                    />
                    <Send2
                        color={commentState === "" ? "#5c5c5c" : "#1c6ab1"}
                        cursor={"pointer"}
                        size={24}
                        onClick={postTrim}
                    />
                </div>
            );
        } else {
            return null;
        }
    };

    return <>{render()}</>;
};
