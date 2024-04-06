import React, { useEffect, useState } from "react";
import RolesList from "./RolesList";
import styles from "./RolesMenu.module.scss";
import axios from "axios";
import { BASE_URL } from "../../../../../shared/variables/variables";

interface IRolesMenu {
    openSettings: () => void;
}
const RolesMenu: React.FC<IRolesMenu> = ({ openSettings }) => {
    const [boxesClient, setBoxesClient] = useState();
    const [boxesManeger, setBoxesManeger] = useState();

    const get = async () => {
        try {
            const responseClients = await axios.get(`${BASE_URL}/users/clientpermissions/general`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            const responseManeger = await axios.get(`${BASE_URL}/users/managerpermissions/general/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            setBoxesClient(responseClients.data);
            setBoxesManeger(responseManeger.data);
            console.log(responseClients.data);
            console.log(responseManeger.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        get();
    }, []);
    const ClientList = [
        "Добавление чек листа к заявке",
        "Добавление файла к заявке",
        "Добавление/удаление комментария к заявке",
        "Скачивание отчёта",
        "Просмотр изменений истории по заявке 'Logs'",
        "Просмотр профиль другого пользователя",
    ];
    const ManegerList = [
        "Удаление комментариев пользователей",
        "Скачивание отчёта",
        "Просмотр профиля других пользователей",
        "Удаление заявки",
    ];

    const getCheckBoxVal = (e) => {
        if (e[0] === "Клиент") {
            const arr = Object.entries(boxesClient).map((el) => {
                if (el[0] === e[1].target.name) {
                    return [el[0], !el[1]];
                } else {
                    return el;
                }
            });

            setBoxesClient(Object.fromEntries(arr));
        } else if (e[0] === "Менеджер") {
            const arr = Object.entries(boxesManeger).map((el) => {
                if (el[0] === e[1].target.name) {
                    return [el[0], !el[1]];
                } else {
                    return el;
                }
            });
            setBoxesManeger(Object.fromEntries(arr));
        }
    };
    console.log(boxesClient, boxesManeger);

    const onSave = async () => {
        try {
            const responseClient = await axios.put(`${BASE_URL}/users/clientpermissions/general`, boxesClient, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            const responseManeger = await axios.put(`${BASE_URL}/users/managerpermissions/general/`, boxesManeger, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });

            console.log(responseClient, responseManeger);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.MenuCont}>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Клиент"
                    list={ClientList}
                    box={boxesClient}
                    handleChangeBox={getCheckBoxVal}
                />
            </div>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Менеджер"
                    list={ManegerList}
                    box={boxesManeger}
                    handleChangeBox={getCheckBoxVal}
                />
            </div>
            <div className={styles.SettingsBtn}>
                <button onClick={openSettings}>Дополнительные настройки</button>
            </div>
            <div className={styles.SettingsSave}>
                <button onClick={onSave}>Сохарнить</button>
            </div>
        </div>
    );
};

export default RolesMenu;
