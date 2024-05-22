import { Modal } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { ManagerForSubtask, UserForSubtask } from "@/widgets";
import { allUsersListApi } from "@/shared/api";

interface ICreateSubTaskModals {
    forWhat: "createSubtask" | "editSubtask";
    managerModal: boolean;
    setManagerModal: Dispatch<SetStateAction<boolean>>;
    userModal: boolean;
    setUserModal: Dispatch<SetStateAction<boolean>>;
}

export const CreateSubtaskModals: FC<ICreateSubTaskModals> = (props) => {
    const { forWhat, managerModal, setManagerModal, userModal, setUserModal } = props;
    const { setUserInputState, setManagerInputState } = allUsersListApi();
    const closeManagerModal = () => {
        setManagerModal(false);
        setManagerInputState("");
    };
    const closeUserModal = () => {
        setUserModal(false);
        setUserInputState("");
        console.log("zero");
    };
    return (
        <>
            <Modal
                centered
                open={managerModal}
                onCancel={closeManagerModal}
            >
                <ManagerForSubtask
                    forWhat={forWhat}
                    setManagerModal={setManagerModal}
                />
            </Modal>
            <Modal
                centered
                open={userModal}
                onCancel={closeUserModal}
            >
                <UserForSubtask setUserModal={setUserModal} />
            </Modal>
        </>
    );
};
