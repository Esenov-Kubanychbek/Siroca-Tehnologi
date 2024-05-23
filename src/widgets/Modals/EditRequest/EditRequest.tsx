import { FC, FormEvent, useEffect } from "react";
import styles from "./EditRequest.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "@/shared/ui";
import { editRequestApi } from "./api/editRequestApi";
import { Collapses } from "./ui";
import { IEditRequest } from "./types/types";
import { getOneRequestApi } from "../ViewRequest/api/getOneRequestApi";
import { createRequestApi } from "../CreateRequest/api/createRequestApi";
import { allUsersListApi } from "@/shared/api";

export const EditRequest: FC<IEditRequest> = (props) => {
    const { setModal, requestFrom } = props;
    const { oneRequest, getOneRequest } = getOneRequestApi();
    const fetchEdit = editRequestApi();
    const fetchCreate = createRequestApi();
    const {
        managerExists,
        companyUserExists,
        setManagerExists,
        setCompanyUserExists,
        getAllUsersList,
    } = allUsersListApi();
    useEffect(() => {
        if (fetchCreate.oneRequest.id !== 0) {
            getOneRequest(fetchCreate.oneRequest.id);
        }
    }, [fetchCreate.oneRequest]);
    useEffect(() => {
        console.log(managerExists, companyUserExists, "useEffect");
    }, [managerExists, companyUserExists]);
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
                <Collapses />
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
        </form>
    );
};
