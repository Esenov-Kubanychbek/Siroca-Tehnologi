import styles from "./SearchInput.module.scss";
import { FC } from "react";
import { CloseSquare, SearchNormal1 } from "iconsax-react";
import { ISearchInput } from "./types/types";

export const SearchInput: FC<ISearchInput> = (props) => {
    const { value, onChange, onKeyDown, closeState, closeFunc } = props;
    return (
        <div className={styles.Search}>
            <SearchNormal1
                color="#929292"
                size={24}
            />
            <input
                className={styles.Input}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <CloseSquare
                variant="Bold"
                color="#3B3B3B"
                size={24}
                style={{ display: closeState ? "block" : "none" }}
                className={styles.Close}
                onClick={closeFunc}
            />
        </div>
    );
};
