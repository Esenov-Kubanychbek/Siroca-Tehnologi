import { FC } from "react";
import styles from "./User.module.scss";
import { ItemInner } from "../../shared/ui";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";
import { IUserTypes } from "./types/types";
import { idRoles } from "../../pages/MainPage/api/idRoles";

export const User: FC<IUserTypes> = (props) => {
    const { user, setView, view } = props;
    const fetchData = usersApi();
    const roles = idRoles();
    const fmRoles = roles.formatedState;
    const role_type = localStorage.getItem("role_type");
    return (
        <div
            onClick={
                (fmRoles && fmRoles.manager_can_view_profiles_extra && role_type === "manager") || role_type === ""
                    ? () => {
                          setView(true);
                          fetchData.getOneUser(user.id);
                      }
                    : () => console.log("no roles")
            }
            className={styles.User}
            style={{ width: view ? "1221px" : "1718px" }}
        >
            <ItemInner
                content={user.first_name + " " + user.surname}
                width={view ? 244 : 318}
            />
            <ItemInner
                content={user.username}
                width={view ? 244 : 350}
            />
            <ItemInner
                content={user.job_title}
                width={view ? 244 : 350}
            />
            <ItemInner
                content={user.role_type === "manager" ? "Менеджер" : user.role_type === "client" ? "Клиент" : "Админ"}
                width={view ? 244 : 350}
            />
            <ItemInner
                content={user.main_company}
                width={view ? 244 : 350}
            />
        </div>
    );
};
