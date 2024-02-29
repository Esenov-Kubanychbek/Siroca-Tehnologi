import styles from "./Authorization.module.scss";
import { NavLink } from "react-router-dom";

const Authorization = () => {
   return (
      <form className={styles.Authorization}>
         <img
            className={styles.Logo}
            src="/Logo.svg"
            alt="Logo"
         />
         <h1 className={styles.H1}>Вход в личный кабинет</h1>
         <div className={styles.InputsBlock}>
            <div className={styles.InputCont}>
               <p>Логин</p>
               <input
                  placeholder="Введите логин"
                  type="text"
               />
            </div>
            <div className={styles.InputCont}>
               <p>Пароль</p>
               <input
                  placeholder="Введите пароль"
                  type="password"
               />
            </div>
            <a
               className={styles.Link}
               href="#"
            >
               Не могу войти
            </a>
         </div>
         <NavLink
            to="/clientpage"
            className={styles.EnterButton}
         >
            Войти
         </NavLink>
      </form>
   );
};

export default Authorization;
