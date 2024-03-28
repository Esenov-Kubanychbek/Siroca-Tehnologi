import styles from "./LoginButton.module.scss";
import { Login } from "iconsax-react";
import { Modal } from "antd";
import { ReadyModal } from "../../widgets";
import { useReady } from "../../shared/hooks/modalHooks";
import { FC } from "react";

export const LoginButton: FC<{ variant: "Primary" | "Secondary" }> = ({ variant }) => {
    const modal = useReady();
    return (
        <>
            <button
                onClick={modal.open}
                className={styles[variant]}
                aria-label="login"
            >
                <Login />
            </button>
            <Modal
                width={550}
                centered
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <ReadyModal content="Вы уверены?" />
            </Modal>
        </>
    );
};
