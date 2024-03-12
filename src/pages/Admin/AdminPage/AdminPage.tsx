import styles from "./AdminPage.module.scss";
import { Dashboard, Header, ListContainer, ReportModal } from "../../../widgets";
import { useState } from "react";

export const AdminPage = () => {
    const [repModalwin, setRepModalWin] = useState(false);
    const [isClickedFind, setIsClickedFind] = useState(false);
    const openRepModal = () => {
        setRepModalWin(!repModalwin);
    };
    const closeRepModal = () => {
        setRepModalWin(false);
    };
    return (
        <div className={styles.AdminPage}>
            <Dashboard />
            <div className={styles.Inner}>
                <Header reportModalOpenFunc={openRepModal} />
                {isClickedFind ? null : <ListContainer />}
                {repModalwin ? <ReportModal onClose={closeRepModal} /> : null}
            </div>
        </div>
    );
};
