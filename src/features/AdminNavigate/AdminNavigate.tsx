import { FC } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Companies, Positions, Roles, Users } from "./../../widgets";
import styles from "./AdminNavigate.module.scss";

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
            children: <Positions />,
        },
        {
            key: "4",
            label: "Тип роли",
            children: <Roles />,
        },
    ];
    return (
        <Tabs
            className={styles.Tabs}
            defaultActiveKey="1"
            items={items}
        />
    );
};
