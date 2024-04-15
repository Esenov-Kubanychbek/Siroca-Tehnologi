import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./CreateRequest.module.scss";
import { ICreateRequest, createRequestApi } from "./api/createRequestApi";
import { useEditRequest, useCreateRequest } from "../../../shared/hooks/modalHooks";
import { CloseSquare } from "iconsax-react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { Modal } from "antd";
import { EditRequest } from "../..";
import { idRoles } from "../../../pages/MainPage/api/idRoles";

export const CreateRequest: FC = () => {
    const modal = useCreateRequest();
    const editModal = useEditRequest();
    const fetchData = createRequestApi();
    const [requestState, setRequestState] = useState<ICreateRequest>({
        title: "",
        company: "",
    });
    const roles = idRoles()
    const fmRoles = roles.formatedState
    const RequestCreateValue = (e: ChangeEvent<HTMLInputElement>) => {
        setRequestState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(requestState).every((value) => value !== "")) {
            fetchData.posting(requestState);
            modal.close();
            if(fmRoles && localStorage.getItem("role_type") === "client" && fmRoles.client_can_edit_application_extra || localStorage.getItem("role_type") === "manager" ||  localStorage.getItem("role_type") === "" ){
                 editModal.open();
            }else{
                return
            }
           
        } else {
            console.log("postTrimError");
        }
    };
    return (
        <>
            <form
                className={styles.CreateRequest}
                onSubmit={postTrim}
            >
                <div className={styles.Top}>
                    <div className={styles.TextTop}>Создание заявки</div>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={modal.close}
                        size={34}
                    />
                </div>
                <div className={styles.Input}>
                    Название заявки:
                    <CustomInput
                        placeholder="Напишите..."
                        width={400}
                        name="title"
                        change={RequestCreateValue}
                    />
                </div>
                <div className={styles.Input}>
                    Название компании:
                    <CustomInput
                        placeholder="Напишите..."
                        width={400}
                        name="company"
                        change={RequestCreateValue}
                    />
                </div>
                <div className={styles.Buttons}>
                    <CustomButton
                        type="button"
                        onClick={modal.close}
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
            </form>
            <Modal
                width={732}
                centered
                open={editModal.isOpen}
                onCancel={editModal.close}
            >
                <EditRequest
                    request={requestState}
                    setRequest={setRequestState}
                />
            </Modal>
        </>
    );
};
