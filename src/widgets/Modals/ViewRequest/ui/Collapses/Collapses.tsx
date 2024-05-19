import { Collapse, CollapseProps } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { Comments, Date, Description, Details, LinkJira, RequestLogs, People, ShortDescription } from "..";
import { AddSquare, Maximize4 } from "iconsax-react";
import { CheckLists } from "../../../../../features";

interface ICollapses {
    setViewLogs: Dispatch<SetStateAction<boolean>>;
    setChecklistModal: Dispatch<SetStateAction<boolean>>;
}

export const Collapses: FC<ICollapses> = (props) => {
    const { setViewLogs, setChecklistModal } = props;
    const openChecklistModal = (e: { stopPropagation: () => void }) => {
        setChecklistModal(true);
        e.stopPropagation();
    };
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
            id: "Details",
            label: "Детали заявки",
            children: <Details />,
        },
        {
            key: "3",
            id: "JiraLink",
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
            id: "Description",
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
            id: "Comments",
            label: "Комментарии",
            children: <Comments />,
        },
        {
            key: "9",
            id: "Checklists",
            label: "Чек-листы",
            children: <CheckLists />,
            extra: <AddSquare onClick={(e) => openChecklistModal(e)} />,
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
