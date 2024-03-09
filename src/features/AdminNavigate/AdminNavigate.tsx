import styles from './AdminNavigate.module.scss';
import { NavLink } from 'react-router-dom';
interface IMargin{
   margin:number
   width?:number
}

export const AdminNavigate:React.FC<IMargin> = ({margin,width}) => {
   return (
      <div className={styles.AdminNavigate}>
         <div className={styles.Links}>
            <NavLink className={styles.Name} to="/workpage/companies">
               Компании
            </NavLink>
            <NavLink className={styles.Name} to="/workpage/users">
               Пользователи
            </NavLink>
            <NavLink className={styles.Name} to="/workpage/positions">
               Должности
            </NavLink>
            <NavLink className={styles.Name} to="/workpage/roles">
               Тип роли
            </NavLink>
         </div>
         <div className={styles.Line}>
            <div style={{marginLeft:`${margin}px`, width:`${width}px`}}/>
         </div>
      </div>
   )
}
