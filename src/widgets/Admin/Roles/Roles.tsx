import { useEffect, useState } from "react";
import styles from "./Roles.module.scss";
import RolesMenu from "./components/rolesMenu/RolesMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosApi } from "../../../axiosApi";

export const Roles = () => {
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
