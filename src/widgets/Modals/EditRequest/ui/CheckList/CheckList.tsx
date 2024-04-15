import { ChangeEvent, FC, useState } from "react";
import styles from "./CheckList.module.scss";
import { CustomInput, CustomButton } from "../../../../../shared/ui";
import { Checkbox } from "antd";
import useDisplayStore from "../../model/collapse";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";
import { ICheckList, checkListApi } from "../../api/checkListApi";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";

export const CheckList: FC = () => {
    const data: string[] = ["Абдурахман", "Аман", "Кубанычбек", "Далер"];
    const { display, toggleDisplay } = useDisplayStore();
    const fetchData = checkListApi();

    const [checkValue, setCheckValue] = useState<ICheckList>({
        text: "",
        completed: false,
        deadline: "",
        application: 2,
        manager: null,
    });

    const checkListValue = (e: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) => {
        setCheckValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        e.preventDefault();
        console.log(checkValue);
    };

    const postCheck = () => {
        fetchData.posting(checkValue);
        console.log(checkValue, "postCheck");
    };

    const roles = idRoles()
    const role_type = localStorage.getItem("role_type")

    const render = () => {
        if (roles.formatedState && role_type === 'client' && roles.formatedState.client_can_add_checklist_extra) {
            return (
                <div className={styles.CheckList}>
                    <div className={styles.InputEnter}>
                        <div className={styles.InputRelative}>
                            <CustomInput
                                name="text"
                                width={570}
                                placeholder="Название задачи..."
                                height={44}
                                paddingLeft={45}
                                change={checkListValue}
                            />
                            <div
                                className={styles.CheckAbsolute}
                                onClick={toggleDisplay}
                            >
                                <Checkbox />
                            </div>
                        </div>
                        <div
                            style={{
                                display,
                                transition: "opacity 1s ease-in-out",
                                opacity: display === "none" ? 0 : 1,
                            }}
                        >
                            <div className={styles.CheckDesc}>
                                <CustomButton
                                    name="completed"
                                    type="button"
                                    variant="Request"
                                    width={130}
                                    text="Сохранить"
                                    onClick={postCheck}
                                />
                                <CustomSelect
                                    change={checkListValue}
                                    name="manager"
                                    text="Назначить..."
                                    dataOption={data}
                                    width={300}
                                />
                                <input
                                    type="date"
                                    name="deadline"
                                    onChange={checkListValue}
                                />
                            </div>
                        </div>
                        <CustomButton
                            variant="Request"
                            text="Добавить задачу"
                            width={172}
                        />
                    </div>
                </div>
            )
        } else if (role_type === "manager" || role_type === "") {
            return (
                <div className={styles.CheckList}>
                    <div className={styles.InputEnter}>
                        <div className={styles.InputRelative}>
                            <CustomInput
                                name="text"
                                width={570}
                                placeholder="Название задачи..."
                                height={44}
                                paddingLeft={45}
                                change={checkListValue}
                            />
                            <div
                                className={styles.CheckAbsolute}
                                onClick={toggleDisplay}
                            >
                                <Checkbox />
                            </div>
                        </div>
                        <div
                            style={{
                                display,
                                transition: "opacity 1s ease-in-out",
                                opacity: display === "none" ? 0 : 1,
                            }}
                        >
                            <div className={styles.CheckDesc}>
                                <CustomButton
                                    name="completed"
                                    type="button"
                                    variant="Request"
                                    width={130}
                                    text="Сохранить"
                                    onClick={postCheck}
                                />
                                <CustomSelect
                                    change={checkListValue}
                                    name="manager"
                                    text="Назначить..."
                                    dataOption={data}
                                    width={300}
                                />
                                <input
                                    type="date"
                                    name="deadline"
                                    onChange={checkListValue}
                                />
                            </div>
                        </div>
                        <CustomButton
                            variant="Request"
                            text="Добавить задачу"
                            width={172}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <p style={{ fontSize: "20px", color: "red" }}>У вас нет таких прав, обратитесь к администратору! </p>
            )
        }
    }

    return (
        <>
            {render()}
        </>

    );
};
