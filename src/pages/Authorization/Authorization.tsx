import styles from "./Authorization.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Authorization = () => {
   const [login, setLogin] = useState<String>('')
   const [password, setPasswod] = useState<String>('')
   const navigate = useNavigate();
   const handleLogin = async() => {
      const loginInfo = {
         username: login,
         password: password
      }
      try {
         const response = await axios.post("http://localhost:3001/login", loginInfo)
         console.log(response.data.isReg);
         
         if(response.data.isReg === 4){
            navigate('/clientpage')
         }else{
            console.log("Not logined");
         }
      } catch (error) {
         
      }
   }

   return (
      <div className={styles.Authorization}>
         <img
            className={styles.Logo}
            src="/Logo.svg"
            alt=""
         />
         <h1 className={styles.H1}>Вход в личный кабинет</h1>
         <div className={styles.InputsBlock}>
            <div className={styles.InputCont}>
               <p>Логин</p>
               <input
                  onChange={(ev) => setLogin(ev.target.value)}
                  placeholder="Введите логин"
                  type="text"
               />
            </div>
            <div className={styles.InputCont}>
               <p>Пароль</p>
               <input
                  onChange={(ev) => setPasswod(ev.target.value)}
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
         {/* <NavLink
            to="/clientpage"
            className={styles.EnterButton}
         >
            Войти
         </NavLink> */}
         <button className={styles.EnterButton} onClick={handleLogin}>Войти</button>
      </div>
   );
};

export default Authorization;
