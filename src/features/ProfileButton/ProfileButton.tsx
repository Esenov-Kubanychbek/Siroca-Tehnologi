import styles from "./ProfileButton.module.scss";
import { Modal } from "antd";
import { ProfileModal } from "../../widgets";
import { FC, useState } from "react";

export const ProfileButton: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <>
            <button
                onClick={() => setModal(true)}
                aria-label="profile"
                className={styles.Profile}
            >
                <img alt="profile" />
                <p>Мой профиль</p>
            </button>
            <Modal
                width={574}
                open={modal}
                onCancel={() => setModal(false)}
            >
                <ProfileModal setModal={setModal} />
            </Modal>
        </>
    );
};
