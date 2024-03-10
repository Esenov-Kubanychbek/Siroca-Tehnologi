import { useAppDispatch } from '../../app/store/hooks';
import { closeModal } from '../slices/ModalSlice';
import styles from './ModalBlack.module.scss';

const ModalBack = () => {
    const dispatch = useAppDispatch();
  return (
    <div onClick={() => dispatch(closeModal())} className={styles.ModalBlack}>
      
    </div>
  )
}

export default ModalBack
