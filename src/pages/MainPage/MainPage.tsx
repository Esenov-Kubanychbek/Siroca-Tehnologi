import styles from "./MainPage.module.scss";
import { Dashboard, HeaderBottom, HeaderTop } from "../../widgets";
import { FC, useEffect } from "react";
import { idRoles } from "./api/idRoles";
import { usePassword } from "../../widgets/Modals/ChangePassword/api/ChangePassword";
import { SccessfullyModal } from "../../widgets/Modals/SccessfullyModal/SccessfullyModal";
import { profile } from "../../widgets/Modals/ProfileModal/api/profileApi";

export const MainPage: FC = () => {
    const roles = idRoles();
    const role = localStorage.getItem("role_type");
    const id = localStorage.getItem("id");
    const usePasswordScc = usePassword();
    const { getOneUser } = profile();
    useEffect(() => {
        roles.getting();
        id !== null && getOneUser(id);
    }, []);
    useEffect(() => {
        roles.formateState();
    }, [roles.rolesState, roles.genRolesState]);

    const render = () => {
        if (
            (roles.formatedState && roles.formatedState.manager_can_create_and_edit_user_extra) ||
            (roles.formatedState && roles.formatedState.manager_can_create_and_edit_company_extra) ||
            (roles.formatedState && roles.formatedState.manager_can_create_and_delete_job_title_extra) ||
            role === ""
        ) {
            return (
                <>
                    <Dashboard />
                    <header className={styles.Inner}>
                        <HeaderTop
                            role={role}
                            isAdminManager={true}
                        />
                        <HeaderBottom role={role} />
                        {
                            <SccessfullyModal
                                closeModal={usePasswordScc.closeModalScc}
                                modalScc={usePasswordScc.changePasswordScc}
                                texts="Изменения были успешно сохранены"
                                style={50}
                            />
                        }
                    </header>
                </>
            );
        } else {
            return (
                <>
                    <HeaderTop
                        role={role}
                        isAdminManager={false}
                    />
                    <HeaderBottom role={role} />
                    {
                        <SccessfullyModal
                            closeModal={usePasswordScc.closeModalScc}
                            modalScc={usePasswordScc.changePasswordScc}
                            texts="Изменения были успешно сохранены"
                            style={150}
                        />
                    }
                </>
            );
        }
    };
    return <div>{render()}</div>;
};
