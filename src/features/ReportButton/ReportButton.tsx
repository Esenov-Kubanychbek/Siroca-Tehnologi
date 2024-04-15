import { Modal } from "antd";
import styles from "./ReportButton.module.scss";
import { FC, useState } from "react";
import { ReportModal } from "../../widgets";
import { Import } from "iconsax-react";

export const ReportButton: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <>
            <div
                onClick={() => setModal(true)}
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
                open={modal}
                onCancel={() => setModal(false)}
            >
                <ReportModal setModal={setModal} />
            </Modal>
        </>
    );
};
