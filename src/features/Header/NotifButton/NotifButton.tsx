import { Notification } from "iconsax-react";
import styles from "./NotifButton.module.scss";
import useLoading from "../../../widgets/Modals/LoadingModal/useLoading";

export const NotifButton = () => {
    const modal = useLoading();
    return (
        <button
            onClick={modal.open}
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
    );
};
