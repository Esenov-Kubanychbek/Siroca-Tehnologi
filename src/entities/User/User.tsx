import { FC } from "react";
import styles from "./User.module.scss";
import { ItemInner } from "../../shared/ui";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";
import { IUserTypes } from "./types/types";

export const User: FC<IUserTypes> = (props) => {
    const { user, setModal } = props;
    const fetchData = usersApi();
    return (
        <div
            onClick={() => {
                setModal(true);
                fetchData.getOneUser(user.id);
            }}
            className={styles.User}
        >
            <ItemInner
                content={user.first_name + " " + user.surname}
                width={318}
            />
            <ItemInner
                content={user.username}
                width={350}
            />
            <ItemInner
                content={user.job_title}
                width={350}
            />
            <ItemInner
                content={user.role_type}
                width={350}
            />
            <ItemInner
                content={user.main_company}
                width={350}
            />
        </div>
    );
};
