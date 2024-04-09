import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./CreateRequest.module.scss";
import { ICreateRequest, requestApi } from "./api/requestApi";
import { useEditRequest, useRequest } from "../../../shared/hooks/modalHooks";
import { CloseSquare } from "iconsax-react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { Modal } from "antd";
import { EditRequest } from "../..";

export const CreateRequest: FC = () => {
    const modal = useRequest();
    const editModal = useEditRequest();
    const fetchData = requestApi();
    const [requestState, setRequestState] = useState<ICreateRequest>({
        title: "",
        company: 0,
    });
    const RequestCreateValue = (e: ChangeEvent<HTMLInputElement>) => {
        setRequestState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData.posting(requestState);
        modal.close();
        editModal.open();
        console.log("success");
    };
    return (
        <>
            <form
                className={styles.CreateRequest}
                onSubmit={postTrim}
            >
                <div className={styles.Top}>
                    <div className={styles.TextTop}>Создание заявки</div>
                    <div
                        onClick={modal.close}
                        className={styles.Close}
                    >
                        <CloseSquare
                            color="#5C5C5C"
                            variant="Bold"
                            size={34}
                        />
                    </div>
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
                <EditRequest request={fetchData.oneRequest} />
            </Modal>
        </>
    );
};
