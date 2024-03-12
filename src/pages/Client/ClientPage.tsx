import styles from "./ClientPage.module.scss";
import { Header, ReportModal, ListContainer } from "../../widgets";
import ClientProfile from "../../widgets/Profiles/ClientProfile/ClientProfile";
import { useAppSelector } from "../../app/store/hooks";
import { ModalBlack } from "../../shared/ui";
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
    const modal = useAppSelector((state) => state.modal);

    return (
        <div className={styles.ClientPage}>
            <div className={styles.Inner}>
                <Header reportModalOpenFunc={openRepModal} />
                {isClickedFind ? null : <ListContainer />}
                {repModalwin ? <ReportModal onClose={closeRepModal} /> : null}
            </div>
            <ClientProfile />
            {modal.isModalOpen ? <ModalBlack /> : ""}
        </div>
    );
};
