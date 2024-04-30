import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
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
<<<<<<< HEAD
    const [navtype, setNavtype] = useState<string>("client");
=======
    const [navtype, setNavtype] = useState<string>("Клиент");
    const [users, setUsers] = useState<IUser[]>([]);
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
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
<<<<<<< HEAD
    useEffect(() => {
        fetchData.getUsersList();
    }, []);
=======
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc

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
<<<<<<< HEAD
    const reqRoles = async (data: IUser) => {
        try {
            if (data.role_type === "client") {
                const sendingData = {
                    users_data: [data],
=======
    const reqRoles = async (props: {data: IUser[], role: string}) => {
        try {
            if (props.role === "client") {
                const sendingData = {
                    users_data: props.data,
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                };
                const response = await axios.put(`${BASE_URL}/users/clientpermissions/detail/`, sendingData, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                });
                console.log(response);
<<<<<<< HEAD
            } else if (data.role_type === "manager") {
                const sendingData = {
                    users_data: [data],
                };
=======
            } else if (props.role === "manager") {
                const sendingData = {
                    users_data: props.data,
                };
                console.log(sendingData);
                
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                const response = await axios.put(`${BASE_URL}/users/managerpermissions/detail/`, sendingData, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                });
                console.log(response);
<<<<<<< HEAD
            } else if (data.role_type === "") {
=======
            } else if (props.role === "") {
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                return;
            }
        } catch (error) {
            console.log(error);
        }
    };

    //on click save im doing put to save all changes
    const saveRoles = () => {
        const propertiesToDelete: string[] = [
            'first_name',
            'image',
            'created_at',
            'job_title',
            'main_company',
            'surname',
            'username'
        ];
    
        const managers: IUser[] = [];
        const clients: IUser[] = [];
    
        boxesReg.forEach((el: IUser) => {
            propertiesToDelete.forEach(property => {
                delete el[property];
            });
    
            if (el.role_type === "manager") {
                managers.push(el);
            } else if (el.role_type === "client") {
                clients.push(el);
            }
        });
    
        reqRoles({ data: managers, role: "manager" });
        reqRoles({ data: clients, role: "client" });
    };
    

    //just nav to client ot manager
    const changeNav = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.target as HTMLButtonElement).innerText;
        setNavtype(id);
    };
<<<<<<< HEAD
=======
    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const filterUsers = fetchData.usersList.filter((el) => {
            if (el.username?.includes(event.target.value)) {
                return el;
            }
        });
        setUsers(filterUsers);
    };
    useEffect(() => {
        fetchData.getUsersList(1);
    }, []);
    useEffect(() => {
        setUsers(fetchData.usersList);
    }, [fetchData.usersList]);
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
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
<<<<<<< HEAD
                            <SearchInput />
=======
                            <SearchInput
                                onChange={(event) => {
                                    onSearch(event);
                                }}
                            />
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
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
<<<<<<< HEAD
                            className={navtype === "client" ? styles.topNavActive : styles.topNavAnActive}
=======
                            className={navtype === "Клиент" ? styles.topNavActive : styles.topNavAnActive}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                        >
                            Клиент
                        </button>
                        <button
                            onClick={changeNav}
                            id="manager"
<<<<<<< HEAD
                            className={navtype === "manager" ? styles.topNavActive : styles.topNavAnActive}
=======
                            className={navtype === "Менеджер" ? styles.topNavActive : styles.topNavAnActive}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                        >
                            Менеджер
                        </button>
                    </div>
                </div>
                <HeaderSettings
                    name="Имя пользователя"
<<<<<<< HEAD
                    list={navtype === "client" ? headerSettingsList : headerSettingsListManager}
                />
                <RolesRender
                    users={fetchData.usersList ? fetchData.usersList : []}
                    list={navtype === "client" ? renderSettingsList[0] : renderSettingsList[1]}
=======
                    list={navtype === "Клиент" ? headerSettingsList : headerSettingsListManager}
                />
                <RolesRender
                    users={users ? users : []}
                    list={navtype === "Клиент" ? renderSettingsList[0] : renderSettingsList[1]}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                    getChanges={(e: IUser[]) => setBoxesReg(e)}
                    navType={navtype}
                />
            </div>
        </div>
    );
};
