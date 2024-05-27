import styles from "./CreateSubTask.module.scss";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { CustomButton } from "@/shared/ui";
import { ISubtask, checkListApi } from "../../api/checkListApi";
import { ProfileTick } from "iconsax-react";
import { CreateSubtaskModals } from "./ui/CreateSubtaskModals";
import { getOneRequestApi } from "@/widgets/Modals/ViewRequest/api/getOneRequestApi";
import { createSubtaskApi } from "../../api/createSubtaskApi";
import { CreateSubtaskInput } from "./ui/CreateSubtaskInput/CreateSubtaskInput";

interface ICreateSubTask {
    subtask?: ISubtask;
    forWhat: "createSubtask" | "editSubtask";
    setDisplay: Dispatch<SetStateAction<boolean>>;
    checklistId: number;
}

export const CreateSubTask: FC<ICreateSubTask> = (props) => {
    const { setDisplay, checklistId, subtask, forWhat } = props;
    const { oneSubtask, setOneSubtask, oneSubtaskChange, editSubtask } = checkListApi();
    const { createSubtaskState, setCreateSubtaskState, createSubtaskChange, createSubTask } = createSubtaskApi();
    const { setSubtaskToOneRequest, editSubtaskInOneRequest } = getOneRequestApi();
    const [userModal, setUserModal] = useState<boolean>(false);
    const [managerModal, setManagerModal] = useState<boolean>(false);
    const createFunc = () => {
        if (forWhat === "editSubtask") {
            editSubtask();
            editSubtaskInOneRequest(oneSubtask);
            setDisplay(false);
        } else {
            createSubTask();
        }
    };
    const createSubtaskInputChange = (text: string) => {
        setCreateSubtaskState({ ...createSubtaskState, text: text });
    };
    const editSubtaskInputChange = (text: string) => {
        setOneSubtask({ ...oneSubtask, text: text });
    };
    useEffect(() => {
        if (forWhat === "createSubtask") {
            setCreateSubtaskState({
                text: "",
                completed: false,
                checklist: checklistId,
                manager: "",
                deadline: "",
            });
        } else if (forWhat === "editSubtask" && subtask?.text !== "") {
            subtask && setOneSubtask(subtask);
        } else if (forWhat === "editSubtask" && oneSubtask.text === "") {
            setDisplay(false);
        }
    }, [checklistId]);
    useEffect(() => {
        if (forWhat === "createSubtask" && createSubtaskState.id && createSubtaskState.id > 0) {
            setSubtaskToOneRequest(createSubtaskState);
        }
    }, [createSubtaskState.id]);
    return (
        <div className={styles.CreateSubTask}>
            <CreateSubtaskInput
                onChange={forWhat === "createSubtask" ? createSubtaskInputChange : editSubtaskInputChange}
                value={forWhat === "createSubtask" ? createSubtaskState.text : oneSubtask.text}
            />
            <div className={styles.Bottom}>
                <CustomButton
                    variant="Primary"
                    width={130}
                    text={forWhat === "createSubtask" ? "Добавить" : "Сохранить"}
                    onClick={createFunc}
                />
                <CustomButton
                    variant="Secondary"
                    width={94}
                    text="Отмена"
                    onClick={() => setDisplay(false)}
                />
                <button
                    className={styles.AddManager}
                    onClick={() => setManagerModal(true)}
                >
                    <ProfileTick />
                    {forWhat === "createSubtask"
                        ? String(createSubtaskState.manager).length > 8
                            ? `${createSubtaskState.manager?.slice(0, 8)}...`
                            : "Назначить"
                        : String(oneSubtask.manager).length > 8
                          ? `${oneSubtask.manager?.slice(0, 8)}...`
                          : "Назначить"}
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
                    value={
                        forWhat === "createSubtask" ? String(createSubtaskState.deadline) : String(oneSubtask.deadline)
                    }
                    onChange={forWhat === "createSubtask" ? createSubtaskChange : oneSubtaskChange}
                />
            </div>
            <CreateSubtaskModals
                forWhat={forWhat}
                managerModal={managerModal}
                setManagerModal={setManagerModal}
                userModal={userModal}
                setUserModal={setUserModal}
            />
        </div>
    );
};
