import styles from "./SearchInput.module.scss";
import { ChangeEvent, FC } from "react";
import { CloseSquare, SearchNormal1 } from "iconsax-react";
 interface input {
inputState?: string;
change?:(e: ChangeEvent<HTMLInputElement>) => void;
click?: () => void;
 }

export const SearchInput: FC<input> = ({inputState, change, click}) => {
    
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
                style={{ display: inputState ? "block" : "none" }}
                className={styles.Close}
                onClick={click}
            />
        </div>
    );
};
