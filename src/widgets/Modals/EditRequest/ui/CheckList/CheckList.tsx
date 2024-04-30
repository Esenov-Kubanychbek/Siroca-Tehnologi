import { ChangeEvent, FC, useState } from "react";
import styles from "./CheckList.module.scss";
import { CustomInput, CustomButton } from "../../../../../shared/ui";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";
import { ICheckList, checkListApi } from "../../api/checkListApi";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";
import { createRequestApi } from "../../../CreateRequest/api/createRequestApi";
import { CloseSquare, TickSquare } from "iconsax-react";

export const CheckList: FC = () => {
    const data: number[] = [1, 2, 3, 4];
    const fetchCheckList = checkListApi();
    const fetchRequest = createRequestApi();

    const [checkValue, setCheckValue] = useState<ICheckList>({
        text: "",
        completed: false,
        deadline: "2008-12-12",
        application: fetchRequest.id,
        manager: null,
    });

    const checkListValue = (e: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) => {
        setCheckValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        e.preventDefault();
        console.log(checkValue);
    };

    const postCheck = () => {
        fetchCheckList.posting({
            text: checkValue.text,
            completed: checkValue.completed === "on" && true,
            deadline: checkValue.deadline,
            application: fetchRequest.id,
            manager: checkValue.manager,
        });
        console.log(checkValue, "postCheck");
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
                                paddingLeft={52}
                                change={checkListValue}
                            />
                            <input
                                type="checkbox"
                                name="completed"
                                onChange={checkListValue}
                            />
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
                                dataOption={data}
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
                            <input
                                type="checkbox"
                                name="completed"
                                className={styles.CheckAbsolute}
                                onChange={checkListValue}
                            />
                            <CustomInput
                                name="text"
                                width={553}
                                placeholder="Подзадача..."
                                height={44}
                                paddingLeft={52}
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
                                dataOption={data}
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
            return (
                <p style={{ fontSize: "20px", color: "red" }}>У вас нет таких прав, обратитесь к администратору! </p>
            );
        }
    };

    return <>{render()}</>;
};
