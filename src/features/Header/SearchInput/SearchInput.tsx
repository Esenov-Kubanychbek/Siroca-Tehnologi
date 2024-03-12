import { useState } from "react";
import styles from "./SearchInput.module.scss";
import { CloseSquare, SearchNormal1 } from "iconsax-react";

export const SearchInput = () => {
    const [state, setState] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>("");
    return (
        <div className={styles.Search}>
            <SearchNormal1
                color="#929292"
                size={24}
            />
            <input
                value={inputState}
                onClick={() => setState(true)}
                onChange={(e) => setInputState(e.target.value)}
            />
            <CloseSquare
                variant="Bold"
                color="#3B3B3B"
                size={24}
                style={{ display: state ? "block" : "none" }}
                className={styles.Close}
                onClick={() => setInputState("")}
            />
        </div>
    );
};
