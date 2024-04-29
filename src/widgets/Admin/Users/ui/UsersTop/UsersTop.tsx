import { FC } from "react";
import { ListTopName } from "../../../../../shared/ui/ListTop/ListTopName";
import { ListTop } from "../../../../../shared/ui";

export const UsersTop: FC<{view: boolean}> = ({view}) => {
    return (
        <ListTop width={view ? 1221 : 1718}>
            <ListTopName
                name="Ф.И пользователя"
                width={view ? 244 : 318}
            />
            <ListTopName
                name="Логин"
                width={view ? 244 : 350}
            />
            <ListTopName
                name="Должность в компании"
                width={view ? 244 : 350}
            />
            <ListTopName
                name="Тип роли пользователя"
                width={view ? 244 : 350}
            />
            <ListTopName
                name="Название компании"
                width={view ? 244 : 350}
            />
        </ListTop>
    );
};
