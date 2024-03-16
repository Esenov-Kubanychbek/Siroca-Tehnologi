import { FC } from "react";
import styles from "./AddButton.module.scss";
import { AddSquare } from "iconsax-react";

export const AddButton: FC = () => {
    return (
        <div className={styles.AddButton}>
            <AddSquare
                size={24}
                color="#1C6AB1"
            />
        </div>
    );
};
