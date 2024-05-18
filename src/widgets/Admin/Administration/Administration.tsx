import { Popover } from "antd";
import { AdminNavigate, ProfileButton } from "../../../features";
import { NotifButton } from "../../HeaderTop/ui/NotifButton/NotifButton";
import styles from "./Administration.module.scss";
import { FC, useState } from "react";
import { NotifModal } from "../../Modals/NotifModal/NotifModal";
import { ProfileModal } from "../../Modals/ProfileModal/ProfileModal";

export const Administration: FC = () => {
    const [notifOpen, setNotifOpen] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const handleOpenChange = (modals: boolean) => {
        setModal(modals);
    };
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
                    <Popover
                        placement="bottomRight"
                        content={<ProfileModal setModal={setModal} />}
                        trigger={"click"}
                        open={modal}
                        onOpenChange={handleOpenChange}
                    >
                        <>
                            <ProfileButton />
                        </>
                    </Popover>
                </div>
            </div>
            <AdminNavigate />
        </div>
    );
};
