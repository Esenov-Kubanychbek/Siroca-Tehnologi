import styles from "./ProfileButton.module.scss";
import profileImage from "../../../shared/assets/profileImage.svg";

export const ProfileButton = () => {
   return (
      <div className={styles.Profile}>
         <img
            alt="profile"
            src={profileImage}
            className={styles.ProfileImage}
         />
         <div className={styles.ProfileWord}>Мой профиль</div>
      </div>
   );
};
