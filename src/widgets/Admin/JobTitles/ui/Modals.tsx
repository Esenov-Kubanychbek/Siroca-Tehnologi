import { Modal } from "antd";
import { FC } from "react";
import { CreateJobTitle } from "../../../Modals/CreateJobTitle/CreateJobTitle";
import { SuccessModal } from "../../../Modals/SuccessModal/SuccessModal";
import { ReadyModal } from "../../../Modals/ReadyModal/ReadyModal";
import { jobTitleApi } from "../api/jobTitleApi";
import { IModalTypes } from "../types/types";

export const Modals: FC<IModalTypes> = (props) => {
    const { position, modal, setModal, modalReady, setModalReady, modalSuccess, setModalSuccess } = props;
    const fetchData = jobTitleApi();
    return (
        <>
            <Modal
                centered
                width={700}
                open={modal}
                onCancel={() => setModal(false)}
                zIndex={10}
            >
                <CreateJobTitle setModal={setModal} />
            </Modal>
            <Modal
                centered
                width={350}
                open={modalSuccess}
                onCancel={() => setModalSuccess(false)}
                zIndex={11}
            >
                <SuccessModal content="Должность добавлена!" />
            </Modal>
            <Modal
                centered
                width={550}
                open={modalReady}
                onCancel={() => setModalReady(false)}
                zIndex={12}
            >
                <ReadyModal
                    no={() => setModalReady(false)}
                    yes={() => {
                        fetchData.deleteJobTitle(position);
                        setModalReady(false);
                    }}
                    content="Вы уверены? Данная должность удалится безвозвратно"
                />
            </Modal>
        </>
    );
};
