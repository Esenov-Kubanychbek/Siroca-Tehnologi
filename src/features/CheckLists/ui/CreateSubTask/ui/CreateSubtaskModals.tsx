import { Modal } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { ManagerForSubtask, UserForSubtask } from "../../../../../widgets";

interface ICreateSubTaskModals {
    managerModal: boolean;
    setManagerModal: Dispatch<SetStateAction<boolean>>;
    userModal: boolean;
    setUserModal: Dispatch<SetStateAction<boolean>>;
}

export const CreateSubtaskModals: FC<ICreateSubTaskModals> = (props) => {
    const { managerModal, setManagerModal, userModal, setUserModal } = props;
    return (
        <>
            <Modal
                centered
                open={managerModal}
                onCancel={() => setManagerModal(false)}
            >
                <ManagerForSubtask setManagerModal={setManagerModal} />
            </Modal>
            <Modal
                centered
                open={userModal}
                onCancel={() => setUserModal(false)}
            >
                <UserForSubtask setUserModal={setUserModal} />
            </Modal>
        </>
    );
};
