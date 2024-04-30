import { CloseSquare, EyeSlash } from "iconsax-react";
import styles from "./ChangePassword.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { FC } from "react";
import { IChangeModal } from "./types/types";

export const ChangePassword: FC<IChangeModal> = (props) => {
    const { setModal } = props;
    
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
                                height={36}
                                width={167}
                                placeholder="*********"
                            />
                            <EyeSlash className={styles.img} />
                        </div>
                        <div className={styles.inputs}>
                            <CustomInput
                                height={36}
                                width={167}
                                placeholder="*********"
                            />
                            <EyeSlash className={styles.img} />
                        </div>
                        <div className={styles.inputs}>
                            <CustomInput
                                height={36}
                                width={167}
                                placeholder="*********"
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
                        onClick={() => setModal(false)}
                    />
                </div>
            </div>
        </div>
    );
};
