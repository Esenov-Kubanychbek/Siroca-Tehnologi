  import { useAppDispatch, useAppSelector } from '../../../../../../app/store/hooks';
  import { closeChangePassword, openChangePassword } from '../../../../../../shared/slices/ChangePasswowdSlice';
  import styles from './Buttons.module.scss';

  const Buttons = () => {
    const dispatch = useAppDispatch();
    const changePassword = useAppSelector(state => state.changePassword.changePassword)


    return (
      <div className={styles.Buttons}>
        <button onClick={() => dispatch(closeChangePassword())} className={changePassword ? styles.white : styles.blue}>Профиль</button>
        <button onClick={() => dispatch(openChangePassword())} className={changePassword ? styles.blue : styles.white}>Сбросить пароль</button>
      </div>
    );0
  }

  export default Buttons;
