import { FC } from 'react'
import { DropDown } from './DropDown'
import { CustomTextArea } from '../../../shared/ui'
import styles from './Comments.module.scss';
export const Comments:FC = () => {
    return (
        <div className={styles.CommentsCtnr}>
                <div className={styles.Comments}>
                    <DropDown text="Комментарии:" />
                    <CustomTextArea placeholder="Напишите..." height={100} width={590} variant="TextArea"/>
                </div>
                <div className={styles.Comments}>
                    <DropDown text="Описание:" />
                    <CustomTextArea placeholder="Напишите..." height={100} width={590} variant="TextArea"/>
                </div>
                <div className={styles.Comments}>
                    <DropDown text="Краткое описание:" />
                    <CustomTextArea placeholder="Напишите..." height={100} width={590} variant="TextArea"/>
                </div>
        </div>
    )
}
