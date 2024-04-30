import { FC } from "react";
import styles from "./Request.module.scss";
import { IRequest } from "./types/types";
import { ItemInner } from "../../shared/ui";
import { getOneRequestApi } from "../../widgets/Modals/ViewRequest/api/getOneRequestApi";
import { priorityColor, statusColor } from "../../shared/helpers";

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
            <ItemInner
<<<<<<< HEAD
                content={request.short_description}
=======
                content={request.short_description !== null && request.short_description !== ''? request.short_description : "------------"}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
                width={role === "admin" ? 230 : 220}
            />
            <ItemInner
                content={request.main_client !== null && request.main_client !== '' ? request.main_client : "-----------"}
                width={role === "admin" ? 142 : 160}
            />
            <ItemInner
                content={request.main_manager}
                width={role === "admin" ? 188 : 200}
            />
            <ItemInner
                content={request.start_date !== null && request.start_date !== '' ? request.start_date : "-----------"}
                width={role === "admin" ? 164 : 180}
            />
            <ItemInner
                content={request.finish_date !== null && request.finish_date !== '' ? request.finish_date : "-----------"}
                width={role === "admin" ? 194 : 180}
            />
<<<<<<< HEAD
            <div
                className={styles.Prioritet}
                style={role === "admin" ? { width: "136px" } : { width: "150px" }}
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
                style={role === "admin" ? { width: "114px" } : { width: "140px" }}
            >
                <div
                    style={{
=======
            <div
                className={styles.Prioritet}
                style={{ width: role === "admin" ? "136px" :"150px" }}
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
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
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
