import { FC } from "react";
import styles from "./Roles.module.scss";
import RolesMenu from "./components/rolesMenu/RolesMenu";

export const Roles: FC = () => {
    return (
        <div className={styles.Roles}>
            <RolesMenu />
        </div>
    );
};
