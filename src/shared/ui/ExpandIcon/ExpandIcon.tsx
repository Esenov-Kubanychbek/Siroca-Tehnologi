import { FC } from "react";
import styles from "./ExpandIcon.module.scss";
import { ArrowDown2 } from "iconsax-react";

export const ExpandIcon: FC<{ isActive?: boolean }> = ({ isActive }) => {
    return (
        <div className={styles.ExpandIcon}>
            <ArrowDown2 color="#1C6AB1" style={{rotate: isActive ? "0deg" : "270deg"}}/>
        </div>
    );
};
