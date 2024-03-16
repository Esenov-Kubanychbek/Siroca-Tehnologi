import { FC } from "react";
import styles from "./ButtonRequest.module.scss";
import { Edit } from "iconsax-react";

export const ButtonRequest: FC = () => {
    return (
        <button className={styles.ButtonRequest}>
            Создать заявку
            <Edit
                size={24}
                color="white"
            />
        </button>
    );
};
