import styles from "./ProfileButton.module.scss";
import profileImage from "../../../shared/assets/profileImage.svg";
import { Modal } from "antd";
import Profile from "../../../widgets/Profiles/ClientProfile/components/Profile/Profile";
import useModal from "./ProfileZustand";

export const ProfileButton = () => {
    const modal = useModal();
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
                    className={styles.ProfileImage}
                />
                <button
                    className={styles.ProfileWord}
                    aria-label="profile-second"
                >
                    Мой профиль
                </button>
            </button>
            <Modal
                open={modal.isOpen}
                onOk={modal.close}
                onCancel={modal.close}
            >
                <Profile />
            </Modal>
        </>
    );
};
