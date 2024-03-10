import { AdminNavigate } from '../../features/AdminNavigate/AdminNavigate';
import { NotifButton, ProfileButton } from '../../features/Header';
import styles from './Administration.module.scss';
interface IProps{
  margin:number
  width?:number
}


export const Administration:React.FC <IProps> = ({margin,width}) => {
  return (
    <div className={styles.Administration}>
        <div className={styles.HeaderTop}>
            <div className={styles.Name}>Админстрирование</div>
            <div className={styles.DataProfile}>
                <NotifButton/>
                <ProfileButton/>
            </div>
        </div>
        <div className={styles.HeaderBottom}>
          <AdminNavigate margin={margin} width={width}/>
        </div>
    </div>
  )
}
