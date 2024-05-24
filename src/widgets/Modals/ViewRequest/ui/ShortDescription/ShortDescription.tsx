import { FC } from "react";
import styles from "./ShortDescription.module.scss";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const ShortDescription: FC = () => {
    const { oneRequest } = getOneRequestApi();
    const length: number = oneRequest.short_description ? oneRequest.short_description.length : 0;
    return (
        <div className={styles.ShortDescription}>
            {oneRequest.short_description === null ? <div>Напишите...</div> : oneRequest.short_description}
            <p>{length}/60</p>
        </div>
    );
};
