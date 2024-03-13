import { CloseSquare } from "iconsax-react"
import styles from './CreateCompamy.module.scss'
import { CustomButton, CustomInput } from "../../shared/ui"
import { CustomSelect } from "./ui/CustomSelect"
import companiesModal from "../Admin/Companies/CompaniesModal"

export const CreateCompamy = () => {
    const data:string[] = ['Abu', 'Aman', 'Kuba', 'Daler']
    const modal = companiesModal()
    return (
        <div className={styles.CreateCompamy}>
            <div>
                <div className={styles.blockOne}>
                    <div>Создание компании</div>
                    <div onClick={modal.close}>
                    <CloseSquare size={32} />
                    </div>
                </div>
                <div className={styles.blockTwo}>
                    <div>
                        <label htmlFor="">Название компании</label>
                        <CustomInput placeholder="Напишите..." width={246}/>
                    </div>
                    <div>
                        <label htmlFor="">Страна</label>
                        <CustomInput placeholder="Напишите..." width={246}/>
                    </div>
                </div>
                <div className={styles.blockTwo}>
                    <div>
                        <label htmlFor="">Краткий код</label>
                        <CustomInput placeholder="Напишите..." width={246}/>
                    </div>
                    <div>
                        <label htmlFor="">Домен</label>
                        <CustomInput placeholder="Напишите..." width={246}/>
                    </div>  
                </div>
                <div className={styles.blockTwo}>
                    <div>
                        <label htmlFor="sel">Ответственный менеджер</label><br />
                        <CustomSelect name="sel" placeholder="Выбрать" dataOption={data}/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div onClick={modal.close}>
                    <CustomButton variant="Secondary" width={150} text="Отменить"/>
                    </div>
                    <div onClick={modal.close}>
                    <CustomButton variant="Primary" width={150} text="Создать"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


