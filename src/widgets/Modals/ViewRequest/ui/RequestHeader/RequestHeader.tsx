import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./RequestHeader.module.scss";
import { CloseSquare } from "iconsax-react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { deleteRequestApi } from "../../api/deleteRequestApi";
import { filesApi } from "../../api/filesApi";
import { CustomMoreSquare } from "../../../../../shared/ui";

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
                <CustomMoreSquare
                    open={open}
                    setOpen={setOpen}
                >
                    <button onClick={openEditModal}>Редактировать</button>
                    <button onClick={deleteFunc}>Удалить</button>
                </CustomMoreSquare>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={closeModal}
                />
            </div>
        </div>
    );
};
