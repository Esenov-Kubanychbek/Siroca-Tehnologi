import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./EditRequest.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "../../../shared/ui";
import { useSuccess } from "../../../shared/hooks/modalHooks";
import { editRequestApi, IRequest } from "./api/editRequestApi";
import { SuccessModal } from "../..";
import { Modal } from "antd";
import "./style.scss";
import { Collapses } from "./ui";
import { createRequestApi } from "../CreateRequest/api/createRequestApi";
import { IEditRequest } from "./types/types";

export const EditRequest: FC<IEditRequest> = (props) => {
    const { request, setRequest, setModal } = props;
    const fetchData = editRequestApi();
    const success = useSuccess();
    const createRequest = createRequestApi();
    const [requestState, setRequestState] = useState<IRequest>({
        title: request.title,
        company: request.company,
        description: "",
        files: null,
        jira: "",
        status: "К выполнению",
        payment_state: "",
        priority: "Высокий",
        application_date: "",
        confirm_date: "",
        offer_date: "",
        start_date: "",
        finish_date: "",
        deadline_date: "",
        main_client: null,
        main_manager: 2,
    });
    const RequestCreateValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setRequestState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        setRequest((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log(requestState);
    };
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData.editRequest(requestState, createRequest.id);
        setModal(false);
        success.open();
        console.log("success");
        setTimeout(success.close, 1000);
    };
    return (
        <form onSubmit={postTrim}>
            <div className={styles.Container}>
                <div className={styles.Top}>
                    <div className={styles.TextTop}>Создание заявки</div>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setModal(false)}
                        size={34}
                    />
                </div>
                <div className={styles.NumberRequest}>
                    <div>
                        Номер заявки: <span>ABC-1234</span>
                    </div>
                </div>
                <Collapses
                    onChange={RequestCreateValue}
                    request={request}
                />
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
                <Modal
                    width={350}
                    centered
                    zIndex={11}
                    open={success.isOpen}
                    onCancel={success.close}
                >
                    <SuccessModal content="Заявка успешно создана!" />
                </Modal>
            </div>
        </form>
    );
};
