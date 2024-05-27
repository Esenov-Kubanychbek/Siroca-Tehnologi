import { Notification } from "iconsax-react";
import styles from "./NotifButton.module.scss";
import { FC, useEffect, useState } from "react";
import { BASE_URL } from "../../../../shared/variables/variables";
import axios from "axios";

export const NotifButton: FC = () => {
    const [count, setCount] = useState<number>(0);
    const getCounts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/notifications/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            response.data.map((el: { is_read: boolean }) => {
                if (el.is_read === false) {
                    setCount((prev) => prev + 1);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCounts();
    }, []);
    return (
        <button
            aria-label="notif"
            className={styles.NotifButton}
        >
            <Notification
                size={34}
                variant={"Bold"}
                color="#717171"
            />
            {count ? <div className={styles.NotifNumber}>{count}</div> : null}
            
        </button>
    );
};
