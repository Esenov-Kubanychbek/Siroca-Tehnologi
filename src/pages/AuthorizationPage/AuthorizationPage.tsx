import styles from "./AuthorizationPage.module.scss";
import { useState, FormEvent, FC } from "react";
import axios from "axios";
import { Eye, EyeSlash, InfoCircle } from "iconsax-react";
import { Modal } from "antd";
import { CallToAdmin } from "../../widgets";
import { useNavigate } from "react-router-dom";
import { useCallToAdmin } from "../../shared/hooks/modalHooks";
import { BASE_URL, PATHS } from "../../shared/variables/variables";

export const Authorization: FC = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPasswod] = useState<string>("");
    const [err, setErr] = useState<boolean>(false);
    const [handleEye, setHandleEye] = useState<boolean>(false);
    const openPass = () => {
        setHandleEye(!handleEye);
    };
    const navigate = useNavigate();
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginInfo = {
            username: login,
            password: password,
        };
        try {
            const response = await axios.post(`${BASE_URL}/users/login/`, loginInfo);
            console.log(response.status);
            if (response.status === 200) {
                const access = response.data.access;
                localStorage.setItem("access", access);
                    
                if (response.data.role_type === "") {
                    navigate(PATHS.admin);
                } else if(response.data.role_type === "manager"){
                    navigate(PATHS.manager);
                }else{
                    navigate(PATHS.client);
                }
            } else {
                setErr(true);
            }
        } catch (error) {
            setErr(true);
        }
    };

    const modal = useCallToAdmin();
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
                        onChange={(e) => {setLogin(e.target.value)}}
                        onClick={() => setErr(false)}
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
                            type={handleEye ? "text" : "password"}
                        />
                        <div
                            className={err ? styles.EyeErr : styles.Eye}
                            onClick={openPass}
                        >
                            {handleEye ? (
                                <Eye color={err ? "#E51616" : "#3B3B3B"} />
                            ) : (
                                <EyeSlash color={err ? "#E51616" : "#3B3B3B"} />
                            )}
                        </div>
                    </div>
                </div>
                <button
                    type="button"
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
                width={678}
                centered
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CallToAdmin />
            </Modal>
        </form>
    );
};
