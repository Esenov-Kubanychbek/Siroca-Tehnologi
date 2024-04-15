import { FC } from "react";
import styles from "./HeaderTop.module.scss";
import { LoginButton, NotifButton, ProfileButton, StatusNumber } from "../../features";
// import { IRoles, idRoles } from "../../pages/MainPage/api/idRoles";

export const HeaderTop: FC<{ role: string | null}> = ({ role }) => {
    // const [allRoles, setAllRoles] = useState<IRoles | null>()
    // const getRoles = idRoles()

    // useEffect(() => {
    //     setAllRoles(getRoles.rolesState)
    // }, [getRoles.rolesState])
    
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
                    <NotifButton />
                    <ProfileButton />
                    {role === "admin" ? null : <LoginButton variant="Primary" />}
                </div>
            </div>
        </div>
    );
};
