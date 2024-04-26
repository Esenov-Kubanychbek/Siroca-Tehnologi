import { FC, useState } from "react";
import styles from "./HeaderTop.module.scss";
import { LoginButton, ProfileButton, StatusNumber } from "../../features";
import { NotifButton } from "./ui/NotifButton/NotifButton";
import { Popover } from "antd";
import { NotifModal } from "../Modals/NotifModal/NotifModal";

export const HeaderTop: FC<{ role: string | null }> = ({ role }) => {
    const [notifOpen, setNotifOpen] = useState<boolean>(false)
    return (
        <div className={styles.HeaderTop}>
            <div
                className={styles.HeaderTopInner}
                style={{ width: role === "admin" ? "1716px" : "1790px" }}
            >
                <div className={styles.HeaderLogo}>
                    {role === "admin" ? null : <img src="/Logo.svg" />}
                    <StatusNumber />
                </div>
                <div className={styles.DataProfile}>
                    <Popover
                        placement="bottomRight"
                        content={<NotifModal setClose={setNotifOpen}/>}
                        trigger={"click"}
                        open={notifOpen}
                        onOpenChange={() => {
                            setNotifOpen(!notifOpen)
                        }}
                    >
                       <>
                       <NotifButton /> 
                       </>
                    </Popover>
                    <ProfileButton />
                    {role === "admin" ? null : <LoginButton variant="Primary" />}
                </div>
            </div>
        </div>
    );
};
