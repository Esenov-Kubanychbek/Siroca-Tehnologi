<<<<<<< HEAD:src/features/Header/ProfButton.tsx
import { useAppDispatch } from '../../app/store/hooks';
import styles from './Header.module.scss';
import profileImage from '../../shared/assets/profileImage.png';
import { openModal } from '../../shared/slices/ModalSlice';

const ProfButton = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('clientProfile'));
  };

  return (
    <div onClick={handleOpenModal} className={styles.Profile}>
      <img
        alt="profile"
        src={profileImage}
        className={styles.ProfileImage}
      />
      <div className={styles.ProfileWord}>Мой профиль</div>
    </div>
  );
=======
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
>>>>>>> e3548300379137e7374ed948f601a3e1ccf888cd:src/features/Header/ProfileButton/ProfileButton.tsx
};

export default ProfButton;
