import { Danger } from "iconsax-react";
import styles from "./ReadyModal.module.scss";
import { useReady } from "../../../shared/hooks/modalHooks";
import { NavLink } from "react-router-dom";
import { FC } from "react";

export const ReadyModal: FC = () => {
    const modal = useReady();
    return (
        <div className={styles.ReadyModal}>
            <div className={styles.Container}>
                <Danger
                    variant="Bold"
                    size={70}
                    color="#E51616"
                />
                <p>Вы уверены?</p>
            </div>
            <div className={styles.BtnCont}>
                <NavLink
                    to="/"
                    onClick={modal.close}
                    className={styles.BtnYes}
                >
                    Да
                </NavLink>
                <button
                    onClick={modal.close}
                    className={styles.BtnNo}
                >
                    Нет
                </button>
            </div>
        </div>
    );
};
