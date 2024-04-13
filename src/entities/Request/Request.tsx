import { FC } from "react";
import styles from "./Request.module.scss";
import { IRequest } from "./types/types";
import { ItemInner } from "../../shared/ui";
import { useViewRequest } from "../../shared/hooks/modalHooks";
import { getOneRequestApi } from "../../widgets/Modals/ViewRequest/api/getOneRequestApi";

export const Request: FC<{ request: IRequest; role: string }> = ({ request, role }) => {
    const modal = useViewRequest();
    const fetchData = getOneRequestApi();
    return (
        <div
            onClick={() => {
                modal.open();
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
                content={request.short_description}
                width={role === "admin" ? 230 : 220}
            />
            <ItemInner
                content={request.main_client}
                width={role === "admin" ? 142 : 160}
            />
            <ItemInner
                content={request.main_manager}
                width={role === "admin" ? 188 : 200}
            />
            <ItemInner
                content={request.start_date}
                width={role === "admin" ? 164 : 180}
            />
            <ItemInner
                content={request.finish_date}
                width={role === "admin" ? 194 : 180}
            />
            <div
                className={styles.Prioritet}
                style={role === "admin" ? { width: "136px" } : { width: "150px" }}
            >
                <div
                    style={{
                        border: `1px solid ${request.priority === "Низкий" ? "blue" : ""} ${request.priority === "Средний" ? "#B4A416" : ""} ${request.priority === "Высокий" ? "red" : ""}`,
                        color: `${request.priority === "Низкий" ? "blue" : ""} ${request.priority === "Средний" ? "#B4A416" : ""} ${request.priority === "Высокий" ? "red" : ""}`,
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
                        border: `1px solid ${request.status === "К выполнению" ? "#0094FF" : ""} ${request.status === "В работе" ? "#25815A" : ""} ${request.status === "Тестируется" ? "#8B5D17" : ""} ${request.status === "Проверено" ? "#D20A0A" : ""} ${request.status === "Закрыто" ? "#0500FF" : ""}`,
                        color: `${request.status === "К выполнению" ? "#0094FF" : ""} ${request.status === "В работе" ? "#25815A" : ""} ${request.status === "Тестируется" ? "#8B5D17" : ""} ${request.status === "Проверено" ? "#D20A0A" : ""} ${request.status === "Закрыто" ? "#0500FF" : ""}`,
                    }}
                >
                    {request.status.slice(0, 9)}...
                </div>
            </div>
        </div>
    );
};
