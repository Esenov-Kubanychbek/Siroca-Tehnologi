import { FC } from "react";
import styles from "./User.module.scss";
import { ItemInner } from "../../shared/ui";
import { IUser } from "../../shared/types/userTypes";
import { useViewUser } from "../../shared/hooks/modalHooks";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";

export const User: FC<{ user: IUser }> = ({ user }) => {
    const modal = useViewUser();
    const fetchData = usersApi();
    return (
        <div
            onClick={() => {
                modal.open();
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
