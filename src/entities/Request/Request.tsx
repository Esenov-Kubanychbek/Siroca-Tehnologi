import { FC } from "react";
import styles from "./Request.module.scss";
import { IRequest } from "./types/types";
import { ItemInner } from "../../shared/ui";
import { getOneRequestApi } from "../../widgets/Modals/ViewRequest/api/getOneRequestApi";
import { priorityColor, statusColor } from "../../shared/helpers";
import { Popover } from "antd";

export const Request: FC<IRequest> = (props) => {
    const { request, role, setView, view } = props;
    const fetchData = getOneRequestApi();
    return (
        <div
            onClick={() => {
                setView(true);
                fetchData.getOneRequest(request.id);
            }}
            className={styles.Request}
            style={{ width: role === "admin" ? (view ? "1012px" : "1724px") : "1820px" }}
        >
            <ItemInner
                content={request.task_number}
                width={role === "admin" ? (view ? 103 : 169) : 180}
            />
            <ItemInner
                content={request.company}
                width={role === "admin" ? (view ? 103 : 138) : 150}
            />
            <ItemInner
                content={request.title}
                width={role === "admin" ? (view ? 103 : 249) : 260}
            />
            <Popover
                placement="top"
                content={<div>{request.short_description}</div>}
            >
                <ItemInner
                    content={
                        request.short_description !== null && request.short_description !== ""
                            ? `${request.short_description.slice(0, 7)}...`
                            : "------------"
                    }
                    width={role === "admin" ? (view ? 130 : 230) : 220}
                />
            </Popover>
            <ItemInner
                content={
                    request.main_client !== null && request.main_client !== ""
                        ? request.main_client.length > 6
                            ? `${request.main_client.slice(0, 6)}...`
                            : request.main_client
                        : "-----------"
                }
                width={role === "admin" ? (view ? 103 : 142) : 160}
            />
            <ItemInner
                content={
                    request.main_manager !== null && request.main_manager !== ""
                        ? request.main_manager.length > 6
                            ? `${request.main_manager.slice(0, 6)}...`
                            : request.main_manager
                        : "-----------"
                }
                width={role === "admin" ? (view ? 102 : 188) : 200}
            />
            <ItemInner
                content={request.start_date !== null && request.start_date !== "" ? request.start_date : "-----------"}
                width={role === "admin" ? (view ? 103 : 164) : 180}
            />
            <ItemInner
                content={
                    request.finish_date !== null && request.finish_date !== "" ? request.finish_date : "-----------"
                }
                width={role === "admin" ? (view ? 59 : 194) : 180}
            />
            <div
                className={styles.Prioritet}
                style={{ width: role === "admin" ? (view ? "103px" : "136px") : "150px" }}
            >
                <div
                    style={{
                        border: `1px solid ${priorityColor(request.priority)}`,
                        color: `${priorityColor(request.priority)}`,
                    }}
                >
                    {request.priority.length > 8 ? `${request.priority.slice(0, 8)}...` : request.priority}
                </div>
            </div>
            <div
                className={styles.Status}
                style={{ width: role === "admin" ? (view ? "103px" : "114px") : "140px" }}
            >
                <div
                    style={{
                        border: `1px solid ${statusColor(request.status)}`,
                        color: `${statusColor(request.status)}`,
                    }}
                >
                    {request.status.length > 8 ? `${request.status.slice(0, 8)}...` : request.status}
                </div>
            </div>
        </div>
    );
};
