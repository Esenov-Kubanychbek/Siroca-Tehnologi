import { FC, ReactNode } from "react";
import styles from "./ListTop.module.scss";

export const ListTop: FC<{ children: ReactNode; width?: number }> = ({ children, width }) => {
    return (
        <div
            style={{ width: `${width}px` }}
            className={styles.ListTop}
        >
            {children}
        </div>
    );
};
