import { Filter } from "iconsax-react";
import styles from "./FilterButton.module.scss";

export const FilterButton = () => {
    return (
        <div className={styles.FilterIcon}>
            <Filter
                size={34}
                variant={"Bold"}
                color="#1C6AB1"
            />
        </div>
    );
};
