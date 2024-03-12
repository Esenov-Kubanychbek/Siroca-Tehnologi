import { FC } from "react";
import { RequestInner } from "../../entities";
import styles from "./Request.module.scss";
import { IRequestProps } from "./model/types";

export const Request: FC<IRequestProps> = (props) => {
    const { number, company, request, description, client, manager, begin, end, prioritet, status } = props;
    return (
        <div className={styles.Request}>
            <RequestInner content={number} />
            <RequestInner content={company} />
            <RequestInner content={request} />
            <RequestInner content={description} />
            <RequestInner content={client} />
            <RequestInner content={manager} />
            <RequestInner content={begin} />
            <RequestInner content={end} />
            <div className={styles.Level}>{prioritet}</div>
            <div className={styles.Status}>{status}</div>
        </div>
    );
};
