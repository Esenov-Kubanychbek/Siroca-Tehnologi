import { FC, useState } from "react";
import { CloseSquare, MoreSquare } from "iconsax-react";
import styles from "./ViewRequest.module.scss";
import { Collapses, MenuRequest } from "./ui";
import { getOneRequestApi } from "./api/getOneRequestApi";
import { IViewRequestModal } from "./types/types";
import { Modal, Popover } from "antd";
import { deleteRequestApi } from "./api/deleteRequestApi";
import { ViewLogs } from "../ViewLogs/ViewLogs";

export const ViewRequest: FC<IViewRequestModal> = (props) => {
    const { setModal } = props;
    const [open, setOpen] = useState<boolean>(false);
    const fetchData = getOneRequestApi();
    const deleteRequest = deleteRequestApi();
    const [viewLogs, setViewLogs] = useState<boolean>(false)
    const deleteFunc = () => {
        deleteRequest.deleteRequest(fetchData.oneRequest.id);
        setModal(false);
        setOpen(false);
    };
    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    return (
        <div className={styles.ViewRequest}>
            <MenuRequest />
            <div>
                <div className={styles.Header}>
                    <div className={styles.Name}>
                        Заявка - {fetchData.oneRequest.company} /&nbsp;
                        <div className={styles.Number}>{fetchData.oneRequest.task_number}</div>
                    </div>
                    <div>   
                        <Popover
                            placement="bottomRight"
                            content={
                                <div className={styles.MoreButtons}>
                                    <button className={styles.Button}>Редактировать</button>
                                    <button
                                        className={styles.Button}
                                        onClick={deleteFunc}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            }
                            onOpenChange={handleOpenChange}
                            trigger={"click"}
                            open={open}
                        >
                            <MoreSquare
                                cursor={"pointer"}
                                variant="Bulk"
                                color="#929292"
                                size={34}
                            />
                        </Popover>
                        <CloseSquare
                            cursor={"pointer"}
                            size={34}
                            onClick={() => setModal(false)}
                        />
                    </div>
                </div>
                <Collapses setViewLogs={setViewLogs}/>
            </div>
            <Modal
                centered
                width={1066}
                open={viewLogs}
                onCancel={() => setViewLogs(false)}
            >
                <ViewLogs/>
            </Modal>
        </div>
    );
};
