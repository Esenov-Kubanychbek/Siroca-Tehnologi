import { Modal } from "antd";
import styles from "./ReportButton.module.scss";
import { FC, useState } from "react";
import { ReportModal } from "../../widgets";
<<<<<<< HEAD
import { Import } from "iconsax-react";
=======
import { ImportCurve } from "iconsax-react";
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc

export const ReportButton: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <>
            <div
                onClick={() => setModal(true)}
                className={styles.Report}
            >
<<<<<<< HEAD
                <Import
                    size={34}
                    color="#1C6AB1"
=======
                <ImportCurve
                    size={27}
                    color="white"
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
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
