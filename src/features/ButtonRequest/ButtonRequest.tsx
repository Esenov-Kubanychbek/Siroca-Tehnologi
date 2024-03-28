import { FC } from "react";
import styles from "./ButtonRequest.module.scss";
import { Edit } from "iconsax-react";
import { useRequest } from "../../shared/hooks/modalHooks";

export const ButtonRequest: FC = () => {
    const modal = useRequest();
    return (
        <button
            onClick={modal.open}
            className={styles.ButtonRequest}
        >
            Создать заявку
            <Edit
                size={24}
                color="white"
            />
        </button>
    );
};
