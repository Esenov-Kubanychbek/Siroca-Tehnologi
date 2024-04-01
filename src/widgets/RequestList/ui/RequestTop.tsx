import { FC } from "react";
import { ListTop, ListTopName } from "../../../shared/ui";

export const RequestTop: FC<{ role: string }> = ({ role }) => {
    return (
        <ListTop>
            <ListTopName
                name="Номер заявки"
                width={role === "admin" ? 169 : 180}
            />
            <ListTopName
                name="Компания"
                width={role === "admin" ? 138 : 150}
            />
            <ListTopName
                name="Наименования заявки"
                width={role === "admin" ? 249 : 260}
            />
            <ListTopName
                name="Краткое описания"
                width={role === "admin" ? 230 : 220}
            />
            <ListTopName
                name="Заявитель"
                width={role === "admin" ? 142 : 160}
            />
            <ListTopName
                name="Менеджер"
                width={role === "admin" ? 188 : 200}
            />
            <ListTopName
                name="Дата начала"
                width={role === "admin" ? 164 : 180}
            />
            <ListTopName
                name="Дата оканчания"
                width={role === "admin" ? 194 : 180}
            />
            <ListTopName
                name="Приоритет"
                width={role === "admin" ? 136 : 150}
            />
            <ListTopName
                name="Статус"
                width={role === "admin" ? 114 : 140}
            />
        </ListTop>
    );
};
