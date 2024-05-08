import { ArrowDown2 } from "iconsax-react";
import styles from "./CustomSelect.module.scss";
import { FC } from "react";
import { ISelect } from "./types/types";

export const CustomSelect: FC<ISelect> = (props) => {
    const { width, name } = props;
    return (
        <select
            className={styles.DropDown}
            style={{ width: `${width}px` }}
        >
            <div className={styles.Title}>{name}</div>
            <div className={styles.Drop}>
                <ArrowDown2 />
            </div>
        </select>
    );
};
