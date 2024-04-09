import { ChangeEvent, FC, useState } from "react";
import styles from "./CheckList.module.scss";
import { CustomInput } from "../../../../shared/ui";
import { CustomButton } from "../../../../shared/ui";
import { Checkbox } from "antd";
import useDisplayStore from "../model/collapse";
import { CustomSelect } from "./../../CreateCompany/ui/CustomSelect";
import { ICheckList, checkListApi } from "../api/checkListApi";

export const CheckList: FC = () => {
    const data: string[] = ["Абдурахман", "Аман", "Кубанычбек", "Далер"];
    const { display, toggleDisplay } = useDisplayStore();
    const fetchCheckList = checkListApi();

    const [checkValue, setCheckValue] = useState<ICheckList>({
        text: "",
        completed: false,
        deadline: "",
        application: null,
        manager: null,
    });

    const checkListValue = (e: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) => {
        setCheckValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        e.preventDefault();
        console.log(checkValue);
    };

    fetchCheckList.posting(checkValue);

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
                            type="submit"
                            onClick={checkListValue}
                            variant="Request"
                            width={130}
                            text="Сохранить"
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
    );
};
