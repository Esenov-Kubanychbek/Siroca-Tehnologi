import React from "react";
import RolesList from "./RolesList";
import styles from "./RolesMenu.module.scss";

interface IRolesMenu {
    openSettings: () => void;
}

const RolesMenu: React.FC<IRolesMenu> = ({ openSettings }) => {
    const ClientList = [
        "Добавление/удаление комментария к заявке",
        "Добавление чек листа к заявке",
        "Добавление файла к заявке",
        "Просмотр профиль другого пользователя",
    ];
    const ManegerList = [
        "Просмотр профиля других пользователей",
        "Удаление заявки",
        "Удаление комментариев пользователей",
    ];
    return (
        <div className={styles.MenuCont}>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Клиент"
                    list={ClientList}
                />
            </div>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Менеджер"
                    list={ManegerList}
                />
            </div>
            <div className={styles.SettingsBtn}>
                <button onClick={openSettings}>Дополнительные настройки</button>
            </div>
        </div>
    );
};

export default RolesMenu;
