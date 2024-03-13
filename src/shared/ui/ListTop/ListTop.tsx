import { FC, ReactNode } from "react";
import styles from "./ListTop.module.scss";

export const ListTop: FC<{ children: ReactNode }> = ({ children }) => {
    return <div className={styles.ListTop}>{children}</div>;
};
