import styles from "./ProfileButton.module.scss";
import profileImage from "../../shared/assets/profileImage.svg";
import { Modal } from "antd";
import { useProfile } from "../../shared/hooks/modalHooks";
import { ProfileModal } from "../../widgets";
import { FC } from "react";

export const ProfileButton: FC = () => {
    const modal = useProfile();
    return (
        <>
            <button
                onClick={modal.open}
                aria-label="profile"
                className={styles.Profile}
            >
                <img
                    alt="profile"
                    src={profileImage}
                />
                <p>Мой профиль</p>
            </button>
            <Modal
                width={574}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <ProfileModal />
            </Modal>
        </>
    );
};
