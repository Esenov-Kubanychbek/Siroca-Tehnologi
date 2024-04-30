import styles from "./NotifModal.module.scss";
import { NewNotification } from "../..";
import { CloseSquare } from "iconsax-react";
import { FC } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/variables/variables";
import { INotifModal } from "./types/types";

export const NotifModal: FC<INotifModal> = (props) => {
    const { setModal } = props;
    const setTrue = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/notifications/true/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            setModal(false);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const clearNotification = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}/applications/notifications/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.NotifModal}>
            <div className={styles.Container}>
                <div className={styles.NotifHeader}>
                    <h3 className={styles.NotifH3}>Уведомление</h3>
                    <button
                        className={styles.ClearBtn}
                        onClick={clearNotification}
                    >
                        Очистить все
                    </button>
                    <CloseSquare
                        cursor={"pointer"}
                        size={34}
                        onClick={() => {
                            setTrue();
                        }}
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
