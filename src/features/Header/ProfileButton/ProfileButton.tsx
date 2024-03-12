import styles from "./ProfileButton.module.scss";
import profileImage from "../../../shared/assets/profileImage.svg";
import { Modal } from "antd";
import { useState } from "react";
import Profile from "../../../widgets/Profiles/ClientProfile/components/Profile/Profile";

export const ProfileButton = () => {
    const [isModal, setIsModal] = useState<boolean>(false);

    const showModal = () => {
        setIsModal(true);
    };

    const handleOk = () => {
        setIsModal(false);
    };

    const handleCancel = () => {
        setIsModal(false);
    };
    return (
        <button aria-label="profile" className={styles.Profile}>
            <img
                alt="profile"
                src={profileImage}
                className={styles.ProfileImage}
            />
            <button
                onClick={showModal} 
                className={styles.ProfileWord}
                aria-label="profile"
            >
                Мой профиль
            </button>
            <Modal
                open={isModal}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Profile />
            </Modal>
        </button>
    );
};
