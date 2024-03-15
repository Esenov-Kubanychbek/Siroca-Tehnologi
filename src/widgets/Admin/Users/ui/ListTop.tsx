import { FC } from "react";
import { ListTopName } from "../../../../shared/ui/ListTop/ListTopName";
import styles from "./ListTop.module.scss";

export const ListTop: FC = () => {
    return (
        <div className={styles.ListTop}>
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
        </div>
    );
};
