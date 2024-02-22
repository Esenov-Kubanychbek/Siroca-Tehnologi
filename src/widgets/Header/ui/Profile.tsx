import styles from "./Header.module.scss"
import notification from "/notification.png";
import profileImage from "/profileImage.png";
import arrow from "/arrow.png";


const Profile = () => {
  return (
   <div className={styles.DataProfile}>
   <div className={styles.Notification}>
      <img
         alt="notification"
         src={notification}
      />
      <div className={styles.NotifNumber}>5</div>
   </div>
   <div className={styles.Profile}>
      <img
         alt="profile"
         src={profileImage}
         className={styles.ProfileImage}
      />
      <div className={styles.ProfileWord}>Мой профиль</div>
      <img
         alt="profileIcon"
         src={arrow}
         className={styles.ProfileIcon}
      />
   </div>
</div>
  )
}

export default Profile