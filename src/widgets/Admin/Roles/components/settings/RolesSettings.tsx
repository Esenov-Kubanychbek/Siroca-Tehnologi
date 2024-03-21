import { useEffect, useRef, useState } from "react";
import HeaderSettings from "./Components/header/HeaderSettings";
import RolesRender from "./Components/itemsRender/RolesItemsRender";
import styles from "./RolesSettings.module.scss";
import axios from "axios";
import { ArrowRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const RolesSettings = () => {
    const [users, setUsers] = useState<object>([]);
    const headerSettingsList = [
        "Добавление/удаление комментария к заявке",
        "Добавление/удаление файла к заявке",
        "Просмотр истории изменений по заявке “Logs”",
        "Добавление/удаление чек-листов",
        "Просмотр профиля других пользователей",
        "Скачивание отчета по заявкам",
        "Создание/редактирование заявки",
    ];
    const renderSettingsList = [
        [
            "Добавление/удаление комментария к заявке",
            "Добавление/удаление файла к заявке",
            "Просмотр истории изменений по заявке “Logs”",
            "Добавление/удаление чек-листов",
            "Просмотр профиля других пользователей",
            "Скачивание отчета по заявкам",
            "Создание/редактирование заявки",
        ],
    ];

    const getUsers = async () => {
        try {
            const response = await axios.get("http://16.171.68.251/api/v1/users/profiles/");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);
    const navigate = useNavigate();
    const nvMenu = () => {
        navigate(-1);
    };

    const scrollContainerRef = useRef(null);
    const scrollToBottom = () => {
        if (scrollContainerRef.current) {
            const scrollHeight = scrollContainerRef.current.scrollHeight;
            const clientHeight = scrollContainerRef.current.clientHeight;
            const maxScrollTop = scrollHeight + clientHeight;
            scrollContainerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    };

    useEffect(() => {
        scrollToBottom();
    });

    return (
        <div className={styles.Settings}>
            <div
                className={styles.Container}
                ref={scrollContainerRef}
            >
                <div className={styles.BackCont}>
                    <div
                        onClick={nvMenu}
                        className={styles.Back}
                    >
                        <div className={styles.Icn}>
                            <ArrowRight
                                size={24}
                                color="#1C6AB1"
                            />
                        </div>

                        <p>Назад</p>
                    </div>
                    <p className={styles.Par}>Дополнительные настройки</p>
                </div>
                <HeaderSettings
                    name="Имя пользователя"
                    list={headerSettingsList}
                />
                <RolesRender
                    users={users[0] ? users : []}
                    list={renderSettingsList}
                />
            </div>
        </div>
    );
};

export default RolesSettings;
