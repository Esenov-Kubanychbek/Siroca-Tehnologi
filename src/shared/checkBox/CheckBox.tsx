import React from 'react';
import styles from './checkBox.module.scss'
interface Icheck{
    name:string;
}

const CheckBox:React.FC <Icheck>= ({name}) => {
    return (
        <>
            <label className={styles.container}>
                <input type="checkbox"/>
                <span className={styles.checkMark}></span>
                {name}
            </label>
        </>
    );
};

export default CheckBox;