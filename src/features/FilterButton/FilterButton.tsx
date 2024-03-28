import { Filter } from "iconsax-react";
import styles from "./FilterButton.module.scss";
import { FC } from "react";

export const FilterButton: FC = () => {
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
