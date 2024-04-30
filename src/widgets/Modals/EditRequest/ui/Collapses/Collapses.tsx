import { Collapse, CollapseProps } from "antd";
import { FC } from "react";
import { CheckList, Comments, DatesContainer, Description, Details, People, LinkJira, ShortDescription } from "..";

export const Collapses: FC = () => {
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "Детали заявки",
            children: <Details />,
        },
        {
            key: "2",
            label: "Ссылка на Jira",
            children: <LinkJira />,
        },
        {
            key: "3",
            label: "Люди",
            children: <People />,
        },
        {
            key: "4",
            label: "Даты",
            children: <DatesContainer />,
        },
        {
            key: "5",
            label: "Описание",
            children: <Description />,
        },
        {
            key: "6",
            label: "Краткое описание",
            children: <ShortDescription />,
        },
        {
            key: "7",
            label: "Комментарии",
            children: <Comments />,
        },
        {
            key: "8",
            label: "Чек-листы",
            children: <CheckList />,
        },
    ];
    return (
        <Collapse
            ghost
            defaultActiveKey={[1, 2, 3, 4, 5, 6, 7, 8]}
            items={items}
        />
    );
};
