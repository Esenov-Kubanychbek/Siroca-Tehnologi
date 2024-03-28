import { FC } from "react";
import { Filter } from "iconsax-react";
import styles from "./FilterButton.module.scss";

export const FilterButton: FC = () => {
    return (
        <button
            aria-label="filter"
            className={styles.FilterButton}
        >
            <Filter
                size={34}
                variant={"Bold"}
                color="#1C6AB1"
            />
        </button>
    );
};
