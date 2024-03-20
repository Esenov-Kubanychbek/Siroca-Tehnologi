import { TickCircle } from "iconsax-react";
import styles from "./SuccesModal.module.scss";

const SuccesModal = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.ModalSucces}>
                <TickCircle
                    size={70}
                    color="#00A91B"
                />
                <p>Изменения успешно сохранены!</p>
            </div>
        </div>
    );
};

export default SuccesModal;
