import { useState } from "react";
import styles from "./Roles.module.scss";
import RolesMenu from "./components/rolesMenu/RolesMenu";
// import RolesSettings from "./components/settings/RolesSettings";
import { useNavigate } from "react-router-dom";

export const Roles = () => {
    const [settings, setSettings] = useState<boolean>(false);
    const openSetting = () => {
        setSettings(true);
    };
    const navigate = useNavigate()
    return (
        <div className={styles.Roles}>{settings ? navigate("/rolesettings") : <RolesMenu openSettings={openSetting} />}
        </div>
    );
};
