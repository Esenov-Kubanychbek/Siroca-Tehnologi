import React from 'react';
import styles from './Myselect.module.scss'
export interface Iselect {
    name?:string;
    width?:string;
}

const MySelect:React.FC <Iselect> = ({width , name}) => {
    return (
        <>
            <div className={styles.dropDown} style={{width}}>
                <div className={styles.title}>
                    {name}
                </div>
                <div className={styles.drop}>
                    <img src="/public/iconsReg/arrow-down.png" alt="" />
                </div>
            </div>
        </>
    );
};

export default MySelect;