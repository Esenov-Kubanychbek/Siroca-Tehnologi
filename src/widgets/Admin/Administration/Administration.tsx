import { Popover } from "antd";
import { AdminNavigate, ProfileButton } from "../../../features";
import { NotifButton } from "../../HeaderTop/ui/NotifButton/NotifButton";
import styles from "./Administration.module.scss";
import { FC, useState } from "react";
import { NotifModal } from "../../Modals/NotifModal/NotifModal";

export const Administration: FC = () => {
    const [notifOpen, setNotifOpen] = useState<boolean>(false);
    return (
        <div className={styles.Administration}>
            <div className={styles.HeaderTop}>
                <div className={styles.Name}>Администрирование</div>
                <div className={styles.DataProfile}>
                    <Popover
                        placement="bottomRight"
                        content={<NotifModal setClose={setNotifOpen} />}
                        trigger={"click"}
                        open={notifOpen}
                        onOpenChange={() => {
                            setNotifOpen(!notifOpen);
                        }}
                    >
                        <>
                            <NotifButton />
                        </>
                    </Popover>
                    <ProfileButton />
                </div>
            </div>
            <div className={styles.Line}></div>
            <AdminNavigate />
        </div>
    );
};
