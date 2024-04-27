import { ChangeEvent, FC, useState } from "react";
import styles from "./CheckList.module.scss";
import { CustomInput, CustomButton } from "../../../../../shared/ui";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";
import { ICheckList, checkListApi } from "../../api/checkListApi";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";
import { createRequestApi } from "../../../CreateRequest/api/createRequestApi";
import { CloseSquare, TickSquare } from "iconsax-react";
import { usersRoleTypeApi } from "../../api/usersRoleTypeApi";

export const CheckList: FC = () => {
    const fetchRoleType = usersRoleTypeApi();
    const fetchCheckList = checkListApi();
    const fetchRequest = createRequestApi();
    const [checkValue, setCheckValue] = useState<ICheckList>({
        text: "",
        completed: false,
        deadline: "2008-12-12",
        application: fetchRequest.oneRequest.id,
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
        } else {
            console.log("checkListTrimError");
        }
    };
    const roles = idRoles();
    const role_type = localStorage.getItem("role_type");
    const render = () => {
        if (roles.formatedState && role_type === "client" && roles.formatedState.client_can_add_checklist_extra) {
            return (
                <div className={styles.CheckList}>
                    <div className={styles.Header}>
                        <div className={styles.HeaderLeft}>
                            <TickSquare color="#5C5C5C" />
                            Чек-лист
                        </div>
                        <button>Удалить</button>
                    </div>
                    <div className={styles.InputEnter}>
                        <div className={styles.InputRelative}>
                            <CustomInput
                                name="text"
                                width={553}
                                placeholder="Подзадача..."
                                height={44}
                                value={checkValue.text}
                                paddingLeft={52}
                                change={checkListValue}
                            />
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
                        </div>
                        <div className={styles.CheckDesc}>
                            <CustomButton
                                type="button"
                                variant="Primary"
                                height={44}
                                width={130}
                                text="Добавить"
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
                </div>
            );
        } else if (role_type === "manager" || role_type === "") {
            return (
                <div className={styles.CheckList}>
                    <div className={styles.Header}>
                        <div className={styles.HeaderLeft}>
                            <TickSquare color="#5C5C5C" />
                            Чек-лист
                        </div>
                        <button>Удалить</button>
                    </div>
                    <div className={styles.InputEnter}>
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
                                placeholder="Подзадача..."
                                height={44}
                                paddingLeft={52}
                                value={checkValue.text}
                                change={checkListValue}
                            />
                            <CloseSquare
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
                </div>
            );
        } else {
            return null;
        }
    };

    return <>{render()}</>;
};
