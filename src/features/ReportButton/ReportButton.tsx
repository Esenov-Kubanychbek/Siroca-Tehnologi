import { Modal } from "antd";
import styles from "./ReportButton.module.scss";
import { FC } from "react";
import { ReportModal } from "../../widgets";
import { useReport } from "../../shared/hooks/modalHooks";
import { Import } from "iconsax-react";

export const ReportButton: FC = () => {
    const modal = useReport();
    return (
        <>
            <div
                onClick={modal.open}
                className={styles.Report}
            >
                Cкачать отчет
                <Import
                    size={24}
                    color="#1C6AB1"
                />
            </div>
            <Modal
                centered
                width={871}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <ReportModal />
            </Modal>
        </>
    );
};
