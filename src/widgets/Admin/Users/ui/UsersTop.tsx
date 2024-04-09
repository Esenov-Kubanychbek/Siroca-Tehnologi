import { FC } from "react";
import { ListTopName } from "../../../../shared/ui/ListTop/ListTopName";
import { ListTop } from "../../../../shared/ui";

export const UsersTop: FC = () => {
    return (
        <ListTop>
            <ListTopName
                name="Ф.И пользователя"
                width={318}
            />
            <ListTopName
                name="Логин"
                width={350}
            />
            <ListTopName
                name="Должность в компании"
                width={350}
            />
            <ListTopName
                name="Тип роли пользователя"
                width={350}
            />
            <ListTopName
                name="Название компании"
                width={350}
            />
        </ListTop>
    );
};
