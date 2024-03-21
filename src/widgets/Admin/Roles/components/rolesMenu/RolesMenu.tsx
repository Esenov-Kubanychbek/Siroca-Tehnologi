import React, { useState } from "react";
import RolesList from "./RolesList";
import styles from "./RolesMenu.module.scss";

interface IRolesMenu {
    openSettings: () => void;
}

const RolesMenu: React.FC<IRolesMenu> = ({ openSettings }) => {
    const [num, setNum] = useState();

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

    const Boxes = {
        Клиент: {
            "Добавление/удаление комментария к заявке": false,
            "Добавление чек листа к заявке": false,
            "Добавление файла к заявке": false,
            "Просмотр профиль другого пользователя": false,
        },
        Менеджер: {
            "Просмотр профиля других пользователей": false,
            "Удаление заявки": false,
            "Удаление комментариев пользователей": false,
        },
    };
    const getCheckBoxVal = (ev) => {
        const type = Boxes[ev[0]];
        type[ev[1].target.name] = !type[ev[1].target.name];
        console.log(type);
    };

    return (
        <div className={styles.MenuCont}>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Клиент"
                    list={ClientList}
                    handleChangeBox={getCheckBoxVal}
                />
            </div>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Менеджер"
                    list={ManegerList}
                    handleChangeBox={getCheckBoxVal}
                />
            </div>
            <div className={styles.SettingsBtn}>
                <button onClick={openSettings}>Дополнительные настройки</button>
            </div>
        </div>
    );
};

export default RolesMenu;
