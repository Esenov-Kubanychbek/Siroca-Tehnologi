import "../Style.scss";
import { FC } from "react";
import styles from "./ShortDescription.module.scss";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const ShortDescription: FC = () => {
    const fetchData = getOneRequestApi();
    return <p className={styles.ShortDescription}>{fetchData.oneRequest.short_description}</p>;
};
