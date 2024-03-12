import { changePassword } from "../../../../../shared/slices/ChangePasswowdSlice";
import InputProfile from "../../shared/InputProfile/InputProfile";
import styles from "./ChangePassword.module.scss";

const ChangePassword: React.FC<changePassword> = ({ changePassword }) => {
    console.log(changePassword);
    return (
        <div className={` ${changePassword ? styles.ChangePassword : styles.close}`}>
            <div className={styles.block1}>
                <p>Сбросить пароль</p>
            </div>
            <div className={styles.errorPassword}>
                <label htmlFor="password">Введите текущий пароль</label>
                <InputProfile
                    type="password"
                    name="password"
                    placeholder="*************"
                />
                <label htmlFor="password">Введите новый пароль</label>
                <InputProfile
                    type="password"
                    name="password"
                    placeholder="*************"
                />
                <label htmlFor="password">Повторите новый пароль</label>
                <InputProfile
                    type="password"
                    name="password"
                    placeholder="*************"
                />
                <h3>
                    <a href="">Забыли пароль?</a>
                </h3>
            </div>
            <button>Изменить пароль</button>
        </div>
    );
};

export default ChangePassword;
