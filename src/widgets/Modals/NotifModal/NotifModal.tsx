import styles from "./NotifModal.module.scss";
import { NewNotification } from "../..";
import { CloseSquare } from "iconsax-react";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../shared/variables/variables";
import { INotifModal } from "./types/types";
import { getRequestApi } from "../../RequestList/api/getRequestApi";

export const NotifModal: FC<INotifModal> = (props) => {
    const [isHave, setIsHave] = useState<boolean>()
    const { setModal } = props;
    const { now } = getRequestApi()
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
    const isHaveNotif = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/notifications/?page=${now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            if (response.data[0]) {
                setIsHave(true)
            } else {
                setIsHave(false)
            }
        } catch (error) {
            console.log(error);
        }
    };
    const clearNotification = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}/applications/notifications/delete/all/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                }
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        isHaveNotif()
    }, [])
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
                    {isHave ? <div className={styles.InnerCont}>
                        <NewNotification active={true} />
                        <NewNotification active={false} />
                    </div> : <p className={styles.noList}>Список пуст!</p>}

                </div>
            </div>
        </div>
    );
};
