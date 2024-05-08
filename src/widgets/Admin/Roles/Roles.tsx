import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL, PATHS } from "../../../shared/variables/variables";
import RolesList from "./components/rolesMenu/RolesList";
import styles from "./Roles.module.scss";

interface PermissionData {
    [key: string]: boolean;
}

interface IRoles {}

export const Roles: React.FC<IRoles> = () => {
    const [boxesClient, setBoxesClient] = useState<PermissionData | undefined>();
    const [boxesManeger, setBoxesManeger] = useState<PermissionData | undefined>();
    const ClientList: string[] = [
        "Добавление/удаление комментария к заявке",
        "Скачивание отчёта",
        "Просмотр истории изменений по заявке “Logs”",
        "Добавление файла к заявке",
        "Добавление чек листа к заявке",
    ];

    const ManegerList: string[] = [
        "Удаление комментариев пользователей",
        "Скачивание отчёта",
        "Удаление заявки",
    ];

    //just get all roles general
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
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        get();
    }, []);

    //there im add al selects to they key
    const getCheckBoxVal = (e: [string, React.ChangeEvent<HTMLInputElement>]) => {
        //just checking is this client or manager
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

    //there im doing put req to save all changed roles
    const onSave = async () => {
        try {
            const responseClient = await axios.put(`${BASE_URL}/users/clientpermissions/general/`, boxesClient, {
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

    //just navigate
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
                <button onClick={() => navigate(PATHS.rolessettings)}>Расширенные настройки</button>
            </div>
            <div className={styles.SettingsSave}>
                <button onClick={onSave}>Сохранить</button>
            </div>
        </div>
    );
};
