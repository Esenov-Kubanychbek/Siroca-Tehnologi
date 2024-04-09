import { FC } from "react";
import styles from "./ButtonCreate.module.scss";
import { AddSquare } from "iconsax-react";

export const ButtonCreate: FC<{
    onClick?: () => void;
    name?: string;
    height?: number;
    background?: string;
    color?: string;
}> = ({ name, height, background, color, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styles.ButtonCreate}
            style={{ height: `${height}px`, background }}
        >
            {name}
            <AddSquare
                size={24}
                color={color}
            />
        </button>
    );
};
