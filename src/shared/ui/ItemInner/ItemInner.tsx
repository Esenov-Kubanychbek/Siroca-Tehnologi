import { FC } from "react";
import styles from "./ItemInner.module.scss";
import { IItemInner } from "./types/types";

export const ItemInner: FC<IItemInner> = (props) => {
    const { content, width } = props;
    return (
        <div
            className={styles.ItemInner}
            style={{ width: `${width}px` }}
        >
            {content}
        </div>
    );
};
