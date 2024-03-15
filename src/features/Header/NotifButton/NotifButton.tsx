import { Notification } from "iconsax-react";
import styles from "./NotifButton.module.scss";

export const NotifButton = () => {
    return (
        <>
            <button
                aria-label="notif"
                className={styles.NotifButton}
            >
                <Notification
                    size={34}
                    variant={"Bold"}
                    color="#717171"
                />
                <div className={styles.NotifNumber}>5</div>
            </button>
        </>
    );
};
