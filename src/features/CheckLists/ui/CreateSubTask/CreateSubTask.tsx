import styles from "./CreateSubTask.module.scss";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { usersRoleTypeApi } from "../../../../widgets/Modals/EditRequest/api/usersRoleTypeApi";
import { CustomButton } from "../../../../shared/ui";
import { ISubtask, checkListApi } from "../../api/checkListApi";
import { ProfileTick } from "iconsax-react";
import { CreateSubtaskModals } from "./ui/CreateSubtaskModals";
import { getOneRequestApi } from "../../../../widgets/Modals/ViewRequest/api/getOneRequestApi";

interface ICreateSubTask {
    subtask?: ISubtask;
    setDisplay: Dispatch<SetStateAction<boolean>>;
    checklistId: number;
}

export const CreateSubTask: FC<ICreateSubTask> = (props) => {
    const { setDisplay, checklistId, subtask } = props;
    const { managersList } = usersRoleTypeApi();
    const { oneSubtask, setOneSubtask, oneSubtaskChange, createSubTask, editSubtask } = checkListApi();
    const { setSubtaskToOneRequest } = getOneRequestApi();
    const [managerModal, setManagerModal] = useState<boolean>(false);
    const [userModal, setUserModal] = useState<boolean>(false);
    const createFunc = () => {
        if (subtask) {
            editSubtask();
        } else {
            createSubTask();
        }
    };
    useEffect(()=>{
        if (subtask) {
            setOneSubtask(subtask)
        } else {
            setOneSubtask({
                text: "",
                completed: false,
                checklist: checklistId,
                manager: managersList[0],
                deadline: "2021-02-21"
            })
        }
    },[subtask])
    useEffect(() => {
        if(oneSubtask.id === subtask?.id) {
            editSubtask();
        }else {
            setSubtaskToOneRequest(oneSubtask);
        }
    }, [oneSubtask.id]);
    return (
        <div className={styles.CreateSubTask}>
            <input
                className={styles.TextInput}
                type="text"
                value={oneSubtask.text || ""}
                placeholder="Добавить подзадачу..."
                onChange={oneSubtaskChange}
                name="text"
            />
            <div className={styles.Bottom}>
                <CustomButton
                    variant="Primary"
                    width={130}
                    text="Добавить"
                    onClick={createFunc}
                />
                <CustomButton
                    variant="Secondary"
                    width={94}
                    text="Отмена"
                    onClick={() => {setDisplay(false)}}
                />
                <button
                    className={styles.AddManager}
                    onClick={() => setManagerModal(true)}
                >
                    <ProfileTick />
                    Назначить
                </button>
                <button
                    className={styles.AddUser}
                    onClick={() => setUserModal(true)}
                >
                    @
                </button>
                <input
                    type="date"
                    name="deadline"
                    className={styles.Date}
                    value={oneSubtask.deadline || ""}
                    onChange={oneSubtaskChange}
                />
            </div>
            <CreateSubtaskModals
                managerModal={managerModal}
                setManagerModal={setManagerModal}
                userModal={userModal}
                setUserModal={setUserModal}
            />
        </div>
    );
};
