import { FC, useEffect } from "react";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import { Companies, JobTitles, Roles, Users } from "./../../widgets";
import { idRoles } from "../../pages/MainPage/api/idRoles";

export const AdminNavigate: FC = () => {
    const role_type = localStorage.getItem("role_type");
    const roles = idRoles();
    useEffect(() => {
        roles.getting();
    }, []);
    useEffect(() => {
        roles.formateState();
    }, [roles.rolesState]);

    const formated = roles.formatedState;
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Компании",
            children: <Companies />,
        },
        {
            key: "2",
            label: "Пользователи",
            children: <Users />,
        },
        {
            key: "3",
            label: "Должности",
            children: <JobTitles />,
        },
        {
            key: "4",
            label: "Тип роли",
            children: <Roles />,
        },
    ];

    const itemsManager: TabsProps["items"] = [
        {
            key: "1",
            label: formated && formated.manager_can_create_and_edit_company_extra ? "Компании" : "",
            children:
                formated && formated.manager_can_create_and_edit_company_extra ? (
                    <Companies />
                ) : (
                    <p>У вас нет таких прав</p>
                ),
        },
        {
            key: "2",
            label: formated && formated.manager_can_create_and_edit_user_extra ? "Пользователи" : "",
            children:
                formated && formated.manager_can_create_and_edit_user_extra ? <Users /> : <p>У вас нет таких прав</p>,
        },
        {
            key: "3",
            label: formated && formated.manager_can_create_and_delete_job_title_extra ? "Должности" : "",
            children:
                formated && formated.manager_can_create_and_delete_job_title_extra ? (
                    <JobTitles />
                ) : (
                    <p>У вас нет таких прав</p>
                ),
        },
    ];
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemColor: "#252525",
                        itemHoverColor: "#1C6AD2",
                        itemSelectedColor: "#1C6AB1",
                        fontFamily: "Geologica",
                        fontSize: 24,
                    },
                },
            }}
        >
            <Tabs
                defaultActiveKey="1"
                items={role_type === "" ? items : itemsManager}
                tabBarStyle={{
                    fontWeight: 700,
                    marginLeft: "34px",
                }}
            />
        </ConfigProvider>
    );
};
