import { FC } from "react";
import { IRequestInner } from "./model/types";
import styles from "./RequestInner.module.scss";

export const RequestInner: FC<IRequestInner> = (props) => {
    const { content, width } = props;
    return (
        <div
            className={styles.RequestInner}
            style={{ width: `${width}px` }}
        >
            {content}
        </div>
    );
};
