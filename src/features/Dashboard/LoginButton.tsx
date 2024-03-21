import styles from "./Dashboard.module.scss";
import { Login } from "iconsax-react";
import { Modal } from "antd";
import { ReadyModal } from "../../widgets";
import { useReady } from "../../shared/hooks";

export const LoginButton = () => {
    const modal = useReady();
    return (
        <>
            <button
                onClick={modal.open}
                className={styles.LoginButton}
                aria-label="link"
            >
                <Login color="#1C6AB1" />
            </button>
            <Modal
                width={550}
                centered
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <ReadyModal />
            </Modal>
        </>
    );
};
