import { FC } from "react";
import styles from "./ButtonCreate.module.scss";
import { AddSquare } from "iconsax-react";

export const ButtonCreate: FC<{ name?: string }> = ({ name }) => {
    return (
        <button className={styles.ButtonCreate}>
            {name}
            <AddSquare
                size={24}
                color="white"
            />
        </button>
    );
};
