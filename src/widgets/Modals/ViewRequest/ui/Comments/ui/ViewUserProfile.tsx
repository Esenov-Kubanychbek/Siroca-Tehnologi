import { FC } from "react";
import styles from "./ViewUserProfile.module.scss";
import { Popover } from "antd";
import { IComment } from "../../../api/postCommentApi";
import { usersApi } from "@/widgets/Admin/Users/api/usersApi";

export const ViewUserProfile: FC<{ comment: IComment }> = ({ comment }) => {
    const { oneUserGet, getOneUser } = usersApi();
    const getUserProfile = (id?: number) => {
        if (oneUserGet.id !== comment.user_id) {
            getOneUser(id);
        }
    };
    return (
        <Popover
            zIndex={2}
            placement="bottomLeft"
            trigger="click"
            content={
                <div className={styles.ViewUserProfile}>
                    <div className={styles.Names}>
                        <p>Аватар:</p>
                        <p>Имя пользователя:</p>
                        <p>Компания:</p>
                        <p>Должность:</p>
                        <p>Тип роли:</p>
                        <p>Логин:</p>
                    </div>
                    <div className={styles.Data}>
                        <img
                            src={oneUserGet.image}
                            alt="image"
                        />
                        <p>
                            {oneUserGet.first_name} {oneUserGet.surname}
                        </p>
                        <p>{oneUserGet.main_company}</p>
                        <p>{oneUserGet.job_title}</p>
                        <p>{oneUserGet.role_type}</p>
                        <p>{oneUserGet.username}</p>
                    </div>
                </div>
            }
        >
            <div
                className={styles.HeaderLeft}
                onClick={() => getUserProfile(comment.user_id)}
            >
                <img src={comment.user_image} />
                <p>{comment.user}</p>
                <p className={styles.Date}>{comment.formatted_date_added}</p>
            </div>
        </Popover>
    );
};
