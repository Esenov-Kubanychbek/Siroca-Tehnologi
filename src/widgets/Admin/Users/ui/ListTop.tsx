import { FC } from 'react'
import { ListTopName } from '../../..';
import styles from './ListTop.module.scss'
export const ListTop:FC = () => {
    return (
        <div className={styles.ListTop}>
            <ListTopName name='Ф.И пользователя'/>
            <ListTopName name='Логин'/>
            <ListTopName name='Пароль'/>
            <ListTopName name='Должность в компании'/>
            <ListTopName name='Тип роли пользователя'/>
            <ListTopName name='Название компании'/>
        </div>
    )
};