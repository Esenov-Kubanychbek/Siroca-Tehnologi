import { FC, FormEvent, useEffect, useState } from "react";
import styles from "./EditRequest.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "@/shared/ui";
import { editRequestApi } from "./api/editRequestApi";
import { Collapses } from "./ui";
import { IEditRequest } from "./types/types";
import { getOneRequestApi } from "../ViewRequest/api/getOneRequestApi";
import { createRequestApi } from "../CreateRequest/api/createRequestApi";
import { allUsersListApi } from "@/shared/api";
import { Modal } from "antd";
import { CreateChecklist } from "../CreateChecklist/CreateChecklist";

export const EditRequest: FC<IEditRequest> = (props) => {
    const { setModal, requestFrom } = props;
    const { oneRequest, getOneRequest } = getOneRequestApi();
    const fetchEdit = editRequestApi();
    const fetchCreate = createRequestApi();
    const [checklistModal, setChecklistModal] = useState<boolean>(false);
    const { managerExists, companyUserExists, setManagerExists, setCompanyUserExists, getAllUsersList } =
        allUsersListApi();
    useEffect(() => {
        if (fetchCreate.oneRequest.id !== 0) {
            getOneRequest(fetchCreate.oneRequest.id);
        }
    }, [fetchCreate.oneRequest]);
    useEffect(() => {
        fetchEdit.setRequestData(oneRequest);
        console.log(fetchEdit.requestState);
    }, [oneRequest]);
    useEffect(() => {
        getAllUsersList();
    }, []);
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!managerExists && !companyUserExists) {
            setManagerExists(false);
            setCompanyUserExists(false);
        } else if (!managerExists) {
            setManagerExists(false);
        } else if (!companyUserExists) {
            setCompanyUserExists(false);
        } else if (managerExists && companyUserExists) {
            fetchEdit.editRequest();
            setModal(false);
            fetchCreate.resetOneRequest();
        }
    };
    return (
        <form onSubmit={postTrim}>
            <div className={styles.Container}>
                <div className={styles.Top}>
                    <div className={styles.TextTop}>
                        Заявка - {requestFrom === "CreateRequest" ? fetchCreate.oneRequest.company : oneRequest.company}{" "}
                        /
                        <span>
                            {requestFrom === "CreateRequest"
                                ? fetchCreate.oneRequest.task_number
                                : oneRequest.task_number}
                        </span>
                    </div>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setModal(false)}
                        size={34}
                    />
                </div>
                <Collapses setChecklistModal={setChecklistModal} />
                <div className={styles.Buttons}>
                    <CustomButton
                        type="button"
                        onClick={() => setModal(false)}
                        variant="Secondary"
                        width={150}
                        text="Отменить"
                    />
                    <CustomButton
                        type="submit"
                        variant="Primary"
                        width={150}
                        text="Создать"
                    />
                </div>
            </div>
            <Modal
                width={460}
                centered
                open={checklistModal}
                onCancel={() => setChecklistModal(false)}
            >
                <CreateChecklist setChecklistModal={setChecklistModal} />
            </Modal>
        </form>
    );
};
