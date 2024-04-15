import { FC } from "react";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import { Companies, JobTitles, Roles, Users } from "./../../widgets";

export const AdminNavigate: FC = () => {
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
                items={items}
                tabBarStyle={{
                    fontWeight: 700,
                    marginLeft: "34px",
                }}
            />
        </ConfigProvider>
    );
};
