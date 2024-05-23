import { FC } from "react";
import { ListTop, ListTopName } from "../../../shared/ui";

interface IRequestTop {
    role: string | null;
    view: boolean;
}

export const RequestTop: FC<IRequestTop> = (props) => {
    const { role, view } = props;
    return (
        <ListTop width={role === "" ? (view ? 1012 : 1724) : 1820}>
            <ListTopName
                name={view ? "Номе..." : "Номер заявки"}
                width={role === "" ? (view ? 98.28 : 169) : 180}
            />
            <ListTopName
                name={view ? "Комп..." : "Компания"}
                width={role === "" ? (view ? 98.28 : 138) : 150}
            />
            <ListTopName
                name={view ? "Назв..." : "Название заявки"}
                width={role === "" ? (view ? 98.28 : 249) : 260}
            />
            <ListTopName
                name={view ? "Краткое..." : "Краткое описание"}
                width={role === "" ? (view ? 127.5 : 230) : 220}
            />
            <ListTopName
                name={view ? "Заяв..." : "Заявитель"}
                width={role === "" ? (view ? 98.28 : 142) : 160}
            />
            <ListTopName
                name={view ? "Мене..." : "Менеджер"}
                width={role === "" ? (view ? 98.28 : 188) : 200}
            />
            <ListTopName
                name={view ? "Дата..." : "Дата начала"}
                width={role === "" ? (view ? 98.28 : 164) : 180}
            />
            <ListTopName
                name={view ? "Дата..." : "Дата завершение"}
                width={role === "" ? (view ? 98.28 : 194) : 180}
            />
            <ListTopName
                name={view ? "Прио..." : "Приоритет"}
                width={role === "" ? (view ? 98.28 : 136) : 150}
            />
            <ListTopName
                name="Статус"
                width={role === "" ? (view ? 98.28 : 114) : 140}
            />
        </ListTop>
    );
};
