import { Collapse, CollapseProps } from "antd";
import { FC } from "react";
import { Comments, Date, Description, Details, LinkJira, RequestLogs, People, ShortDescription } from "..";
import { AddSquare } from "iconsax-react";
import { CheckLists } from "../../../../../features";
import { checkListApi } from "../../../../../features/CheckLists/api/checkListApi";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const Collapses: FC = () => {
    const {createCheckList} = checkListApi()
    const {oneRequest, getOneRequest} = getOneRequestApi()
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "Logs",
            children: <RequestLogs />,
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
            label: "Описание",
            children: <Description />,
        },
        {
            key: "7",
            label: "Краткое описание",
            children: <ShortDescription />,
        },
        {
            key: "8",
            label: "Комментарии",
            children: <Comments />,
        },
        {
            key: "9",
            label: "Чек-листы",
            children: <CheckLists />,
            extra: <AddSquare onClick={(e)=>{createCheckList({
                name: "CheckList",
                application: 1
            })
        e.stopPropagation()
        getOneRequest(oneRequest.id)
        }}/>
        },
    ];
    return (
        <Collapse
            ghost
            defaultActiveKey={[2, 3, 4, 5, 6, 7, 8, 9]}
            items={items}
        />
    );
};
