import React from 'react';
import styles from'./ButtonSave.module.scss'

interface IbuttonSave{
    text:string;
    color?:string;
    backgroundColor?:string;
}

const ButtonSave:React.FC <IbuttonSave>= ({text,color,backgroundColor}) => {
    return (
        <>
            <button className={styles.Button} style={{color,backgroundColor}}>{text}</button>
        </>
    );
};

export default ButtonSave;