import styles from "./authorization.module.scss"
import logo from "./logo.png"
import { NavLink } from "react-router-dom" 

const Authorization = () => {
  return (
    <form className={styles.authorization_form}>

      <div className={styles.form_container}>
        <img className={styles.logo} src={logo} alt="" />
        <h3 className={styles.header_h3}>Вход в личный кабинет</h3>
        <div className={styles.inputs_block}>
          <div className={styles.input_cont}>
            <p className={styles.input_type}>Логин</p>
            <input className={styles.input} placeholder="Введите логин" type="text" />
          </div>
          <div className={styles.input_cont}>
            <p className={styles.input_type} >Пароль</p>
            <input className={styles.input2} placeholder={`Введите пароль`} type="password"/>
          </div>
          <a className={styles.link} href="#">Не могу войти</a>
          <NavLink to="/clientpage" className={styles.enter_btn}>Войти</NavLink>
        </div>

      </div>

    </form>
  )
}

export default Authorization