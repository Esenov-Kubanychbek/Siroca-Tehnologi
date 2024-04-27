import styles from "./CheckList.module.scss";
import { FC, useState } from "react";
import { CustomButton } from "../../../../../shared/ui";
import { SubTaskList } from "./ui/SubTaskList/SubTaskList";
import { CreateSubTask } from "./ui/CreateSubTask/CreateSubTask";

export const CheckList: FC = () => {
    const [display, setDisplay] = useState<boolean>(false);
    return (
        <div className={styles.CheckLists}>
            <SubTaskList />
            {display && <CreateSubTask setDisplay={setDisplay} />}
            <CustomButton
                onClick={() => setDisplay(true)}
                text="Добавить подзадачу"
                width={207}
                variant="Primary"
            />
        </div>
    );
};
