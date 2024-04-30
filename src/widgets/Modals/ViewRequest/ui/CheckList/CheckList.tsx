import { CloseSquare, TickSquare, Timer1 } from "iconsax-react";
import styles from "./CheckList.module.scss";
import { ChangeEvent, FC, useState } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { CustomButton, CustomInput } from "../../../../../shared/ui";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";
import { ICheckList, checkListApi } from "../../../EditRequest/api/checkListApi";

export const CheckList: FC = () => {
    const data: number[] = [1, 2, 3, 4];
    const [display, setDisplay] = useState<boolean>(false);
    const fetchCheckList = checkListApi();
    const fetchRequest = getOneRequestApi();

    const [checkValue, setCheckValue] = useState<ICheckList>({
        text: "",
        completed: false,
        deadline: "2008-12-12",
        application: fetchRequest.oneRequest.id,
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
            application: fetchRequest.oneRequest.id,
            manager: checkValue.manager,
        });
        setCheckValue({
            text: "",
            completed: false,
            deadline: "2008-12-12",
            application: fetchRequest.oneRequest.id,
            manager: null,
        });
        fetchRequest.getOneRequest(fetchRequest.oneRequest.id);
        console.log(checkValue, "postCheck");
    };
    return (
        <div className={styles.CheckLists}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <div className={styles.HeaderLeft}>
                        <TickSquare color="#5C5C5C" />
                        Чек-лист
                    </div>
                    <button>Удалить</button>
                </div>
                {fetchRequest.oneRequest.checklists.map((card, i) => (
                    <div
                        className={styles.CheckList}
                        key={i}
                    >
                        <div className={styles.Left}>
                            <input
                                type="checkbox"
                                name="check"
                                readOnly
                                id="check"
                                checked={card.completed}
                            />
                            <p>{card.text}</p>
                        </div>
                        <div className={styles.Right}>
                            <span>{card.manager}</span>
                            <div>
                                <Timer1 />
                                <p>{card.deadline}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {display ? (
                <div className={styles.InputEnter}>
                    <div className={styles.InputRelative}>
                        <input
                            type="checkbox"
                            name="completed"
                            value={checkValue.completed === true ? "on" : "off"}
                            className={styles.CheckAbsolute}
                            onChange={checkListValue}
                        />
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
            ) : null}
            <CustomButton
                onClick={() => setDisplay(true)}
                text="Добавить подзадачу"
                width={207}
                variant="Primary"
            />
        </div>
    );
};
