import styles from "./CheckLists.module.scss";
import { FC, useState } from "react";
import { CreateSubTask } from "./ui/CreateSubTask/CreateSubTask";
import { CustomButton } from "../../shared/ui";
import { getOneRequestApi } from "../../widgets/Modals/ViewRequest/api/getOneRequestApi";
import { OneCheckList } from "./ui/OneCheckList/OneCheckList";

export const CheckLists: FC = () => {
    const { oneRequest } = getOneRequestApi();
    const [display, setDisplay] = useState<boolean>(false);
    return (
        <div className={styles.CheckLists}>
            {oneRequest.checklists.map((checklist, i) => (
                <div key={i} className={styles.OneCheckList}>
                    <OneCheckList checkList={checklist}/>
                    {display && <CreateSubTask setDisplay={setDisplay} />}
                    <CustomButton
                        onClick={() => setDisplay(true)}
                        text="Добавить подзадачу"
                        width={207}
                        variant="Primary"
                    />
                </div>
            ))}
        </div>
    );
};
