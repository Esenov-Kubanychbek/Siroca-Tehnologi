import { FC } from "react";
import styles from "./CustomSelect.module.scss";
import { ISelect } from "./types";

export const CustomSelect: FC<ISelect> = (props) => {
    const { dataOption, name, placeholder, change } = props;
    return (
        <select
            defaultValue={placeholder}
            name={name}
            className={styles.CustomSelect}
            onChange={change}
        >
        
                {dataOption !== undefined ? dataOption.map((data, i) => (

                    <option key={i} > {data}</option>
                )) : <option>Нету</option>} 
        </select>
    );
};
