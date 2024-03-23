import { FC } from "react";
import styles from "./CustomSelect.module.scss";
import { ISelect } from "./types";

export const CustomSelect: FC<ISelect> = (props) => {
    const { dataOption, name, text,width,value,change } = props;
    return (
        <select
            value={value}
            onChange={change}
            name={name}
            className={styles.CustomSelect}
            style={{ width: `${width}px` }}
        >
            <option value="" disabled selected hidden>{text}</option>
            {dataOption.map((data, i) => (
                
                <option key={i}> {data}</option>
            ))}
        </select>
    );
};
