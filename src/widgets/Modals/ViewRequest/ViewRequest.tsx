import { FC, useState } from "react";
import styles from "./ViewRequest.module.scss";
import { AddComment, AddDescription, Collapses, RequestMenu, RequestHeader } from "./ui";
import { IViewRequestModal } from "./types/ViewRequestTypes";
import { Modal } from "antd";
import { ViewLogs } from "../ViewLogs/ViewLogs";
import { EditRequest } from "../EditRequest/EditRequest";
import { idRoles } from "../../../pages/MainPage/api/idRoles";
import { descriptionApi } from "./api/descriptionApi";
import { CreateChecklist } from "../..";

export const ViewRequest: FC<IViewRequestModal> = ({ setView }) => {
    const roles = idRoles();
    const role_type = localStorage.getItem("role_type");
    const { opened, setOpened } = descriptionApi();
    const [editOpen, setEditOpen] = useState<boolean>(false);
    const [checklistModal, setChecklistModal] = useState<boolean>(false);
    const [viewLogs, setViewLogs] = useState<boolean>(false);
    const closeChecklist = () => {
        setChecklistModal(false);
    };
    return (
        <div className={styles.ViewRequest}>
            <RequestMenu />
            <div className={styles.Main}>
                <RequestHeader
                    setView={setView}
                    setEditOpen={setEditOpen}
                    setOpened={setOpened}
                />
                <Collapses
                    setViewLogs={setViewLogs}
                    setChecklistModal={setChecklistModal}
                />
            </div>
            {(roles.formatedState?.client_can_edit_comments_extra || role_type === "manager" || role_type === "") && (
                <AddComment />
            )}
            {opened && <AddDescription />}
            <Modal
                centered
                width={1066}
                open={viewLogs}
                onCancel={() => setViewLogs(false)}
            >
                <ViewLogs setViewLogs={setViewLogs}/>
            </Modal>
            <Modal
                width={732}
                centered
                open={editOpen}
                onCancel={() => setEditOpen(false)}
            >
                <EditRequest
                    setModal={setEditOpen}
                    requestFrom="ViewRequest"
                />
            </Modal>
            <Modal
                width={460}
                centered
                open={checklistModal}
                onCancel={closeChecklist}
            >
                <CreateChecklist setChecklistModal={setChecklistModal} />
            </Modal>
        </div>
    );
};
