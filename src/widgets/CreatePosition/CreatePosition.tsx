import { CloseSquare } from "iconsax-react"
import styles from "./CreatePosition.module.scss"
import { CustomButton, CustomInput } from "../../shared/ui"
import positionModal from "./model/PositionModal"

export const CreatePosition = () => {
    const modal = positionModal()
  return (
    <div className={styles.CreatePosition}>
        <div className={styles.Header}>
            <div className={styles.Word}>Добавить должность</div>
            <div onClick={modal.close} style={{cursor: "pointer"}}>
                <CloseSquare size={34}/>
            </div>
        </div>
        <div>
            <CustomInput placeholder="Напишите..." width={535}/>
        </div>
        <div className={styles.Buttons}>
            <div onClick={modal.close} style={{cursor: "pointer"}}>
                <CustomButton variant="Secondary" width={150} text="Отменить"/>
            </div>
            <div onClick={modal.close} style={{cursor: "pointer"}}>
                <CustomButton variant="Primary" width={150} text="Создать"/>
            </div>
        </div>
    </div>
  )
}
