import { FC, useState } from "react";
import styles from "./Roles.module.scss";
import RolesMenu from "./components/rolesMenu/RolesMenu";
import { useNavigate } from "react-router-dom";

export const Roles: FC = () => {
    const [settings, setSettings] = useState<boolean>(false);
    const openSetting = () => {
        setSettings(true);
    };
    const navigate = useNavigate();
    return (
        <div className={styles.Roles}>
            {settings ? navigate("/rolessettings") : <RolesMenu openSettings={openSetting} />}
        </div>
    );
};
