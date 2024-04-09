import { FC } from "react";
import { Filter } from "iconsax-react";
import styles from "./FilterButton.module.scss";

interface IFilterButton {
    onClick: () => void;
}

export const FilterButton: FC<IFilterButton> = ({ onClick }) => {
    return (
        <button
            aria-label="filter"
            className={styles.FilterButton}
            onClick={onClick}
        >
            <Filter
                size={34}
                variant={"Bold"}
                color="#1C6AB1"
            />
        </button>
    );
};
