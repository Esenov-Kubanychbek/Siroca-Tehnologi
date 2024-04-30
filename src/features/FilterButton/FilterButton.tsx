import { FC } from "react";
import { Filter } from "iconsax-react";
import styles from "./FilterButton.module.scss";
import { getRequestApi } from "../../widgets/RequestList/api/getRequestApi";

interface IFilterButton {
    onClick: () => void;
}

export const FilterButton: FC<IFilterButton> = ({ onClick }) => {
    const fetchRequest = getRequestApi();

    return (
        <button
            aria-label="filter"
            className={fetchRequest.isFilterOpen ? styles.FilterButtonOpen : styles.FilterButton}
            onClick={() => {
                onClick();
                fetchRequest.setIsOpen();
            }}
        >
            <Filter
                size={34}
                variant={"Bold"}
                color={`${fetchRequest.isFilterOpen ? "white" : "#1C6AB1"}`}
            />
        </button>
    );
};
