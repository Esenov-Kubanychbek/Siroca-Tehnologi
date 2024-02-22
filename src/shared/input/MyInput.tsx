import React from 'react';
import  './MyInput.scss'
export interface Iinput {
    placeholder:string;
    className:string;
}

const MyInput:React.FC <Iinput> = ({placeholder,className}) => {

    return (
        <>
            <input type="text" className={className} placeholder={placeholder}/>
        </>
    );
};

export default MyInput;