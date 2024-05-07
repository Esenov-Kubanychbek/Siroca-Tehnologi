import { CloseSquare, EyeSlash } from "iconsax-react";
import styles from "./ChangePassword.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { ChangeEvent, FC, useState } from "react";
import { IChangeModal } from "./types/types";
import axios from "axios";
import { BASE_URL, authToken } from "../../../shared/variables/variables";

export const ChangePassword: FC<IChangeModal> = (props) => {
    const [inputStates, setInputStates] = useState<{ [key: string]: { [key: string]: string | boolean } }>({
        prev: { value: "" },
        new1: { value: "" },
        new2: { value: "" },
    });
    const [err, setErr] = useState<boolean>(false);
    console.log(err);

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
                const response = await axios.put(`${BASE_URL}/users/change_password/`, data, authToken);
                console.log(response);
            } else {
                setErr(true);
            }
        } catch (error) {
            console.log(error);
        }
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
                    />
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
                                width={167}
                                change={onChange}
                            />
                            <EyeSlash className={styles.img} />
                        </div>
                        <div className={styles.inputs}>
                            <CustomInput
                                id="new1"
                                height={36}
                                width={167}
                                change={onChange}
                            />
                            <EyeSlash className={styles.img} />
                        </div>
                        <div className={styles.inputs}>
                            <CustomInput
                                id="new2"
                                height={36}
                                width={167}
                                change={onChange}
                            />
                            <EyeSlash className={styles.img} />
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <CustomButton
                        width={208}
                        text="Не могу войти"
                        variant="Secondary"
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
