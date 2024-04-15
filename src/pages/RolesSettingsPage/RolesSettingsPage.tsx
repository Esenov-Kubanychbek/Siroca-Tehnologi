import { FC, useEffect, useRef, useState } from "react";
import HeaderSettings from "./ui/header/HeaderSettings";
import RolesRender from "./ui/itemsRender/RolesItemsRender";
import styles from "./RolesSettingsPage.module.scss";
import axios from "axios";
import { ArrowRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";
import { BASE_URL } from "../../shared/variables/variables";
import { SearchInput } from "../../features";
import { IUser } from "../../shared/types/userTypes";

export const RolesSettingsPage: FC = () => {
    const [boxesReg, setBoxesReg] = useState<IUser[]>([]);
    const [navtype, setNavtype] = useState<string>("client");
    const headerSettingsList: string[] = [
        "Добавление/удаление комментария к заявке",
        "Скачивание отчета по заявкам",
        "Просмотр истории изменений по заявке “Logs”",
        "Добавление/удаление файла к заявке",
        "Добавление/удаление чек-листов",
        "Просмотр профиля других пользователей",
        "Создание заявки",
        "Редактирование заявки",
    ];
    const headerSettingsListManager: string[] = [
        "Добавление/удаление комментария к заявке",
        "Скачивание отчета по заявкам",
        "Просмотр профиля других пользователей",
        "Удаление заявки",
        "Создание/редактирование компании",
        "Создание/редактирование пользователя",
        "Создание/удаление должности",
    ];
    const renderSettingsList: string[][] = [
        [
            "Добавление/удаление комментария к заявке",
            "Скачивание отчета по заявкам",
            "Просмотр истории изменений по заявке “Logs”",
            "Добавление/удаление файла к заявке",
            "Добавление/удаление чек-листов",
            "Просмотр профиля других пользователей",
            "Создание заявки",
            "Создание/редактирование заявки",
        ],
        [
            "Добавление/удаление комментария к заявке",
            "Скачивание отчета по заявкам",
            "Просмотр профиля других пользователей",
            "Удаление заявки",
            "Создание/редактирование компании",
            "Создание/редактирование пользователя",
            "Создание/удаление должности",
        ],
    ];
    const fetchData = usersApi();
    useEffect(() => {
        fetchData.getting();
    }, []);

    const navigate = useNavigate();

    //navigation
    const nvMenu = () => {
        navigate(-1);
    };

    //scroll-bar settings
    const scrollContainerRef = useRef<HTMLDivElement>(null);
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
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, []);

    //puting changes
    const reqRoles = async (data: IUser) => {
        try {
            if (data.role_type === "client") {
                const sendingData = {
                    users_data: [data],
                };
                const response = await axios.put(`${BASE_URL}/users/clientpermissions/detail/`, sendingData, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                });
                console.log(response);
            } else if (data.role_type === "manager") {
                const sendingData = {
                    users_data: [data],
                };
                const response = await axios.put(`${BASE_URL}/users/managerpermissions/detail/`, sendingData, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                });
                console.log(response);
            } else if (data.role_type === "") {
                return;
            }
        } catch (error) {
            console.log(error);
        }
    };

    //on click save im doing put to save all changes
    const saveRoles = () => {
        boxesReg.forEach((el: IUser) => {
            reqRoles(el);
        });
    };

    //just nav to client ot manager
    const changeNav = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.target as HTMLButtonElement).id;
        setNavtype(id);
    };
    return (
        <div className={styles.Settings}>
            <div
                className={styles.Container}
                ref={scrollContainerRef}
            >
                <div className={styles.Fixednav}>
                    <div className={styles.BackCont}>
                        <div className={styles.NvMneu}>
                            <div
                                onClick={nvMenu}
                                className={styles.Back}
                            >
                                <div className={styles.Icn}>
                                    <ArrowRight
                                        size={34}
                                        color="#1C6AB1"
                                    />
                                </div>
                                <p>Назад</p>
                            </div>
                            <p className={styles.Par}>Расширенные настройки</p>
                        </div>

                        <div className={styles.Search}>
                            <SearchInput />
                            <button
                                onClick={saveRoles}
                                className={styles.Save}
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <div className={styles.topnav}>
                        <button
                            onClick={changeNav}
                            id="client"
                            className={navtype === "client" ? styles.topNavActive : styles.topNavAnActive}
                        >
                            Клиент
                        </button>
                        <button
                            onClick={changeNav}
                            id="manager"
                            className={navtype === "manager" ? styles.topNavActive : styles.topNavAnActive}
                        >
                            Менеджер
                        </button>
                    </div>
                </div>
                <HeaderSettings
                    name="Имя пользователя"
                    list={navtype === "client" ? headerSettingsList : headerSettingsListManager}
                />
                <RolesRender
                    users={fetchData.usersList ? fetchData.usersList : []}
                    list={navtype === "client" ? renderSettingsList[0] : renderSettingsList[1]}
                    getChanges={(e: IUser[]) => setBoxesReg(e)}
                    navType={navtype}
                />
            </div>
        </div>
    );
};
