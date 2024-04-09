import React, { useEffect, useState } from "react";
import RolesList from "./RolesList";
import styles from "./RolesMenu.module.scss";
import axios from "axios";
import { BASE_URL, PATHS } from "../../../../../shared/variables/variables";
import { useNavigate } from "react-router-dom";

interface PermissionData {
    [key: string]: boolean;
}

interface IRolesMenu {}

const RolesMenu: React.FC<IRolesMenu> = () => {
    const [boxesClient, setBoxesClient] = useState<PermissionData | undefined>();
    const [boxesManeger, setBoxesManeger] = useState<PermissionData | undefined>();

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

    const ClientList: string[] = [
        "Добавление чек листа к заявке",
        "Добавление файла к заявке",
        "Добавление/удаление комментария к заявке",
        "Скачивание отчёта",
        "Просмотр изменений истории по заявке 'Logs'",
        "Просмотр профиль другого пользователя",
    ];

    const ManegerList: string[] = [
        "Удаление комментариев пользователей",
        "Скачивание отчёта",
        "Просмотр профиля других пользователей",
        "Удаление заявки",
    ];

    const getCheckBoxVal = (e: [string, React.ChangeEvent<HTMLInputElement>]) => {
        if (e[0] === "Клиент") {
            const arr = Object.entries(boxesClient || {}).map((el) => {
                if (el[0] === e[1].target.name) {
                    return [el[0], !el[1]];
                } else {
                    return el;
                }
            });
            setBoxesClient(Object.fromEntries(arr));
        } else if (e[0] === "Менеджер") {
            const arr = Object.entries(boxesManeger || {}).map((el) => {
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

    const navigate = useNavigate();

    return (
        <div className={styles.MenuCont}>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Клиент"
                    list={ClientList}
                    box={boxesClient || null}
                    handleChangeBox={getCheckBoxVal}
                />
            </div>
            <div className={styles.ListBlock}>
                <RolesList
                    listType="Менеджер"
                    list={ManegerList}
                    box={boxesManeger || null}
                    handleChangeBox={getCheckBoxVal}
                />
            </div>
            <div className={styles.SettingsBtn}>
                <button onClick={() => navigate(PATHS.rolessettings)}>Дополнительные настройки</button>
            </div>
            <div className={styles.SettingsSave}>
                <button onClick={onSave}>Сохранить</button>
            </div>
        </div>
    );
};

export default RolesMenu;
