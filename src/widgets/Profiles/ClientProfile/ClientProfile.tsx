import styles from'./ClientProfile.module.scss'
import close from '../icon/close-square.svg'
import BlockOne from './components/BlockOne/BlockOne'
import Profile from './components/Profile/Profile'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { closeModal } from '../../../shared/slices/ModalSlice'
import ChangePassword from './components/ChangePassword/ChangePassword'
const ClientProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(state => state.modal);
  const changePassword = useAppSelector(state => state.changePassword.changePassword)
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div className={`${styles.ClientProfile} ${modal.isModalOpen ? modal.modalContent ==='clientProfile' ? styles.open : styles.close : styles.close}`}>
      <img onClick={handleCloseModal} className={styles.closeButton} src={close} alt="close" />
      <BlockOne />
      <Profile changePassword={changePassword}/>
      <ChangePassword changePassword={changePassword}/>
    </div>
  )
}

export default ClientProfile
