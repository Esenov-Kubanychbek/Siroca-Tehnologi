import { FC } from "react";
import styles from "./ButtonCreate.module.scss";
import { AddSquare } from "iconsax-react";

export const ButtonCreate: FC<{
    onClick?: () => void;
    name?: string;
}> = ({ name, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styles.ButtonCreate}
        >
            {name}
            <AddSquare
                size={24}
            />
        </button>
    );
};
