import { FC } from "react";
import styles from "./User.module.scss";
import { ItemInner } from "../../shared/ui";
import { IUser } from "../../shared/types/userTypes";
import { useViewUser } from "../../shared/hooks/modalHooks";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";

export const User: FC<IUser> = (props) => {
    const { id, first_name, surname, username, password, job_title, role_type, main_company } = props;
    const modal = useViewUser();
    const fetchData = usersApi();
    return (
        <div
            onClick={() => {
                modal.open();
                fetchData.getOneUser(id);
            }}
            className={styles.User}
        >
            <ItemInner
                content={first_name + " " + surname}
                width={250}
            />
            <ItemInner
                content={username}
                width={250}
            />
            <ItemInner
                content={password}
                width={250}
            />
            <ItemInner
                content={job_title}
                width={340}
            />
            <ItemInner
                content={role_type}
                width={314}
            />
            <ItemInner
                content={main_company}
                width={314}
            />
        </div>
    );
};
