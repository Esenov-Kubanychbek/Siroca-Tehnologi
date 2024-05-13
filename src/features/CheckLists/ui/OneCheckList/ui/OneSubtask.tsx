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
    const [moreState, setMoreState] = useState<boolean>(false);
    const [managerModal, setManagerModal] = useState<boolean>(false);
    const [editState, setEditState] = useState<boolean>(false);
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
            <div className={styles.Left}>
                <CustomCheckBox
                    checked={subtask.completed}
                    onClick={completeFunc}
                />
                <p onClick={editFunc}>{subtask.text}</p>
            </div>
            <div className={styles.Right}>
                <span onClick={editFunc}>{subtask.manager}</span>
                <div onClick={editFunc}>
                    <Timer1 />
                    <p>{subtask.deadline}</p>
                </div>
                <CustomMoreSquare
                    open={moreState}
                    setOpen={setMoreState}
                >
                    <button onClick={editFunc}>Редактирокать</button>
                    <button onClick={() => setManagerModal(true)}>Назначить</button>
                    <button onClick={deleteFunc}>Удалить</button>
                </CustomMoreSquare>
            </div>
            <Modal
                open={managerModal}
                centered
                onCancel={() => setManagerModal(false)}
            >
                <ManagerForSubtask setManagerModal={setManagerModal} />
            </Modal>
        </div>
    ) : (
        <CreateSubTask
            forWhat="edit"
            subtask={subtask}
            checklistId={Number(subtask.id)}
            setDisplay={setEditState}
        />
    );
};
