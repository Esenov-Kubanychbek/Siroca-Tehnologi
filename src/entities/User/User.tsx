import { FC } from "react";
import styles from "./User.module.scss";
import { ItemInner } from "../../shared/ui";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";
import { IUserTypes } from "./types/types";
import { idRoles } from "../../pages/MainPage/api/idRoles";

export const User: FC<IUserTypes> = (props) => {
    const { user, setModal } = props;
    const fetchData = usersApi();
    const roles = idRoles();
    const fmRoles = roles.formatedState;
    const role_type = localStorage.getItem("role_type");
    return (
        <div
            onClick={
                (fmRoles && fmRoles.manager_can_view_profiles_extra && role_type === "manager") || role_type === ""
                    ? () => {
                          setModal(true);
                          fetchData.getOneUser(user.id);
                      }
                    : () => console.log("no roles")
            }
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
