import { useAppDispatch } from "../../../app/store/hooks";
import { closeModal } from "../../slices/ModalSlice";
import styles from "./ModalBlack.module.scss";

export const ModalBlack = () => {
    const dispatch = useAppDispatch();
    return (
        <div
            onClick={() => dispatch(closeModal())}
            className={styles.ModalBlack}
        />
    );
};
