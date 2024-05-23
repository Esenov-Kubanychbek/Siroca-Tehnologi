import { Dispatch, FC, SetStateAction } from "react";
import styles from "./DetailsSelect.module.scss";
import { priorityColor, statusColor } from "@/shared/helpers";
import { ArrowDown2 } from "iconsax-react";
import { editRequestApi } from "../../../api/editRequestApi";

interface IDetailsSelect {
    list: string[];
    opened: boolean;
    setStatusOpened: Dispatch<SetStateAction<boolean>>;
    setPriorityOpened: Dispatch<SetStateAction<boolean>>;
}

export const DetailsSelect: FC<IDetailsSelect> = (props) => {
    const { list, opened, setStatusOpened, setPriorityOpened } = props;
    const { requestState, setRequestData } = editRequestApi();
    const listTypeStatus: boolean = list.includes("Выполнено");
    const changeItem = (props: string) => {
        if (listTypeStatus) {
            setRequestData({ ...requestState, status: props });
        } else {
            setRequestData({ ...requestState, priority: props });
        }
        if (!listTypeStatus) {
            setPriorityOpened(false);
        } else {
            setStatusOpened(false);
        }
    };
    const handleOpen = () => {
        if (listTypeStatus) {
            setStatusOpened(!opened);
            setPriorityOpened(false);
        } else {
            setStatusOpened(false);
            setPriorityOpened(!opened);
        }
    };
    return (
        <div className={styles.DetailsSelect}>
            <div
                className={styles.Chosen}
                onClick={handleOpen}
                style={{ border: opened ? "1px solid #1C6AB1" : "none" }}
            >
                <p
                    style={{
                        color: listTypeStatus
                            ? statusColor(String(requestState.status))
                            : priorityColor(String(requestState.priority)),
                    }}
                >
                    {listTypeStatus ? requestState.status : requestState.priority}
                </p>
                <ArrowDown2 style={{ transform: opened ? "rotate(180deg)" : "rotate(0deg)" }} />
            </div>
            {opened && (
                <div className={styles.OptionsList}>
                    {list.map((item, i) => (
                        <p
                            key={i}
                            style={{
                                color: listTypeStatus ? statusColor(item) : priorityColor(item),
                            }}
                            onClick={() => changeItem(item)}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
