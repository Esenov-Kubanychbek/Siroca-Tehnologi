import { CloseSquare } from 'iconsax-react'
import styles from './ModalProfile.module.scss'
import profileImage from '../../shared/assets/profileImage.svg'
import { CustomButton } from '../../shared/ui'

export const ModalProfile = () => {
    return (
        <div className={styles.ModalProfile}>
            <div className={styles.block1}>
                <div className={styles.h1}>Профиль</div>
                <CloseSquare size={34} />
            </div>
            <div className={styles.datas}>
                <ul>
                    <li><label htmlFor="">Аватар: </label></li>
                    <li><label htmlFor="">Имя: </label></li>
                    <li><label htmlFor="">Фамилия: </label></li>
                    <li><label htmlFor="">Должность: </label></li>
                    <li><label htmlFor="">Компания: </label></li>
                    <li><label htmlFor="">Ваш менеджер: </label></li>
                    <li><label htmlFor="">Логин: </label></li>
                    <li><label htmlFor="">Пароль: </label></li>
                </ul>
                <ul>
                    <li><img src={profileImage} alt="avatar" /></li>
                    <li><input value='Иван' type="text" /></li>
                    <li><input value='Иванов' type="text" /></li>
                    <li><input value='Заместитель директора' type="text" /></li>
                    <li><input value='Оптима банк' type="text" /></li>
                    <li><input value='Ажиржанова Уулкан' type="text" /></li>
                    <li><input value='oliva@gmail.com' type="email" /></li>
                    <li><button className={styles.btn}>Сменить пароль</button></li>
                </ul>
            </div>
            <div className={styles.button}>
                <CustomButton width={130} text='Сохранить' variant='Primary' />
            </div>
        </div>
    )
}


