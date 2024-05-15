import { FC, useState } from "react";
import styles from "./OneSubtask.module.scss";
import { CustomCheckBox, CustomMoreSquare } from "@/shared/ui";
import { ISubtask, checkListApi } from "../../../api/checkListApi";
import { Timer1 } from "iconsax-react";
import { getOneRequestApi } from "@/widgets/Modals/ViewRequest/api/getOneRequestApi";
import { CreateSubTask } from "../../CreateSubTask/CreateSubTask";
import { Modal } from "antd";
import { ManagerForSubtask } from "@/widgets";

interface IOneSubtask {
    subtask: ISubtask;
}

export const OneSubtask: FC<IOneSubtask> = (props) => {
    const { subtask } = props;
    const [editState, setEditState] = useState<boolean>(false);
    const [moreState, setMoreState] = useState<boolean>(false);
    const [managerModal, setManagerModal] = useState<boolean>(false);
    const { deleteSubtask, setSubtaskCompleted } = checkListApi();
    const { setSubtaskCompletedFromOneRequest, deleteSubtaskFromOneRequest } = getOneRequestApi();
    const completeFunc = () => {
        setSubtaskCompleted(subtask);
        setSubtaskCompletedFromOneRequest(subtask.id);
    };
    const deleteFunc = () => {
        deleteSubtask(subtask.id);
        deleteSubtaskFromOneRequest(subtask.id);
    };
    const editFunc = () => {
        setEditState(true);
    };
    return editState === false ? (
        <div className={styles.OneSubtask}>
            <CustomCheckBox
                checked={subtask.completed}
                onClick={completeFunc}
            />
            <div onClick={editFunc} className={styles.Main}>
                <div className={styles.Text}>{subtask.text}</div>
                <div className={styles.Right}>
                    <span>{subtask.manager}</span>
                    <div>
                        <Timer1 />
                        <p>{subtask.deadline}</p>
                    </div>
                </div>
            </div>
            <CustomMoreSquare
                open={moreState}
                setOpen={setMoreState}
            >
                <button onClick={editFunc}>Редактирокать</button>
                <button onClick={() => setManagerModal(true)}>Назначить</button>
                <button onClick={deleteFunc}>Удалить</button>
            </CustomMoreSquare>
            <Modal
                open={managerModal}
                centered
                onCancel={() => setManagerModal(false)}
            >
                <ManagerForSubtask forWhat="editSubtask" setManagerModal={setManagerModal} />
            </Modal>
        </div>
    ) : (
        <CreateSubTask
            forWhat="editSubtask"
            subtask={subtask}
            checklistId={Number(subtask.id)}
            setDisplay={setEditState}
        />
    );
};
