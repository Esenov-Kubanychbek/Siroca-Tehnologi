import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./RequestHeader.module.scss";
import { Popover } from "antd";
import { CloseSquare, MoreSquare } from "iconsax-react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { deleteRequestApi } from "../../api/deleteRequestApi";
import { filesApi } from "../../api/filesApi";

interface IRequestHeader {
    setOpened: (opened: boolean) => void;
    setView: Dispatch<SetStateAction<boolean>>;
    setEditOpen: Dispatch<SetStateAction<boolean>>;
}

export const RequestHeader: FC<IRequestHeader> = (props) => {
    const { setView, setOpened, setEditOpen } = props;
    const fetchData = getOneRequestApi();
    const deleteRequest = deleteRequestApi();
    const { setImagesList, setOtherFilesList } = filesApi();
    const [open, setOpen] = useState<boolean>(false);
    const deleteFunc = () => {
        deleteRequest.deleteRequest(fetchData.oneRequest.id);
        setView(false);
        setOpen(false);
    };
    const closeModal = () => {
        setView(false);
        setOpened(false);
        setImagesList([]), setOtherFilesList([]);
    };
    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    const openEditModal = () => {
        setOpen(false);
        setEditOpen(true);
    };
    return (
        <div className={styles.RequestHeader}>
            <div className={styles.Name}>
                Заявка - {fetchData.oneRequest.company} /&nbsp;
                <div className={styles.Number}>{fetchData.oneRequest.task_number}</div>
            </div>
            <div>
                <Popover
                    placement="bottomRight"
                    content={
                        <div className={styles.MoreButtons}>
                            <button onClick={openEditModal}>Редактировать</button>
                            <button onClick={deleteFunc}>Удалить</button>
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
                    onClick={closeModal}
                />
            </div>
        </div>
    );
};
