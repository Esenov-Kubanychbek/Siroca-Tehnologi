import { HeaderBottom, HeaderTop } from "../../widgets";
import styles from "./ClientPage.module.scss";
import { FC } from "react";

export const ClientPage: FC = () => {
    return (
        <div className={styles.ClientPage}>
            <HeaderTop role="client" />
            <HeaderBottom role="client" />
        </div>
    );
};
