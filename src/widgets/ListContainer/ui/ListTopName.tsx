import { FC } from "react";
import styles from "../ListContainer.module.scss";

export const ListTopName: FC<{ name: string }> = ({ name }) => {
    return <div className={styles.ListTopName}>{name}</div>;
};
