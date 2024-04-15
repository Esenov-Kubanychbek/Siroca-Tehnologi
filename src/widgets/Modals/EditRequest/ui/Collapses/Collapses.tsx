import { Collapse, CollapseProps } from "antd";
import { ChangeEvent, FC } from "react";
import { BriefDescription, CheckList, Comments, DatesContainer, Description, Details, Humans, LinkJira } from "..";
import { ICreateRequest } from "../../../CreateRequest/api/createRequestApi";

interface ICollapses {
    request: ICreateRequest;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const Collapses: FC<ICollapses> = ({ onChange, request }) => {
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "Детали заявки",
            children: (
                <Details
                    onChange={onChange}
                    title={request.title}
                    company={request.company}
                />
            ),
        },
        {
            key: "2",
            label: "Ссылка на Jira",
            children: <LinkJira onChange={onChange} />,
        },
        {
            key: "3",
            label: "Люди",
            children: <Humans onChange={onChange} />,
        },
        {
            key: "4",
            label: "Даты",
            children: <DatesContainer onChange={onChange} />,
        },{
            key: "5",
            label:"Комментарии",
            children: <Comments onChange={onChange} />,
        },
        {
            key: "6",
            label: "Описание",
            children: <Description onChange={onChange} />,
        },
        {
            key: "7",
            label: "Краткое описание",
            children: <BriefDescription onChange={onChange} />,
        },
        {
            key: "8",
            label: "Чек-листы",
            children: <CheckList />,
        },
    ];
    return (
        <Collapse
            defaultActiveKey={[1, 2, 3, 4, 5, 6, 7, 8]}
            items={items}
        />
    );
};
