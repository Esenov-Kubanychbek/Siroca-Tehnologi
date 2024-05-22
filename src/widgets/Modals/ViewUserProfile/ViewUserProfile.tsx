import { FC, useEffect } from "react";
import styles from "./ViewUserProfile.module.scss";
import { Popover } from "antd";
import { usersApi } from "@/widgets/Admin/Users/api/usersApi";
import { IViewUserProfile } from "./types/ViewUserProfileTypes";

export const ViewUserProfile: FC<IViewUserProfile> = (props) => {
    const { children, userId } = props;
    const { oneUserGet, getOneUser } = usersApi();
    useEffect(() => {
        if (oneUserGet.id !== userId) {
            getOneUser(userId);
        }
    }, []);
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
                        <div>
                            <img
                                src={String(oneUserGet.image)}
                                alt="image"
                            />
                        </div>
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
            {children}
        </Popover>
    );
};
