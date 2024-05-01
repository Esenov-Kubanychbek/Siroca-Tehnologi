import { TickSquare, Timer1 } from "iconsax-react";
import { FC } from "react";
import styles from "./OneCheckList.module.scss";
import { ICheckList } from "../../api/checkListApi";
import { deleteCheckListApi } from "../../api/deleteCheckListApi";
import { getOneRequestApi } from "../../../../widgets/Modals/ViewRequest/api/getOneRequestApi";

interface IOneCheckList {
    checkList: ICheckList
}

export const OneCheckList: FC<IOneCheckList> = (props) => {
    const {checkList} = props
    const {oneRequest, getOneRequest} = getOneRequestApi()
    const {deleteCheckList} = deleteCheckListApi()
    const deleteFunc = () => {
        deleteCheckList(checkList.id)
        getOneRequest(oneRequest.id)
    }
    return (
        <div className={styles.SubTaskList}>
            <div className={styles.Header}>
                <div className={styles.HeaderLeft}>
                    <TickSquare color="#5C5C5C" />
                    {checkList.name}
                </div>
                <button onClick={deleteFunc}>Удалить</button>
            </div>
            {checkList.subtasks !== undefined ? checkList.subtasks.map((card, i) => (
                <div
                    className={card.completed ? styles.SubTaskChecked : styles.SubTask}
                    key={i}
                >
                    <div className={styles.Left}>
                        {card.completed === true ? (
                            <TickSquare
                                variant="Bold"
                                color="#1C6AB1"
                                size={28}
                                cursor={"pointer"}
                            />
                        ) : (
                            <div className={styles.NotChecked} />
                        )}
                        <p>{card.text}</p>
                    </div>
                    <div className={styles.Right}>
                        <span>{card.manager}</span>
                        <div>
                            <Timer1 />
                            <p>{card.deadline}</p>
                        </div>
                    </div>
                    <div className={styles.Line} />
                </div>
            )) : null }
        </div>
    );
};
