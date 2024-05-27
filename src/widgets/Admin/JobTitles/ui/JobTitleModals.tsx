import { Modal } from "antd";
import { FC } from "react";
import { CreateJobTitle } from "../../../Modals/CreateJobTitle/CreateJobTitle";
import { ReadyModal } from "../../../Modals/ReadyModal/ReadyModal";
import { jobTitleApi } from "../api/jobTitleApi";
import { IJobTitleModal } from "../types/types";

export const JobTitleModals: FC<IJobTitleModal> = (props) => {
    const { position, modal, setModal, modalReady, setModalReady } = props;
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
                >
                    <div>
                        <p>Вы уверены?</p>
                        <p>Данная должность будет удалена безвозвратно!</p>
                    </div>
                </ReadyModal>
            </Modal>
        </>
    );
};
