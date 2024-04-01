import { Danger } from "iconsax-react";
import styles from "./ReadyModal.module.scss";
import { useReady } from "../../../shared/hooks/modalHooks";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { PATHS } from "../../../shared/variables/variables";

export const ReadyModal: FC<{ content: string }> = ({ content }) => {
    const modal = useReady();
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
                <NavLink
                    to={PATHS.auth}
                    aria-label="login"
                    onClick={modal.close}
                    className={styles.BtnYes}
                >
                    Да
                </NavLink>
                <button
                    aria-label="stay"
                    onClick={modal.close}
                    className={styles.BtnNo}
                >
                    Нет
                </button>
            </div>
        </div>
    );
};
