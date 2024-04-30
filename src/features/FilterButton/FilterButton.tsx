import { FC, useState } from "react";
import { Filter } from "iconsax-react";
import styles from "./FilterButton.module.scss";
import { getRequestApi } from "../../widgets/RequestList/api/getRequestApi";

interface IFilterButton {
    onClick: () => void;
}

export const FilterButton: FC<IFilterButton> = ({ onClick }) => {
<<<<<<< HEAD
    const fetchRequest = getRequestApi();

    return (
        <button
            aria-label="filter"
            className={fetchRequest.isFilterOpen ? styles.FilterButtonOpen : styles.FilterButton}
            onClick={() => {
                onClick();
                fetchRequest.setIsOpen();
=======
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <button
            aria-label="filter"
            className={isOpen ? styles.FilterButtonOpen : styles.FilterButton}
            onClick={() => {
                onClick();
                setIsOpen(!isOpen);
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
            }}
        >
            <Filter
                size={34}
                variant={"Bold"}
<<<<<<< HEAD
                color={`${fetchRequest.isFilterOpen ? "white" : "#1C6AB1"}`}
=======
                color={`${isOpen ? "white" : "#1C6AB1"}`}
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
            />
        </button>
    );
};
