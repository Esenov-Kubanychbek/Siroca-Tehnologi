import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./CreateSubTask.module.scss";
import { CloseSquare } from "iconsax-react";
import { usersRoleTypeApi } from "../../../../widgets/Modals/EditRequest/api/usersRoleTypeApi";
import { CustomButton, CustomInput } from "../../../../shared/ui";
import { CustomSelect } from "../../../../widgets/Modals/CreateCompany/ui/CustomSelect";
import { checkListApi } from "../../api/checkListApi";
import { getOneRequestApi } from "../../../../widgets/Modals/ViewRequest/api/getOneRequestApi";

export const CreateSubTask: FC<{ main_manager: string | undefined,setDisplay: Dispatch<SetStateAction<boolean>>, checklistId: number | undefined }> = ({ setDisplay, checklistId, main_manager }) => {
    const fetchRoleType = usersRoleTypeApi();
    const subtaskCreate = checkListApi()
    const [inputDatas, setInputDatas] = useState({
        compited: false,
        task: "",
        date: "",
        manager: fetchRoleType.managersList[0]
    })

    const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputDatas((prev) => ({
            ...prev, 
            [event.target.id]: event.target.value
        }))
    }
    const {oneRequest, getOneRequest} = getOneRequestApi()
    const add = () => {
        const obj = {
            text: inputDatas.task,
            deadline: inputDatas.date,
            manager: main_manager,
            checklist: checklistId,
            completed: inputDatas.compited
        }
        subtaskCreate.createSubTask(obj)
        const id = oneRequest.id
        getOneRequest(id)
    }
    return (
        <div className={styles.CreateSubTask}>
            <div className={styles.InputRelative}>
                <CustomInput
                    id="task"
                    name="text"
                    width={553}
                    placeholder="Подзадача..."
                    paddingLeft={52}
                    change={onChangeInput}
                />
                <CloseSquare
                    onClick={() => setDisplay(false)}
                    className={styles.CloseSquare}
                    cursor={"pointer"}
                />
            </div>
            <div className={styles.CheckDesc}>
                <CustomButton
                    type="button"
                    variant="Primary"
                    width={130}
                    text="Добавить"
                    onClick={add}
                />
                <CustomSelect
                    value={inputDatas.manager}
                    id="manager"
                    name="manager"
                    text="Назначить..."
                    dataOption={fetchRoleType.managersList}
                    width={330}
                    change={onChangeInput}
                />
                <input
                    type="date"
                    id="date"
                    name="deadline"
                    onChange={onChangeInput}
                />
            </div>
        </div>
    );
};
