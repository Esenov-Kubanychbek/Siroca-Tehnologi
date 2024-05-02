import { Modal } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { ResetPassword, CreateJobTitle, SuccessModal } from "../../../..";

interface IEdituserModals {
    jobTitleModal: boolean;
    setJobTitleModal: Dispatch<SetStateAction<boolean>>;
    modalSuccess: boolean;
    setModalSuccess: Dispatch<SetStateAction<boolean>>;
    passwordModal: boolean;
    setPasswordModal: Dispatch<SetStateAction<boolean>>;
}

export const Modals: FC<IEdituserModals> = (props) => {
    const { jobTitleModal, setJobTitleModal, modalSuccess, setModalSuccess, passwordModal, setPasswordModal } = props;
    return (
        <>
            <Modal
                width={700}
                centered
                open={jobTitleModal}
                onCancel={() => setJobTitleModal(false)}
                zIndex={10}
            >
                <CreateJobTitle
                    setModal={setJobTitleModal}
                />
            </Modal>
            <Modal
                width={350}
                centered
                zIndex={11}
                open={modalSuccess}
                onCancel={() => setModalSuccess(false)}
            >
                <SuccessModal content="Изменения успешно сохранены!" />
            </Modal>
            <Modal
                width={572}
                centered
                zIndex={12}
                open={passwordModal}
                onCancel={() => setPasswordModal(false)}
            >
                <ResetPassword setModal={setPasswordModal} />
            </Modal>
        </>
    );
};
