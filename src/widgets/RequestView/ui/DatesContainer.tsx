import { FC } from 'react'
import styles from './DatesContainer.module.scss'
import { DropDown } from '../../CreateRequest/ui/DropDown'
export const DatesContainer:FC = () => {
    return (
        <div className={styles.DatesContainer}>
                    <DropDown text="Даты:" />
                    <div className={styles.Dates}>
                        <div className={styles.Name}>
                            <div className={styles.Text}>Дата начала:</div>
                            
                        </div>
                        <div className={styles.Name}>
                            <div className={styles.Text}>Срок выполнения:</div>
                            
                        </div>
                        <div className={styles.Name}>
                            <div className={styles.Text}>Дата отправки:</div>
                            
                        </div>
                        <div className={styles.Name}>
                            <div className={styles.Text}>Дата окончания:</div>
                            
                        </div>
                        <div className={styles.Name}>
                            <div className={styles.Text}>Дата подачи:</div>
                            
                        </div>
                        <div className={styles.Name}>
                            <div className={styles.Text}>Дата утверждения:</div>
                            
                        </div>
                        <div className={styles.Name}>
                            <div className={styles.Text}>Статус оплаты:</div>
                            
                        </div>
                    </div>
                </div>
    )
}
