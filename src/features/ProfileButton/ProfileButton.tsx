import { profile } from "../../widgets/Modals/ProfileModal/api/ProfileModal";
import styles from "./ProfileButton.module.scss";
import { FC } from "react";



export const ProfileButton: FC = () => {
    const {users} = profile();
    return (
        <>
            <button
                aria-label="profile"
                className={styles.Profile}
            >
                <img
                    alt="profile"
                    src={String(users.image)}
                />
                <p>Мой профиль</p>

            </button>
            
            
            
        </>
    );
};
