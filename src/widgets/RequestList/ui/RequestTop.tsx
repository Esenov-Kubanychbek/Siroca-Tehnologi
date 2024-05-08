import { FC } from "react";
import { ListTop, ListTopName } from "../../../shared/ui";

interface IRequestTop {
    role: string | null
    view: boolean
}

export const RequestTop: FC<IRequestTop> = (props) => {
    const {role, view} = props
    return (
        <ListTop width={role === "admin" ? view ? 1012 : 1724 : 1820}>
            <ListTopName
                name={view ? "Номе..." : "Номер заявки"}
                width={role === "admin" ? view ? 98.28 : 169 : 180}
            />
            <ListTopName
                name={view ? "Комп..." : "Компания"}
                width={role === "admin" ? view ? 98.28 : 138 : 150}
            />
            <ListTopName
                name={view ? "Назв..." : "Название заявки"}
                width={role === "admin" ? view ? 98.28 : 249 : 260}
            />
            <ListTopName
                name={view ? "Краткое..." : "Краткое описание"}
                width={role === "admin" ? view ? 127.5 : 230 : 220}
            />
            <ListTopName
                name={view ? "Заяв..." : "Заявитель"}
                width={role === "admin" ? view ? 98.28 : 142 : 160}
            />
            <ListTopName
                name={view ? "Мене..." : "Менеджер"}
                width={role === "admin" ? view ? 98.28 : 188 : 200}
            />
            <ListTopName
                name={view ? "Дата..." : "Дата начала"}
                width={role === "admin" ? view ? 98.28 : 164 : 180}
            />
            <ListTopName
                name={view ? "Дата..." : "Дата завершение"}
                width={role === "admin" ? view ? 98.28 : 194 : 180}
            />
            <ListTopName
                name={view ? "Прио..." : "Приоритет"}
                width={role === "admin" ? view ? 98.28 : 136 : 150}
            />
            <ListTopName
                name="Статус"
                width={role === "admin" ? view ? 98.28 : 114 : 140}
            />
        </ListTop>
    );
};
