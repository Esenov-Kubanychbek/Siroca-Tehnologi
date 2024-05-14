import { Timer1 } from "iconsax-react";
import { FC, useEffect, useState } from "react";
import styles from "./OneCheckList.module.scss";
import { ICheckList, checkListApi } from "../../api/checkListApi";
import { deleteCheckListApi } from "../../api/deleteCheckListApi";
import { getOneRequestApi } from "../../../../widgets/Modals/ViewRequest/api/getOneRequestApi";

interface IOneCheckList {
    checkList: ICheckList;
}

export const OneCheckList: FC<IOneCheckList> = (props) => {
    const {checkList} = props
    const {oneRequest, getOneRequest} = getOneRequestApi()
    const {deleteCheckList} = deleteCheckListApi()
    const [isCheked, setIsChecked] = useState<(boolean)[]>([])
   
    const {setComplited, setSubCompleted} = checkListApi()


    const [complitedCList, setComplitedList] = useState<boolean>(false)
    const beetwinComplited = () => {
        const filtered = checkList.subtasks ? checkList.subtasks.map((el) => {
           return el.completed ? el.completed : false
        }) : []
        setComplitedList(checkList.completed ? checkList.completed : false)
        setIsChecked(filtered)
    }
    
    const deleteFunc = () => {
        getOneRequest(oneRequest.id)
        deleteCheckList(checkList.id)
    }
    

    const setComplit = (event: {i: number, id: number | undefined}) => {
        setSubCompleted({id: event.id, obj: {completed: !isCheked[event.i]}})
        const timeState = [...isCheked]
        timeState[event.i] = !timeState[event.i]
        setIsChecked(timeState)
        console.log(isCheked[event.i]);
    }

    const setChecklistComplited = () => {
        const timeState = [...isCheked]
        setComplited({id: checkList.id, obj: {completed: !complitedCList}})
        setComplitedList(!complitedCList)
        for (let index = 0; index < timeState.length; index++) {
            timeState[index] = !complitedCList
        }
        setIsChecked(timeState)   
    }

    useEffect(() => {
        beetwinComplited()
    }, [checkList])
    useEffect(() => {
        console.log(complitedCList);
    }, [complitedCList])
    
    
    return (
        <div className={styles.SubTaskList}>
            <div className={styles.Header}>
                <div className={styles.HeaderLeft}>
                    <input readOnly type="checkbox" checked={complitedCList} onChange={setChecklistComplited}/>
                    {checkList.name}
                </div>
                <button onClick={deleteFunc}>Удалить</button>
            </div>
            {checkList.subtasks !== undefined ? checkList.subtasks.map((card, i) => (
                <div
                    className={styles.SubTask}
                    key={i}
                >
                    <div className={styles.Left}>
                        <input readOnly type="checkbox" checked={isCheked[i]} onChange={() => setComplit({i: i, id: card.id})}/>
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
            )) : null }
        </div>
    );
};
