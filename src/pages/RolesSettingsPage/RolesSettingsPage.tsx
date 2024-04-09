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

interface Props {}

export const RolesSettingsPage: FC<Props> = () => {
    const [boxesReg, setBoxesReg] = useState<IUser[]>([]);
    const [navtype, setNavtype] = useState<string>("all");
    const headerSettingsList: string[] = [
        "Добавление/удаление комментария к заявке",
        "Скачивание отчета по заявкам",
        "Просмотр истории изменений по заявке “Logs”",
        "Добавление/удаление файла к заявке",
        "Добавление/удаление чек-листов",
        "Просмотр профиля других пользователей",
    ];

    const renderSettingsList: string[][] = [
        [
            "Добавление/удаление комментария к заявке",
            "Скачивание отчета по заявкам",
            "Просмотр истории изменений по заявке “Logs”",
            "Добавление/удаление файла к заявке",
            "Добавление/удаление чек-листов",
            "Просмотр профиля других пользователей",
        ],
    ];

    const fetchData = usersApi();

    useEffect(() => {
        fetchData.getting();
    }, []);

    const navigate = useNavigate();

    const nvMenu = () => {
        navigate(-1);
    };

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

    const reqRoles = async (data: IUser) => {
        try {
            const response = await axios.put(`${BASE_URL}/users/clientpermissions/detail/`, data, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const saveRoles = () => {
        boxesReg.forEach((el: IUser) => {
            reqRoles(el);
        });
    };

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
                        <p className={styles.Par}>Дополнительные настройки</p>
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
                    >
                        Клиент
                    </button>
                    <button
                        onClick={changeNav}
                        id="manager"
                    >
                        Менеджер
                    </button>
                </div>
                <div className={styles.Navigation}>
                    <button
                        onClick={changeNav}
                        id="all"
                    >
                        Все права
                    </button>
                    <button
                        onClick={changeNav}
                        id="manager"
                    >
                        Права админа
                    </button>
                </div>
                <HeaderSettings
                    name="Имя пользователя"
                    list={headerSettingsList}
                />
                <RolesRender
                    users={fetchData.inState ? fetchData.inState : []}
                    list={renderSettingsList}
                    getChanges={(e: IUser[]) => setBoxesReg(e)}
                    navType={navtype}
                />
            </div>
        </div>
    );
};
