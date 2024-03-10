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
};

export default ProfButton;
