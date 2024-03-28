import { FC } from "react";
import { ListTopName } from "../../../../shared/ui/ListTop/ListTopName";
import { ListTop } from "../../../../shared/ui";

export const UsersTop: FC = () => {
    return (
        <ListTop>
            <ListTopName
                name="Ф.И пользователя"
                width={250}
            />
            <ListTopName
                name="Логин"
                width={250}
            />
            <ListTopName
                name="Пароль"
                width={250}
            />
            <ListTopName
                name="Должность в компании"
                width={340}
            />
            <ListTopName
                name="Тип роли пользователя"
                width={314}
            />
            <ListTopName
                name="Название компании"
                width={314}
            />
        </ListTop>
    );
};
