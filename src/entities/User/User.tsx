import { FC } from "react";
import styles from "./User.module.scss";
import { ItemInner } from "../../shared/ui";
import { IUserTypes } from "./types/types";
import { idRoles } from "../../pages/MainPage/api/idRoles";
import { oneUserApi } from "@/shared/api";

export const User: FC<IUserTypes> = (props) => {
    const { user, setView, view } = props;
    const roles = idRoles();
    const { getOneUser } = oneUserApi();
    const fmRoles = roles.formatedState;
    const role_type = localStorage.getItem("role_type");
    return (
        <div
            onClick={
                (fmRoles && fmRoles.manager_can_view_profiles_extra && role_type === "manager") || role_type === ""
                    ? () => {
                          setView(true);
                          getOneUser(user.id);
                      }
                    : () => console.log("no roles")
            }
            className={styles.User}
            style={{ width: view ? "1221px" : "1718px" }}
        >
            <ItemInner
                content={user.full_name}
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
