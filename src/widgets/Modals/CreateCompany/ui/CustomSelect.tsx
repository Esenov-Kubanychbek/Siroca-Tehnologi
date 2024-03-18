import { FC } from "react";
import styles from "./CustomSelect.module.scss";
import { ISelect } from "./types";

export const CustomSelect: FC<ISelect> = (props) => {
    const { dataOption, name, placeholder } = props;
    console.log(dataOption);
    return (
        <select
            defaultValue={placeholder}
            name={name}
            className={styles.CustomSelect}
        >
            {dataOption.map((data, i) => (
                <option key={i}> {data}</option>
            ))}
        </select>
    );
};
