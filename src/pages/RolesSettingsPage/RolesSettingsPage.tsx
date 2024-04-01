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
export const RolesSettingsPage:FC = () => {
    const [boxesReg, setBoxesReq ] = useState()
    const headerSettingsList = [
        "Добавление/удаление комментария к заявке",
            "Скачивание отчета по заявкам",
            "Просмотр истории изменений по заявке “Logs”",
            "Добавление/удаление файла к заявке",
            "Добавление/удаление чек-листов",
            "Просмотр профиля других пользователей",
    ];
    const renderSettingsList = [
        [
            "Добавление/удаление комментария к заявке",
            "Скачивание отчета по заявкам",
            "Просмотр истории изменений по заявке “Logs”",
            "Добавление/удаление файла к заявке",
            "Добавление/удаление чек-листов",
            "Просмотр профиля других пользователей",
        ],
    ];
    const fetchData = usersApi()
    useEffect(() => {
        fetchData.getting();
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

    const reqRoles = async(data) => {
        try {
            const response = await axios.put(`${BASE_URL}/users/clientpermissions/detail/`, data, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            } )
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const saveRoles = () => {
        boxesReg.map((el) => {
           reqRoles(el) 
        })
    }
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
                                    size={24}
                                    color="#1C6AB1"
                                />
                            </div>

                            <p>Назад</p>
                        </div>
                        <p className={styles.Par}>Дополнительные настройки</p>
                    </div>

                    <div className={styles.Search}>
                        <SearchInput />
                        <button onClick={saveRoles} className={styles.Save}>Сохарнить</button>
                    </div>
                </div>
                <HeaderSettings
                    name="Имя пользователя"
                    list={headerSettingsList}
                />
                <RolesRender
                    users={fetchData.inState ? fetchData.inState : []}
                    list={renderSettingsList}
                    getChanges={(e: []) => setBoxesReq(e)}
                />
            </div>
        </div>
    );
};
