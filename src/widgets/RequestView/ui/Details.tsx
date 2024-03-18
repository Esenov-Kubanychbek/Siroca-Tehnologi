import { FC } from 'react'
import { DropDown } from '../../Modals/CreateRequest/ui/DropDown'
import styles from './Details.module.scss';

export const Details:FC = () => {
    return (
        <div className={styles.Details}>
                    <DropDown text="Детали заявки:" />
                    <div className={styles.Name}>
                        <div className={styles.Text}>Название заявки:</div>
                        
                    </div>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Название компании:</div>
                        
                    </div>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Приоритетность заявки:</div>
                        
                    </div>
                    <div className={styles.Name}>
                        <div className={styles.Text}>Статус заявки:</div>
                        
                    </div>
                </div>
    )
}
