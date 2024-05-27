import { FC, useState } from "react";
import styles from "./Login.module.scss";
import { CustomInput } from "@/shared/ui";
import { Eye, EyeSlash } from "iconsax-react";
import { postUserApi } from "../../api/postUserApi";

export const Login: FC = () => {
    const [passwordState, setPasswordState] = useState<boolean>(false);
    const { postUserState, postUserChange, postUserAdded } = postUserApi();
    return (
        <div className={styles.Login}>
            <div>
                <div className={styles.Text}>Логин</div>
                <CustomInput
                    value={postUserState.username}
                    trim={postUserAdded.username}
                    name="username"
                    width={272}
                    placeholder="@siroca.com"
                    change={postUserChange}
                />
            </div>
            <div>
                <div className={styles.Text}>Пароль</div>
                <div className={styles.PasswordInput}>
                    <CustomInput
                        value={postUserState.password}
                        trim={postUserAdded.password}
                        name="password"
                        width={272}
                        type={passwordState ? "text" : "password"}
                        placeholder="Создайте пароль..."
                        change={postUserChange}
                    />
                    {passwordState ? (
                        <Eye onClick={() => setPasswordState(false)} />
                    ) : (
                        <EyeSlash onClick={() => setPasswordState(true)} />
                    )}
                </div>
            </div>
        </div>
    );
};
