import { FC } from "react";
import styles from "./Users.module.scss";
import { SearchInput } from './../../../features/Header/SearchInput/SearchInput';
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { UsersList } from "./ui/UsersList";


export const Users:FC = () => {
    return (
        <div className={styles.UsersComponent}>
            <div className={styles.UsersSearch}>
            <div>Поиск по пользователям</div>
                <div className={styles.Search}>
                    <SearchInput/>
                    <ButtonCreate name="Создать пользователя"/>
                </div>
            </div>
            <div className={styles.UserList}>
                <UsersList/>
            </div>
        </div>
    );
};
