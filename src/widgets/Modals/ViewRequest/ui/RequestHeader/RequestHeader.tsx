import { Dispatch, FC, SetStateAction } from "react";
import styles from "./RequestHeader.module.scss";
import { CloseSquare } from "iconsax-react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { deleteRequestApi } from "../../api/deleteRequestApi";
import { filesApi } from "../../api/filesApi";
import { CustomMoreSquare } from "../../../../../shared/ui";

interface IRequestHeader {
    setView: Dispatch<SetStateAction<boolean>>;
    setEditOpen: Dispatch<SetStateAction<boolean>>;
}

export const RequestHeader: FC<IRequestHeader> = (props) => {
    const { setView, setEditOpen } = props;
    const fetchData = getOneRequestApi();
    const deleteRequest = deleteRequestApi();
    const { setImagesList, setOtherFilesList } = filesApi();
    const deleteFunc = () => {
        deleteRequest.deleteRequest(fetchData.oneRequest.id);
        setView(false);
    };
    const closeModal = () => {
        setView(false);
        setImagesList([]), setOtherFilesList([]);
    };
    const openEditModal = () => {
        setEditOpen(true);
    };
    return (
        <div className={styles.RequestHeader}>
            <div className={styles.Name}>
                Заявка - {fetchData.oneRequest.company} /&nbsp;
                <div className={styles.Number}>{fetchData.oneRequest.task_number}</div>
            </div>
            <div>
                <CustomMoreSquare>
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
