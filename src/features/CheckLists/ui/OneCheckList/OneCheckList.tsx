import styles from "./OneCheckList.module.scss";
import { TickSquare } from "iconsax-react";
import { FC, useState } from "react";
import { IChecklist } from "../../api/checkListApi";
import { deleteCheckListApi } from "../../api/deleteCheckListApi";
import { getOneRequestApi } from "../../../../widgets/Modals/ViewRequest/api/getOneRequestApi";
import { CreateSubTask } from "../CreateSubTask/CreateSubTask";
import { CustomButton } from "../../../../shared/ui";
import { OneSubtask } from "./ui/OneSubtask";

interface IOneCheckList {
    checkList: IChecklist;
}

export const OneCheckList: FC<IOneCheckList> = ({ checkList }) => {
    const { deleteChecklistFromChecklists } = getOneRequestApi();
    const { deleteCheckList } = deleteCheckListApi();
    const [createDisplay, setCreateDisplay] = useState<boolean>(false);
    const deleteFunc = () => {
        deleteCheckList(checkList.id);
        deleteChecklistFromChecklists(checkList.id);
    };
    const completedPercent = () => {
        const completedArray = [];
        checkList.subtasks?.map((subtask) => {
            subtask.completed && completedArray.push(subtask);
        });
        const percent = checkList.subtasks && (completedArray.length / checkList.subtasks?.length) * 100;
        return percent?.toFixed(0);
    };
    return (
        <div className={styles.OneCheckList}>
            <div className={styles.SubTaskList}>
                <div className={styles.Header}>
                    <div className={styles.HeaderLeft}>
                        <TickSquare />
                        {checkList.name}
                    </div>
                    <button onClick={deleteFunc}>Удалить</button>
                </div>
                {checkList.subtasks && checkList.subtasks.length > 0 && (
                    <div className={styles.CompletedPercent}>
                        <p>{completedPercent()}%</p>
                        <div>
                            <div
                                style={{
                                    width: `${completedPercent()}%`,
                                    backgroundColor: Number(completedPercent()) === 100 ? "#00A91B" : "#1C6AB1",
                                }}
                            />
                        </div>
                    </div>
                )}
                {checkList.subtasks?.map((subtask, i) => (
                    <OneSubtask
                        subtask={subtask}
                        key={i}
                    />
                ))}
            </div>
            {createDisplay && (
                <CreateSubTask
                    checklistId={Number(checkList.id)}
                    setDisplay={setCreateDisplay}
                />
            )}
            <CustomButton
                onClick={() => setCreateDisplay(true)}
                text="Добавить подзадачу"
                width={207}
                variant="Primary"
            />
        </div>
    );
};
