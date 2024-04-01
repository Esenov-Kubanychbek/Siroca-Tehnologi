import { Notification } from "iconsax-react";
import styles from "./NotifButton.module.scss";
import { Modal } from "antd";
import { NotifModal } from "../../widgets";
import { useNotif } from "../../shared/hooks/modalHooks";
import { FC } from "react";

export const NotifButton: FC = () => {
    const modal = useNotif();
    return (
        <>
            <button
                onClick={modal.open}
                aria-label="notif"
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
                width={640}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <NotifModal />
            </Modal>
        </>
    );
};