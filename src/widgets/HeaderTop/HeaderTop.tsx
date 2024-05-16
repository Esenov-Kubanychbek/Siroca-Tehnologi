import { FC, useState } from "react";
import styles from "./HeaderTop.module.scss";
import { LoginButton, ProfileButton, StatusNumber } from "../../features";
import { NotifButton } from "./ui/NotifButton/NotifButton";
import { Popover } from "antd";
import { NotifModal } from "../Modals/NotifModal/NotifModal";
import { ProfileModal } from "../Modals/ProfileModal/ProfileModal";

export const HeaderTop: FC<{ role: string | null; isAdminManager?: boolean }> = ({ role, isAdminManager }) => {
    const [notifOpen, setNotifOpen] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const handleOpenChange = (modals: boolean) => {
        setModal(modals);
    };

    return (
        <div className={styles.HeaderTop}>
            <div
                className={styles.HeaderTopInner}
                style={{ width: role === "admin" ? "1716px" : "1790px" }}
            >
                <div className={styles.HeaderLogo}>
                    {role === "admin" || isAdminManager ? null : <img src="/Logo.svg" />}
                    <StatusNumber />
                </div>
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
                    {role === "admin" || isAdminManager ? null : <LoginButton variant="Primary" />}
                </div>
            </div>
        </div>
    );
};
