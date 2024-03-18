import { FC } from 'react'
import styles from './CheckList.module.scss';
import { Timer1 } from 'iconsax-react';
import { Checkbox } from 'antd';
export const CheckList:FC = () => {
    return (
            <div className={styles.CheckList}>
                <div className={styles.CheckContainer}>
                    <Checkbox/>
                    <div className={styles.Text1}>Заявка выглядит полной и информативной.</div>
                    <div className={styles.CheckTime}>
                        <div className={styles.Text2}>Аширжанова У.</div>
                        <div className={styles.Timer}>
                            <Timer1 size={24}/> 
                            <div className={styles.Text}>20 март.</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
