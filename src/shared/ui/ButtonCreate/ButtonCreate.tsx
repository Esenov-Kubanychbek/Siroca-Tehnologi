import { FC } from "react";
import styles from "./ButtonCreate.module.scss";
import { AddSquare } from "iconsax-react";

export const ButtonCreate: FC<{ name?: string; height?: number; background?: string; color?: string }> = ({
    name,
    height,
    background,
    color,
}) => {
    return (
        <button
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
