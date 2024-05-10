import styles from "./OneCheckList.module.scss";
import { Timer1 } from "iconsax-react";
import { FC, useState } from "react";
import { IChecklist, ISubtask, checkListApi } from "../../api/checkListApi";
import { deleteCheckListApi } from "../../api/deleteCheckListApi";
import { getOneRequestApi } from "../../../../widgets/Modals/ViewRequest/api/getOneRequestApi";
import { CreateSubTask } from "../CreateSubTask/CreateSubTask";
import { CustomButton, CustomCheckBox } from "../../../../shared/ui";

interface IOneCheckList {
    checkList: IChecklist;
}

export const OneCheckList: FC<IOneCheckList> = (props) => {
    const { checkList } = props;
    const { deleteChecklistFromChecklists, setCompletedFromChecklists } = getOneRequestApi();
    const { deleteCheckList } = deleteCheckListApi();
    const [display, setDisplay] = useState<boolean>(false);
    const { setChecklistCompleted, setSubtaskCompleted } = checkListApi();

    const deleteFunc = () => {
        deleteCheckList(checkList.id);
        deleteChecklistFromChecklists(checkList.id);
    };

    const setCompleted = (subtask: ISubtask) => {
        setSubtaskCompleted({
            completed: !subtask.completed,
            checklist: subtask.checklist,
            text: subtask.text,
            id: subtask.id,
            deadline: subtask.deadline,
            manager: subtask.manager
        });
    };

    const checklistCompleted = () => {
        setCompletedFromChecklists(checkList.id);
        setChecklistCompleted({
            id: checkList.id,
            completed: !checkList.completed,
            main_manager: checkList.main_manager,
            subtasks: checkList.subtasks,
            name: checkList.name,
            application: checkList.application,
        });
    };
    return (
        <div className={styles.OneCheckList}>
            <div className={styles.SubTaskList}>
                <div className={styles.Header}>
                    <div className={styles.HeaderLeft}>
                        <CustomCheckBox
                            checked={checkList.completed}
                            onClick={checklistCompleted}
                        />
                        {checkList.name}
                    </div>
                    <button onClick={deleteFunc}>Удалить</button>
                </div>
                {checkList.subtasks !== undefined
                    ? checkList.subtasks.map((subtask, i) => (
                          <div
                              className={styles.SubTask}
                              key={i}
                          >
                              <div className={styles.Left}>
                                  <CustomCheckBox
                                      checked={subtask.completed}
                                      onClick={() => setCompleted(subtask)}
                                  />
                                  <p>{subtask.text}</p>
                              </div>
                              <div className={styles.Right}>
                                  <span>{subtask.manager}</span>
                                  <div>
                                      <Timer1 />
                                      <p>{subtask.deadline}</p>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </div>
            {display && (
                <CreateSubTask
                    checklistId={checkList.id}
                    setDisplay={setDisplay}
                />
            )}
            <CustomButton
                onClick={() => setDisplay(true)}
                text="Добавить подзадачу"
                width={207}
                variant="Primary"
            />
        </div>
    );
};
