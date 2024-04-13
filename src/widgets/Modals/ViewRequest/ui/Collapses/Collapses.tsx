import { Collapse, CollapseProps } from "antd";
import { FC } from "react";
import { CheckList, Comments, Date, Description, Details, LinkJira, Logs, People, ShortDescription } from "..";

export const Collapses: FC = () => {
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "Logs",
            children: <Logs />,
        },
        {
            key: "2",
            label: "Детали заявки",
            children: <Details />,
        },
        {
            key: "3",
            label: "Ссылка на Jira",
            children: <LinkJira />,
        },
        {
            key: "4",
            label: "Люди",
            children: <People />,
        },
        {
            key: "5",
            label: "Даты",
            children: <Date />,
        },
        {
            key: "6",
            label: "Комментарии",
            children: <Comments />,
        },
        {
            key: "7",
            label: "Описание",
            children: <Description />,
        },
        {
            key: "8",
            label: "Краткое описание",
            children: <ShortDescription />,
        },
        {
            key: "9",
            label: "Чек-листы",
            children: <CheckList />,
        },
    ];
    return (
        <Collapse
            defaultActiveKey={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            items={items}
        />
    );
};
