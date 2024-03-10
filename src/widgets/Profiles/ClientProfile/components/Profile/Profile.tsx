import { changePassword } from "../../../../../shared/slices/ChangePasswowdSlice"
import Button from "../../../ClientProfile/shared/Button/Button"
import InputProfile from "../../../ClientProfile/shared/InputProfile/InputProfile"
import styles from './Profile.module.scss'
const Profile: React.FC<changePassword> = ({ changePassword }) => {
    
    return (
        <div className={`${styles.Profile} ${changePassword ? styles.close : null}`}>
            <div className={styles.block1}>
                <p>Профиль</p>
            </div>
            <div className={styles.block2}>
                <label htmlFor="name">Name</label><br />
                <InputProfile  type='text' name="name" placeholder="" />
                <label htmlFor="lastName">Фамилия</label><br />
                <InputProfile type='text' name="lastName" placeholder="" />
                <label htmlFor="dol">Должность в компании</label><br />
                <InputProfile  type='text' name="dol" placeholder="" />
                <label htmlFor="company">Компания</label><br />
                <InputProfile  type='text' name="company" placeholder="" />
                <label htmlFor="login">Логин</label><br />
                <InputProfile type='email' name="login" placeholder="" />
                <Button value="Сохранить" className="blue"/>
            </div>
        </div>
    )
}

export default Profile
