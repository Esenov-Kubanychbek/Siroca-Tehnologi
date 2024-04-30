import styles from "./ProfileButton.module.scss";
import { Modal } from "antd";
import { ProfileModal } from "../../widgets";
import { FC, useState } from "react";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";

export const ProfileButton: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const fetchUsers = usersApi();
    return (
        <>
            <button
                onClick={() => setModal(true)}
                aria-label="profile"
                className={styles.Profile}
            >
                <img
                    alt="profile"
<<<<<<< HEAD
                    src={fetchUsers.oneUserGet.image}
=======
                    src={String(fetchUsers.oneUserGet.image)}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                />
                <p>Мой профиль</p>
            </button>
            <Modal
                width={475}
                open={modal}
                onCancel={() => setModal(false)}
            >
                <ProfileModal setModal={setModal} />
            </Modal>
        </>
    );
};
