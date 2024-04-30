import { Dashboard, HeaderBottom, HeaderTop } from "../../widgets";
import { FC, useEffect } from "react";
import { idRoles } from "./api/idRoles";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";

export const MainPage: FC = () => {
    const roles = idRoles();
    const fetchUsers = usersApi();
    const role = localStorage.getItem("role_type");
    const id = localStorage.getItem("id");
    useEffect(() => {
        roles.getting();
    }, []);
    useEffect(() => {
        roles.formateState();
    }, [roles.rolesState, roles.genRolesState]);
    useEffect(() => {
        fetchUsers.getOneUser(Number(id));
    }, []);

    const render = () => {
        if (
            (roles.formatedState && roles.formatedState.manager_can_create_and_edit_user_extra) ||
            (roles.formatedState && roles.formatedState.manager_can_create_and_edit_company_extra) ||
            (roles.formatedState && roles.formatedState.manager_can_create_and_delete_job_title_extra)
        ) {
            return (
                <>
                    <Dashboard />
                    <header style={{ width: "1820px", marginLeft: "120px" }}>
                        <HeaderTop role={role} />
                        <HeaderBottom role={role} />
                    </header>
                </>
            );
        } else {
            return (
                <>
                    <HeaderTop role={role} />
                    <HeaderBottom role={role} />
                </>
            );
        }
    };
    return <div>{render()}</div>;
};
