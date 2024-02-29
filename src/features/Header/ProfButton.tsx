import styles from "./Header.module.scss";
import profileImage from "../../shared/assets/profileImage.png";

export const ProfButton = () => {
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
