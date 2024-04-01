import styles from "./SearchInput.module.scss";
import { ChangeEvent, FC, useState } from "react";
import { CloseSquare, SearchNormal1 } from "iconsax-react";

export const SearchInput: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>("");
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setState(true);
        setInputState(e.target.value);
    };
    return (
        <div className={styles.Search}>
            <SearchNormal1
                color="#929292"
                size={24}
            />
            <input
                className={styles.Input}
                value={inputState}
                onChange={change}
            />
            <CloseSquare
                variant="Bold"
                color="#3B3B3B"
                size={24}
                style={{ display: state ? "block" : "none" }}
                className={styles.Close}
                onClick={() => {
                    setState(false);
                    setInputState("");
                }}
            />
        </div>
    );
};