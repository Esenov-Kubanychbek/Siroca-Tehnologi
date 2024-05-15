import { Modal } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { ManagerForSubtask, UserForSubtask } from "../../../../../widgets";
import { allManagersListApi } from "@/widgets/Modals/ManagerForSubtask/api/allManagersListApi";

interface ICreateSubTaskModals {
    forWhat: "createSubtask" | "editSubtask"
    managerModal: boolean;
    setManagerModal: Dispatch<SetStateAction<boolean>>;
    userModal: boolean;
    setUserModal: Dispatch<SetStateAction<boolean>>;
}

export const CreateSubtaskModals: FC<ICreateSubTaskModals> = (props) => {
    const { forWhat, managerModal, setManagerModal, userModal, setUserModal } = props;
    const {setManagerState} = allManagersListApi()
    const closeManagerModal = () => {
        setManagerModal(false)
        setManagerState("")
    }
    return (
        <>
            <Modal
                centered
                open={managerModal}
                onCancel={closeManagerModal}
            >
                <ManagerForSubtask forWhat={forWhat} setManagerModal={setManagerModal} />
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
