import { Danger } from "iconsax-react";
import styles from "./ReadyModal.module.scss";
import { FC } from "react";
import { IReady } from "./types/types";

export const ReadyModal: FC<IReady> = (props) => {
    const { content, no, yes } = props;
    return (
        <div className={styles.ReadyModal}>
            <div className={styles.Container}>
                <Danger
                    variant="Bold"
                    size={70}
                    color="#1C6AB1"
                />
                <p>{content}</p>
            </div>
            <div className={styles.BtnCont}>
                <button
                    onClick={yes}
                    className={styles.Yes}
                >
                    Да
                </button>
                <button
                    aria-label="stay"
                    onClick={no}
                    className={styles.No}
                >
                    Нет
                </button>
            </div>
        </div>
    );
};
