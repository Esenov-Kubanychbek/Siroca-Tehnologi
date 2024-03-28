import { FC } from "react";
import styles from "./Request.module.scss";
import { useView } from "../../shared/hooks/modalHooks";
import { IRequest } from "./types/types";
import { ItemInner } from "../../shared/ui";

export const Request: FC<IRequest> = (props) => {
    const modal = useView();
    const { number, company, request, description, client, manager, begin, end, prioritet, status, role } = props;
    return (
        <div
            onClick={modal.open}
            className={styles.Request}
            style={role === "admin" ? { width: "1740px" } : { width: "1820px" }}
        >
            <ItemInner
                content={number}
                width={role === "admin" ? 174 : 180}
            />
            <ItemInner
                content={company}
                width={role === "admin" ? 138 : 150}
            />
            <ItemInner
                content={request}
                width={role === "admin" ? 254 : 260}
            />
            <ItemInner
                content={description}
                width={role === "admin" ? 236 : 220}
            />
            <ItemInner
                content={client}
                width={role === "admin" ? 142 : 160}
            />
            <ItemInner
                content={manager}
                width={role === "admin" ? 188 : 200}
            />
            <ItemInner
                content={begin}
                width={role === "admin" ? 164 : 180}
            />
            <ItemInner
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
