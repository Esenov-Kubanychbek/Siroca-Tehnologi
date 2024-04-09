import { FC } from "react";
import styles from "./AddButton.module.scss";
import { AddSquare } from "iconsax-react";

export const AddButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <div
            className={styles.AddButton}
            onClick={onClick}
        >
            <AddSquare
                size={24}
                color="white"
            />
        </div>
    );
};
