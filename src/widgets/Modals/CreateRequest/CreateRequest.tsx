import { FC, FormEvent, useState } from "react";
import styles from "./CreateRequest.module.scss";
import { createRequestApi } from "./api/createRequestApi";
import { CloseSquare } from "iconsax-react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { Modal } from "antd";
import { EditRequest } from "../..";
import { ICreateRequestModal } from "./types/types";
import { idRoles } from "../../../pages/MainPage/api/idRoles";

export const CreateRequest: FC<ICreateRequestModal> = (props) => {
    const { setModal } = props;
    const [editModal, setEditModal] = useState<boolean>(false);
    const { oneRequest, postRequest, requestChange } = createRequestApi();
    const roles = idRoles();
    const fmRoles = roles.formatedState;
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (oneRequest.title && oneRequest.company !== "") {
            postRequest(oneRequest);
            setModal(false);
            if (
                (fmRoles &&
                    localStorage.getItem("role_type") === "client" &&
                    fmRoles.client_can_edit_application_extra) ||
                localStorage.getItem("role_type") === "manager" ||
                localStorage.getItem("role_type") === ""
            ) {
                setEditModal(true);
            } else {
                return;
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
                        onClick={() => setModal(false)}
                        size={34}
                    />
                </div>
                <div className={styles.Input}>
                    Название заявки:
                    <CustomInput
                        placeholder="Напишите..."
                        width={400}
                        name="title"
                        value={oneRequest.title}
                        change={requestChange}
                    />
                </div>
                <div className={styles.Input}>
                    Название компании:
                    <CustomInput
                        placeholder="Напишите..."
                        width={400}
                        name="company"
                        value={oneRequest.company}
                        change={requestChange}
                    />
                </div>
                <div className={styles.Buttons}>
                    <CustomButton
                        type="button"
                        onClick={() => setModal(false)}
                        variant="Without"
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
                open={editModal}
                onCancel={() => setEditModal(false)}
            >
                <EditRequest
                    setModal={setEditModal}
                    requestFrom="CreateRequest"
                />
            </Modal>
        </>
    );
};
