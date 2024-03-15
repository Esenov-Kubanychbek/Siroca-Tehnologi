import styles from "./ClientPage.module.scss";
import { Header, ReportModal, ListContainer } from "../../widgets";
import { useState } from "react";


export const ClientPage = () => {
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
        </div>
    );
};
