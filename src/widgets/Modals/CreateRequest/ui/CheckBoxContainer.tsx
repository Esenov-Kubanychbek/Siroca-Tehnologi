import { FC } from 'react'
import styles from './CheckBoxContainer.module.scss';
import { DropDown } from './DropDown';
import { CheckBox, CustomButton, CustomInput, CustomTextArea, Date } from '../../../../shared/ui';
import { CustomSelect } from '../../CreateCompamy/ui/CustomSelect';
import { ButtonCreate } from '../../../../shared/ui/ButtonCreate/ButtonCreate';

export const CheckBoxContainer:FC = () => {
    const data: string[] = ["Выбрать"];
    return (
        <div className={styles.CheckList}>
            <DropDown text="Чек листы:"/>
            <div className={styles.CheckContainer}>
                <CheckBox/>
                <div className={styles.NameCheck}>
                    <CustomInput background="none" width={320} height={44} placeholder="Наименования"/>
                    <CustomButton variant="Application" width={100} text="Удалить"/>
                </div>
            </div>
            <div className={styles.DesContainer}>
                <CheckBox/>
                <div className={styles.Description}>
                    <CustomTextArea placeholder="Описание..." height={60} width={535} variant="AreaDes"/>
                    <div className={styles.Choose}>
                        <CustomSelect 
                            name="sel"
                            placeholder="Выбрать"
                            dataOption={data}
                        />
                        <Date text="" variant="DateApplication"/>
                    </div>
                    <div className={styles.BtnGroup}>
                        <div className={styles.Btn}>
                            <CustomButton 
                                variant="Request" 
                                text="Создать" 
                                width={120}
                            />
                            <ButtonCreate 
                                height={44}
                                background="#A8A8A8"
                                color="#252525"
                            />
                        </div>
                        <CustomButton 
                            variant="Request" 
                            text="Добавить элемент" 
                            width={180}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
