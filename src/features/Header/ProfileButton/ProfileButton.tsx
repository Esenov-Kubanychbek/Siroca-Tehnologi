import styles from "./ProfileButton.module.scss";
import profileImage from "../../../shared/assets/profileImage.svg";
import { Modal } from "antd";
import { useProfile } from "../../../shared/hooks";
import { ProfileModal } from "../../../widgets";

export const ProfileButton = () => {
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
                <div>Мой профиль</div>
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
