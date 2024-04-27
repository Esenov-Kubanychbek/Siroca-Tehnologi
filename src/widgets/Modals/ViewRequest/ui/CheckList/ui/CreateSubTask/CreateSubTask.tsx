import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./CreateSubTask.module.scss";
import { CloseSquare, TickSquare } from "iconsax-react";
import { usersRoleTypeApi } from "../../../../../EditRequest/api/usersRoleTypeApi";
import { ICheckList, checkListApi } from "../../../../../EditRequest/api/checkListApi";
import { getOneRequestApi } from "../../../../api/getOneRequestApi";
import { CustomButton, CustomInput } from "../../../../../../../shared/ui";
import { CustomSelect } from "../../../../../CreateCompany/ui/CustomSelect";

export const CreateSubTask: FC<{ setDisplay: Dispatch<SetStateAction<boolean>> }> = ({ setDisplay }) => {
    const fetchRoleType = usersRoleTypeApi();
    const fetchCheckList = checkListApi();
    const fetchRequest = getOneRequestApi();
    const [checkValue, setCheckValue] = useState<ICheckList>({
        text: "",
        completed: false,
        deadline: "2008-12-12",
        application: 0,
        manager: fetchRoleType.managersList[0],
    });
    const changeChecked = () => {
        setCheckValue((prevState) => ({
            ...prevState,
            completed: !checkValue.completed,
        }));
        console.log(checkValue);
    };
    const checkListValue = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCheckValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            application: fetchRequest.oneRequest.id,
        }));
        e.preventDefault();
        console.log(checkValue);
    };
    const postCheck = () => {
        if (checkValue.text !== "") {
            fetchCheckList.posting(checkValue);
            setCheckValue({
                text: "",
                completed: false,
                deadline: "2008-12-12",
                application: 0,
                manager: fetchRoleType.managersList[0],
            });
            fetchRequest.getOneRequest(fetchRequest.oneRequest.id);
        } else {
            console.log("checkListTrimError");
        }
    };
    return (
        <div className={styles.CreateSubTask}>
            <div className={styles.InputRelative}>
                {checkValue.completed ? (
                    <TickSquare
                        variant="Bold"
                        color="#1C6AB1"
                        onClick={changeChecked}
                        className={styles.Checked}
                    />
                ) : (
                    <div
                        onClick={changeChecked}
                        className={styles.NotChecked}
                    />
                )}
                <CustomInput
                    name="text"
                    width={553}
                    value={checkValue.text}
                    placeholder="Подзадача..."
                    height={44}
                    paddingLeft={52}
                    change={checkListValue}
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
                    height={44}
                    onClick={postCheck}
                />
                <CustomSelect
                    change={checkListValue}
                    name="manager"
                    text="Назначить..."
                    dataOption={fetchRoleType.managersList}
                    width={330}
                />
                <input
                    type="date"
                    value={checkValue.deadline}
                    name="deadline"
                    onChange={checkListValue}
                />
            </div>
        </div>
    );
};
