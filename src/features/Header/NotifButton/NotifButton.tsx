import { Notification } from "iconsax-react";
import styles from "./NotifButton.module.scss";
import { Modal } from "antd";
import useModal from "../ProfileButton/ProfileZustand";

export const NotifButton = () => {
    const modal = useModal();
    return (
        <>
            <button
                aria-label="notif"
                onClick={modal.open}
                className={styles.NotifButton}
            >
                <Notification
                    size={34}
                    variant={"Bold"}
                    color="#717171"
                />
                <div className={styles.NotifNumber}>5</div>
            </button>
            <Modal
                open={modal.isOpen}
                onOk={modal.close}
                onCancel={modal.close}
            >
                <div>Hello</div>
            </Modal>
        </>
    );
};
