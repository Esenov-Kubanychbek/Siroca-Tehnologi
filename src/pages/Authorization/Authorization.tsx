import styles from "./Auth.module.scss";
import { useState, FormEvent } from "react";
import axios from "axios";
import { EyeSlash, InfoCircle } from "iconsax-react";
import { Modal } from "antd";
import { CallToAdmin } from "../../widgets";
import callModal from "./model/CallModal";

export const Authorization = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPasswod] = useState<string>("");
    const [err, setErr] = useState(false);
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginInfo = {
            username: login,
            password: password,
        };
        try {
            const response = await axios.post("http://18.237.99.45/api/v1/users/login/", loginInfo);
            console.log(response);
            
            if (response.status) {
                setErr(true);
            } else {
                setErr(true);
            }
        } catch (error) {
            setErr(true);
        }
    };
    const modal = callModal();
    return (
        <form
            onSubmit={handleLogin}
            className={styles.Authorization}
        >
            <img
                className={styles.Logo}
                src="/Logo.svg"
                alt="Logo"
            />
            <h1 className={styles.H1}>Вход в личный кабинет</h1>
            {err ? (
                <div className={styles.Err}>
                    <InfoCircle
                        size={32}
                        color="red"
                    />
                    <p>Вы ввели неправильный логин или пароль. Проверьте свои данные еще раз.</p>
                </div>
            ) : null}

            <div className={err ? styles.InputsBlockErr : styles.InputsBlock}>
                <div className={err ? styles.ErrInputCont : styles.InputCont}>
                    <p>Логин</p>
                    <input
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Введите логин"
                        type="text"
                    />
                </div>
                <div className={err ? styles.ErrInputCont : styles.InputCont}>
                    <p>Пароль</p>
                    <div>
                        <input
                            onChange={(e) => setPasswod(e.target.value)}
                            placeholder="Введите пароль"
                            type="password"
                        />
                        <EyeSlash color={err ? "#E51616" : "#3B3B3B"} />
                    </div>
                </div>
                <button
                    onClick={modal.open}
                    className={styles.Link}
                >
                    Не могу войти
                </button>
            </div>
            <button
                className={err ? styles.ErrEnterButton : styles.EnterButton}
                type="submit"
            >
                Войти
            </button>
            <Modal
                bodyStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px",
                    padding: "0px",
                }}
                footer={null}
                width={678}
                centered
                closeIcon={false}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CallToAdmin />
            </Modal>
        </form>
    );
};
