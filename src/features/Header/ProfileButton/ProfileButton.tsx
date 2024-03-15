import styles from "./ProfileButton.module.scss";
import profileImage from "../../../shared/assets/profileImage.svg";
import { Modal } from "antd";
import useModal from "./ProfileZustand";
import { ModalProfile } from "../../../widgets";

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
                />
                <div aria-label="profile-second">Мой профиль</div>
            </button>
            <Modal
                bodyStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "30px 0"
                }}
                footer={null}
                width={574}
                centered
                closeIcon={false}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <ModalProfile/>
            </Modal>
        </>
    );
};
