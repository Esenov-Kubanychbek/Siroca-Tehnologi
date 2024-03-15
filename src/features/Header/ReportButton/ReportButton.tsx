import { Modal } from "antd";
import styles from "./ReportButton.module.scss";
import { FC } from "react";
import { ReportModal } from "../../../widgets";
import reportModalWindow from "./model/ReportModalWindow";

export const ReportButton: FC = () => {
    const modal = reportModalWindow();
    return (
        <>
            <div
                onClick={modal.open}
                className={styles.Report}
            >
                Cкачать отчет
            </div>
            <Modal
                bodyStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px",
                }}
                footer={null}
                width={861}
                centered
                closeIcon={false}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <ReportModal />
            </Modal>
        </>
    );
};
