import { FC } from "react";
import styles from "./AddDescription.module.scss";
import { CustomButton } from "../../../../../shared/ui";
import { descriptionApi } from "../../api/descriptionApi";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const AddDescription: FC = () => {
    const { oneRequest } = getOneRequestApi();
    const { setOpened, descriptionChange, putDescription, descriptionState } = descriptionApi();
    const saveFunc = () => {
        setOpened(false)
        putDescription(oneRequest.id)
    }
    return (
        <div className={styles.AddDescription}>
            <textarea
                placeholder="Добавьте описание"
                onChange={descriptionChange}
                value={descriptionState.description === null || undefined ? "" : descriptionState.description}
            ></textarea>
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Without"
                    width={120}
                    text="Отмена"
                    onClick={() => setOpened(false)}
                />
                <CustomButton
                    variant="Primary"
                    width={130}
                    text="Сохранить"
                    onClick={saveFunc}
                />
            </div>
        </div>
    );
};
