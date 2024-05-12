import styles from "./CheckLists.module.scss";
import { FC } from "react";
import { getOneRequestApi } from "../../widgets/Modals/ViewRequest/api/getOneRequestApi";
import { OneCheckList } from "./ui/OneCheckList/OneCheckList";

export const CheckLists: FC = () => {
    const { oneRequest } = getOneRequestApi();
    return (
        <div className={styles.CheckLists} id="checklists">
            {oneRequest.checklists.map((checkList, i) => (
                <OneCheckList
                    checkList={checkList}
                    key={i}
                />
            ))}
        </div>
    );
};
