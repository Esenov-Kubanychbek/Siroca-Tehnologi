import { useState } from "react";
import styles from "./ItemRoles.module.scss";

interface IItemSettingRoles {
    user: object;
    index: number;
    checkBoxList: object;
}



const ItemSettingRoles: React.FC<IItemSettingRoles> = ({ user, index, checkBoxList }) => {
    const Boxes = {
        "Добавление/удаление комментария к заявке": false,
        "Добавление/удаление файла к заявке": false,
        "Просмотр истории изменений по заявке “Logs”": false,
        "Добавление/удаление чек-листов": false,
        "Просмотр профиля других пользователей": false,
        "Скачивание отчета по заявкам": false,
        "Создание/редактирование заявки": false,
    }
    const getCheckBoxVal = (ev) => {
        const name = ev.target.name
        Boxes[name] = !Boxes[name]
        console.log([user.username,Boxes]);
    }
    return (
        <div className={styles.Item}>
            <div className={styles.num}>
                <p>{index + 1}</p>
            </div>
            <div className={styles.name}>
                <p>{user ? user.username : []}</p>
            </div>
            {checkBoxList[0].map((el) => {
                return (
                    <div className={styles.el}>
                        <input type="checkbox" onChange={getCheckBoxVal} name={el} />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemSettingRoles;
