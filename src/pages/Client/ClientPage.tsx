import styles from "./ClientPage.module.scss";
<<<<<<< HEAD
import { Header } from "../../widgets";
=======
import { Header, ReportModal, ListContainer } from "../../widgets";
import { useState } from "react";
>>>>>>> 8104efaa6d4bb39d6d03a40ef7faa99cd8a87fb6


export const ClientPage = () => {
<<<<<<< HEAD
    return (
        <div className={styles.ClientPage}>
            <Header role="client" />
=======
    const [repModalwin, setRepModalWin] = useState(false);
    const [isClickedFind] = useState(false);
    const openRepModal = () => {
        setRepModalWin(!repModalwin);
    };
    const closeRepModal = () => {
        setRepModalWin(false);
    };

    return (
        <div className={styles.ClientPage}>
            <div className={styles.Inner}>
                <Header reportModalOpenFunc={openRepModal} />
                {isClickedFind ? null : <ListContainer />}
                {repModalwin ? <ReportModal onClose={closeRepModal} /> : null}
            </div>
>>>>>>> 8104efaa6d4bb39d6d03a40ef7faa99cd8a87fb6
        </div>
    );
};
