import styles from "./CreateSubTask.module.scss";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { CloseSquare } from "iconsax-react";
import { usersRoleTypeApi } from "../../../../widgets/Modals/EditRequest/api/usersRoleTypeApi";
import { CustomButton, CustomInput } from "../../../../shared/ui";
import { CustomSelect } from "../../../../widgets/Modals/CreateCompany/ui/CustomSelect";
import { checkListApi } from "../../api/checkListApi";

interface ICreateSubTask {
    setDisplay: Dispatch<SetStateAction<boolean>>
    checklistId: number | undefined
}

export const CreateSubTask: FC<ICreateSubTask> = (props) => {
    const { setDisplay, checklistId } = props
    const {managersList} = usersRoleTypeApi();
    const {createSubTask} = checkListApi()
    const [inputDatas, setInputDatas] = useState({
        completed: false,
        text: "",
        deadline: "",
        manager: managersList[0],
        checklist: checklistId,
    })
    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputDatas((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }))
        console.log(inputDatas);
    }
    const add = () => {
        createSubTask(inputDatas)
    }
    return (
        <div className={styles.CreateSubTask}>
            <div className={styles.InputRelative}>
                <CustomInput
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
                    name="manager"
                    value={inputDatas.manager}
                    dataOption={managersList}
                    width={330}
                    change={onChangeInput}
                />
                <input
                    type="date"
                    name="deadline"
                    onChange={onChangeInput}
                />
            </div>
        </div>
    );
};
