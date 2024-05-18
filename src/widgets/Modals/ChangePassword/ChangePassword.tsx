import { CloseSquare, Eye, EyeSlash, InfoCircle } from "iconsax-react";
import styles from "./ChangePassword.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { ChangeEvent, FC, useState } from "react";
import { IChangeModal } from "./types/types";
import axios from "axios";
import { BASE_URL, authToken } from "../../../shared/variables/variables";
import { usePassword } from "./api/ChangePassword";

export const ChangePassword: FC<IChangeModal> = (props) => {
    const [inputStates, setInputStates] = useState<{ [key: string]: { [key: string]: string | boolean } }>({
        prev: { value: "" },
        new1: { value: "" },
        new2: { value: "" },
    });
    const [err, setErr] = useState<boolean>(false);
    const [errors, setErrors] = useState<boolean>(false);

    const [passwordOpen, setPasswordOpen] = useState<boolean>(false);
    const usePasswordScc = usePassword();

    const { setModal } = props;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const timeState = inputStates;
        timeState[event.target.id].value = event.target.value;
        setInputStates(timeState);
    };
    const onSend = async () => {
        try {
            if (inputStates.new1.value === inputStates.new2.value) {
                const data = {
                    old_password: inputStates.prev.value,
                    new_password1: inputStates.new1.value,
                    new_password2: inputStates.new2.value,
                };
                await axios.put(`${BASE_URL}/users/change_password/`, data, authToken);
                props.setModal(false);
                props.setModalProfile(false);
                usePasswordScc.openModalScc();

                setErr(false);
                setErrors(false);
            } else {
                setErr(true);
            }
        } catch (error) {
            console.log(error);
            setErrors(true);
        }
    };
    const styleOpenPassword = {
        display: `${passwordOpen ? "block" : "none"}`,
    };
    const styleClosePassword = {
        display: `${passwordOpen ? "none" : "block"}`,
    };
    return (
        <div className={styles.ChangePassword}>
            <div className={styles.block}>
                <div className={styles.block1}>
                    <div className={styles.h1}>Сменить пароль</div>
                    <CloseSquare
                        className={styles.close}
                        cursor={"pointer"}
                        onClick={() => setModal(false)}
                        size={34}
                    />
                </div>
                <div
                    className={styles.error}
                    style={{ display: `${err || errors ? "block" : "none"}` }}
                >
                    <div className={styles.errorBlock}>
                        <InfoCircle color="rgba(229, 22, 22, 1)" />
                        <div>{err ? <p>Пароли не совпадают!</p> : <p>Неверный пароль! Повторите попытку.</p>}</div>
                    </div>
                </div>
                <div className={styles.block2}>
                    <div className={styles.labels}>
                        <label htmlFor="">Текущий пароль:</label>
                        <label htmlFor="">Новый пароль:</label>
                        <label htmlFor="">Повторите пароль:</label>
                    </div>
                    <div className={styles.input}>
                        <div className={styles.inputs}>
                            <CustomInput
                                id="prev"
                                height={36}
                                width={237}
                                change={onChange}
                                type={passwordOpen ? "text" : "password"}
                                trim={err || errors ? false : undefined}
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                            <EyeSlash
                                className={styles.img}
                                style={styleClosePassword}
                                onClick={() => setPasswordOpen(true)}
                                variant="Bold"
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                            <Eye
                                className={styles.img}
                                style={styleOpenPassword}
                                onClick={() => setPasswordOpen(false)}
                                variant="Bold"
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                        </div>
                        <div className={styles.inputs}>
                            <CustomInput
                                id="new1"
                                height={36}
                                width={237}
                                change={onChange}
                                type={passwordOpen ? "text" : "password"}
                                trim={err || errors ? false : undefined}
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                            <EyeSlash
                                className={styles.img}
                                style={styleClosePassword}
                                onClick={() => setPasswordOpen(true)}
                                variant="Bold"
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                            <Eye
                                className={styles.img}
                                style={styleOpenPassword}
                                onClick={() => setPasswordOpen(false)}
                                variant="Bold"
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                        </div>
                        <div className={styles.inputs}>
                            <CustomInput
                                id="new2"
                                height={36}
                                width={237}
                                change={onChange}
                                type={passwordOpen ? "text" : "password"}
                                trim={err || errors ? false : undefined}
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                            <EyeSlash
                                className={styles.img}
                                style={styleClosePassword}
                                onClick={() => setPasswordOpen(true)}
                                variant="Bold"
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                            <Eye
                                className={styles.img}
                                style={styleOpenPassword}
                                onClick={() => setPasswordOpen(false)}
                                variant="Bold"
                                color={`${err || errors ? "rgba(229, 22, 22, 1)" : "rgba(113, 113, 113, 1)"}`}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <CustomButton
                        width={208}
                        text="Забыли пароль"
                        variant="Without"
                        onClick={() => setModal(false)}
                    />
                    <CustomButton
                        width={208}
                        text="Сменить пароль"
                        variant="Primary"
                        onClick={onSend}
                    />
                </div>
            </div>
        </div>
    );
};
