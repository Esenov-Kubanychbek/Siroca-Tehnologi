import { FC, useState } from "react";
import { ISearch } from "./model/types";
import styles from "./SearchArray.module.scss";

export const SearchArray: FC<ISearch> = (props) => {
    const { width, name } = props;
    const [state, setState] = useState<string>("");
    return (
        <div className={styles.Main}>
            <input
                type="text"
                value={state}
                name={name}
                onChange={(e) => setState(e.target.value)}
                style={{ width: `${width - 50}px` }}
                placeholder="Напишите..."
                className={styles.Input}
            />
            <div></div>
        </div>
    );
};
