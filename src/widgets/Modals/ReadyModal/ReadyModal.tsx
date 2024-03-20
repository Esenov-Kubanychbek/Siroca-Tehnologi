import { Danger } from "iconsax-react";
import styles from "./ReadyModal.module.scss";

const ReadyModal = () => {
    return (
        <div className={styles.ReadyModal}>
            <div className={styles.Container}>
                <Danger
                    variant="Bold"
                    size={70}
                    color="#E51616"
                />
                <p>Вы уверены?</p>
            </div>

            <div className={styles.BtnCont}>
                <button className={styles.BtnYes}>Да</button>
                <button className={styles.BtnNo}>Нет</button>
            </div>
        </div>
    );
};

export default ReadyModal;
