import { Collapse, CollapseProps } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { Comments, Date, Description, Details, LinkJira, RequestLogs, People, ShortDescription } from "..";
import { AddSquare, Maximize4 } from "iconsax-react";
import { CheckLists } from "../../../../../features";
import { checkListApi } from "../../../../../features/CheckLists/api/checkListApi";
import { getOneRequestApi } from "../../api/getOneRequestApi";

interface ICollapses {
    setViewLogs: Dispatch<SetStateAction<boolean>>;
}

export const Collapses: FC<ICollapses> = (props) => {
    const { createCheckList } = checkListApi();
    const { oneRequest, setChecklist } = getOneRequestApi();
    const { oneCheckList } = checkListApi();
    const { setViewLogs } = props;
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "Logs",
            children: <RequestLogs />,
            extra: (
                <Maximize4
                    onClick={() => setViewLogs(true)}
                    size={24}
                    style={{ marginTop: "6px", marginRight: "6px" }}
                />
            ),
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
            extra: (
                <AddSquare
                    onClick={(e) => {
                        createCheckList({
                            name: "CheckList",
                            application: oneRequest.id,
                        });
                        e.stopPropagation();
                        setChecklist(oneCheckList);
                    }}
                />
            ),
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
