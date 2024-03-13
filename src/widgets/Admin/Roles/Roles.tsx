import { useState } from "react";
import styles from "./Roles.module.scss";
import RolesMenu from "./components/rolesMenu/RolesMenu";
import RolesSettings from "./components/settings/RolesSettings";

export const Roles = () => {
    const [settings, setSettings] = useState<boolean>(false)
    const openSetting = () => {
        setSettings(true)
    }
    return <div className={styles.Roles}>
        {settings ? <RolesSettings/> : <RolesMenu openSettings={openSetting}/>}
        
    </div>;
};
