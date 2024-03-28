import styles from "./ClientPage.module.scss";
import { Header } from "../../widgets";
import { BASE_URL } from "../../shared/variables/variables";
import { FC } from "react";

export const ClientPage: FC = () => {
    console.log(BASE_URL);
    return (
        <div className={styles.ClientPage}>
            <Header role="client" />
        </div>
    );
};
