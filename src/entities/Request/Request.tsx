import { FC } from "react";
import styles from "./Request.module.scss";
import { IRequest } from "./types/types";
import { ItemInner } from "../../shared/ui";
import { getOneRequestApi } from "../../widgets/Modals/ViewRequest/api/getOneRequestApi";
import { priorityColor, statusColor } from "../../shared/helpers";
import { Popover } from "antd";

export const Request: FC<IRequest> = (props) => {
    const { request, role, setModal } = props;
    const fetchData = getOneRequestApi();
    return (
        <div
            onClick={() => {
                setModal(true);
                fetchData.getOneRequest(request.id);
            }}
            className={styles.Request}
            style={role === "admin" ? { width: "1724px" } : { width: "1820px" }}
        >
            <ItemInner
                content={request.task_number}
                width={role === "admin" ? 169 : 180}
            />
            <ItemInner
                content={request.company}
                width={role === "admin" ? 138 : 150}
            />
            <ItemInner
                content={request.title}
                width={role === "admin" ? 249 : 260}
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
                    width={role === "admin" ? 230 : 220}
                />
            </Popover>

            <ItemInner
                content={
                    request.main_client !== null && request.main_client !== "" ? request.main_client : "-----------"
                }
                width={role === "admin" ? 142 : 160}
            />
            <ItemInner
                content={request.main_manager}
                width={role === "admin" ? 188 : 200}
            />
            <ItemInner
                content={request.start_date !== null && request.start_date !== "" ? request.start_date : "-----------"}
                width={role === "admin" ? 164 : 180}
            />
            <ItemInner
                content={
                    request.finish_date !== null && request.finish_date !== "" ? request.finish_date : "-----------"
                }
                width={role === "admin" ? 194 : 180}
            />
            <div
                className={styles.Prioritet}
                style={{ width: role === "admin" ? "136px" : "150px" }}
            >
                <div
                    style={{
                        border: `1px solid ${priorityColor(request.priority)}`,
                        color: `${priorityColor(request.priority)}`,
                    }}
                >
                    {request.priority}
                </div>
            </div>
            <div
                className={styles.Status}
                style={{ width: role === "admin" ? "114px" : "140px" }}
            >
                <div
                    style={{
                        border: `1px solid ${statusColor(request.status)}`,
                        color: `${statusColor(request.status)}`,
                    }}
                >
                    {request.status.slice(0, 9)}...
                </div>
            </div>
        </div>
    );
};
