import { FC } from "react";
import styles from "./CustomSelect.module.scss";
import { ISelect } from "./types";

export const CustomSelect: FC<ISelect> = (props) => {
    const { dataOption, name, text, width, value, change, id } = props;
    return (
        <select
            id={id}
            value={value}
            onChange={change}
            name={name}
            className={styles.CustomSelect}
            style={{ width: `${width}px` }}
        >
            <option
                disabled
                defaultValue={text}
                hidden
            ></option>
            {dataOption !== undefined && dataOption.map((data, i) => <option key={i}> {data}</option>)}
        </select>
    );
};
