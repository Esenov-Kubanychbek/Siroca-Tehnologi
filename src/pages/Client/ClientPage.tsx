import styles from "./ClientPage.module.scss";
import { Header } from "../../widgets";


export const ClientPage = () => {
    return (
        <div className={styles.ClientPage}>
            <Header role="client" />
        </div>
    );
};
