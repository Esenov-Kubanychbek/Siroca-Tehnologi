import { FC, useEffect } from "react";
import styles from "./UserList.module.scss";
import { ListTop } from "./ListTop";
import { UsersMap } from "./UsersMap";
import usersApi from "../api/UsersApi";

export const UsersList: FC = () => {
    const fetchData = usersApi();
    useEffect(() => {
        fetchData.getting();
    }, []);
    return (
        <div className={styles.UsersList}>
            <ListTop />
            <div className={styles.Users}>
                {fetchData.inState.map((card, i) => (
                    <UsersMap
                        key={i}
                        role={card.role_type}
                        name={card.first_name}
                        login={card.username}
                        password={card.password}
                        companies={card.main_company}
                        position={card.job_title}
                    />
                ))}
            </div>
        </div>
    );
};
