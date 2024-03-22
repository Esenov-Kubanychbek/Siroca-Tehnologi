import { FC } from "react";
import { RequestInner } from "../../../../entities";
import styles from "./UsersMap.module.scss";
import { useViewUser } from "../../../../shared/hooks";
import { IUserId } from "../../../../shared/types/userTypes";
import { usersApi } from "../../../../shared/api";

export const UsersMap: FC<IUserId> = (props) => {
    const { id, first_name, username, password, job_title, role_type, main_company } = props;
    const modal = useViewUser();
    const fetchData = usersApi();
    return (
        <div
            onClick={() => {
                modal.open();
                fetchData.getOneUser(id);
            }}
            className={styles.UsersMap}
        >
            <RequestInner
                content={first_name}
                width={250}
            />
            <RequestInner
                content={username}
                width={250}
            />
            <RequestInner
                content={password}
                width={250}
            />
            <RequestInner
                content={job_title}
                width={340}
            />
            <RequestInner
                content={role_type}
                width={314}
            />
            <RequestInner
                content={main_company}
                width={314}
            />
        </div>
    );
};
