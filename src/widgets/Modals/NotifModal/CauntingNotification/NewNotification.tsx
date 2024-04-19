import styles from "./NewNotification.module.scss";
import { NotificationSingle } from "../../../";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../shared/variables/variables";
import { getRequestApi } from "../../../RequestList/api/getRequestApi";

interface INotification {
    created_at: string;
    form_id: null | number | string;
    made_change: string;
    task_number: string;
    text: string;
    title: string;
    is_read: boolean;
}

export const NewNotification: FC<{ active: boolean }> = ({ active }) => {
    const [notifications, setNotifications] = useState([]);
    const {now} = getRequestApi()
    const getNotification = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/notifications/?page=${now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            console.log(response);
            
            if (active === true) {
                const res = response.data.filter((el: INotification) => {
                    if (el.is_read === false) {
                        return el;
                    }
                });
                setNotifications(res);
            }
            if (active === false) {
                const res = response.data.filter((el: INotification) => {
                    if (el.is_read === true) {
                        return el;
                    }
                });
                setNotifications(res);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getNotification();
    }, []);

    return (
        <div className={styles.newNotificationCont}>
            <div className={styles.newNotificationContH4}>
                <h4 className={active ? styles.headerH4NewNotification : styles.headerH4NewNotification2}>
                    {active ? "Новые" : "Прочитанные"}
                </h4>
            </div>
            {notifications
                ? notifications.map((el: INotification) => {
                      return (
                          <NotificationSingle
                              active={active}
                              notif={el}
                          />
                      );
                  })
                : null}
        </div>
    );
};
