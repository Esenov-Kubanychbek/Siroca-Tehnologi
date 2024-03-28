import styles from "./DashboardButton.module.scss";
import "../../app/styles/index.scss";
import { NavLink } from "react-router-dom";
import { IButtonProps } from "./types/types";
import { FC } from "react";

export const DashboardButton: FC<IButtonProps> = (props) => {
    const { name, children } = props;
    return (
        <NavLink
            aria-label="link"
            to={name}
            className={styles.DashboardButton}
        >
            {children}
        </NavLink>
    );
};
