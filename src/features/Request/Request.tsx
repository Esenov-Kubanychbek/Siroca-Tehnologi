import { FC } from "react";
import { RequestInner } from "../../entities";
import styles from "./Request.module.scss";
import { IRequestProps } from "./model/types";

export const Request: FC<IRequestProps> = (props) => {
    const { number, company, request, description, client, manager, begin, end, prioritet, status, role } = props;
    return (
        <div
            className={styles.Request}
            style={role === "admin" ? { width: "1740px" } : { width: "1820px" }}
        >
            <RequestInner
                content={number}
                width={role === "admin" ? 174 : 180}
            />
            <RequestInner
                content={company}
                width={role === "admin" ? 138 : 150}
            />
            <RequestInner
                content={request}
                width={role === "admin" ? 254 : 260}
            />
            <RequestInner
                content={description}
                width={role === "admin" ? 236 : 220}
            />
            <RequestInner
                content={client}
                width={role === "admin" ? 142 : 160}
            />
            <RequestInner
                content={manager}
                width={role === "admin" ? 188 : 200}
            />
            <RequestInner
                content={begin}
                width={role === "admin" ? 164 : 180}
            />
            <RequestInner
                content={end}
                width={role === "admin" ? 194 : 180}
            />
            <div
                className={styles.Prioritet}
                style={role === "admin" ? { width: "136px" } : { width: "150px" }}
            >
                {prioritet}
            </div>
            <div
                className={styles.Status}
                style={role === "admin" ? { width: "114px" } : { width: "140px" }}
            >
                {status}
            </div>
        </div>
    );
};
