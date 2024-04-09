import { TickCircle } from "iconsax-react";
import styles from "./SuccessModal.module.scss";
import { FC } from "react";

export const SuccessModal: FC<{ content: string }> = ({ content }) => {
    return (
        <div className={styles.SuccessModal}>
            <TickCircle
                size={70}
                color="#00A91B"
            />
            <p>{content}</p>
        </div>
    );
};
