import { TickCircle } from "iconsax-react";
import styles from "./SuccesModal.module.scss";

export const SuccessModal = () => {
    return (
        <div className={styles.SuccessModal}>
            <TickCircle
                size={70}
                color="#00A91B"
            />
            <p>Изменения успешно сохранены!</p>
        </div>
    );
};
