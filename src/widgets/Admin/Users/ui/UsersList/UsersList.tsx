import { FC, useEffect, useState } from "react";
import styles from "./UserList.module.scss";
import { usersApi } from "../../api/usersApi";
import { User } from "../../../../../entities";
import { ViewUser } from "../../../..";
import { UsersTop } from "..";
import { Pagination } from "../../../../../shared/ui/Pagination/Pagination";

export const UsersList: FC = () => {
    const [view, setView] = useState<boolean>(false);
    const { usersList, getUsersList } = usersApi();
    const [page, setPage] = useState<number>(1)
    useEffect(()=>{
        getUsersList(page)
    },[page])
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
                <Pagination page={page} setPage={setPage} count={20}/>
            </div>
            <ViewUser
                view={view}
                setView={setView}
            />
        </div>
    );
};