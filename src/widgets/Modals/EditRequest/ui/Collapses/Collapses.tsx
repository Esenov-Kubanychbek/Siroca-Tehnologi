import { Collapse, CollapseProps } from "antd";
import { FC } from "react";
import { Comments, DatesContainer, Description, Details, People, LinkJira, ShortDescription } from "..";
import { AddSquare } from "iconsax-react";
import { CheckLists } from "../../../../../features";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";

export const Collapses: FC = () => {
    const roles = idRoles();
    const role_type = localStorage.getItem("role_type");
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
        ...(roles.formatedState?.client_can_edit_comments_extra || role_type === "manager" || role_type === ""
            ? [
                  {
                      key: "8",
                      label: "Комментарии",
                      children: <Comments />,
                  },
              ]
            : []),
            ...(roles.formatedState?.client_can_add_checklist_extra || role_type === "manager" || role_type === ""
            ? [
                {
                    key: "8",
                    label: "Чек-листы",
                    children: <CheckLists />,
                    extra: <AddSquare />,
                },
              ]
            : [])
    ];
    return (
        <Collapse
            ghost
            defaultActiveKey={[1, 2, 3, 4, 5, 6, 7, 8]}
            items={items}
        />
    );
};
