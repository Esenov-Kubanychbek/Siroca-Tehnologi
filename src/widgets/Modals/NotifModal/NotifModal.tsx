import styles from "./NotifModal.module.scss";
import { NewNotification } from "../..";
import { CloseSquare } from "iconsax-react";
import { useNotif } from "../../../shared/hooks/modalHooks";
import { FC } from "react";

export const NotifModal: FC = () => {
    const modal = useNotif();
    console.log(modal);
    return (
        <div className={styles.NotifModal}>
            <div className={styles.Container}>
                <div className={styles.NotifHeader}>
                    <h3 className={styles.NotifH3}>Уведомление</h3>
                    <CloseSquare
                        cursor={"pointer"}
                        size={34}
                        onClick={modal.close}
                    />
                </div>
                <div className={styles.ContentBlock}>
                    <div className={styles.InnerCont}>
                        <NewNotification active={true} />
                        <NewNotification active={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};
