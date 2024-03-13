import { FC } from 'react'
import styles from './UserList.module.scss'
import { ListTop } from './ListTop'
import UsersApi from '../UsersApi.json';
import { UsersMap } from './UsersMap';

export const UsersList:FC = () => {
    return (
        <div className={styles.UsersList}>
            <ListTop/>
            <div className={styles.Users}>
            {UsersApi.map((card, i) => (
                <UsersMap
                    key={i}
                    name={card.name}
                    login={card.login}
                    password={card.password}
                    position={card.position}
                    role={card.role}
                    companies={card.companies}
                />
            ))}
            </div>
        </div>
    )
};
