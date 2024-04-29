import { FC, useState } from "react";
import styles from "./UserList.module.scss";
import { usersApi } from "../../api/usersApi";
import { User } from "../../../../../entities";
import { ViewUser } from "../../../..";
import { UsersBottom, UsersTop } from "..";

export const UsersList: FC = () => {
    const [view, setView] = useState<boolean>(false);
    const { usersList } = usersApi();
    return (
        <div className={styles.UsersList}>
            <div className={styles.Main}>
                <UsersTop view={view} />
                <div
                    className={styles.Users}
                    style={{ overflowY: usersList.length > 9 ? "scroll" : "hidden", width: view ? "1245px" : "1760px" }}
                >
                    {usersList.length > 0 ? (
                        usersList.map((card, i) => (
                            <User
                                view={view}
                                setView={setView}
                                key={i}
                                user={card}
                            />
                        ))
                    ) : (
                        <div className={styles.Nothing}>По вашему запросу ничего не найдено!</div>
                    )}
                </div>
                <UsersBottom view={view} />
            </div>
            <ViewUser
                view={view}
                setView={setView}
            />
        </div>
    );
};
