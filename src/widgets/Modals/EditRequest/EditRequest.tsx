import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./EditRequest.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "../../../shared/ui";
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
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
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
        application_date: "2001-02-21",
        confirm_date: "2002-02-21",
        offer_date: "2003-02-21",
        start_date: "2004-02-21",
        finish_date: "2005-02-21",
        deadline_date: "2006-02-21",
        main_client: null,
        main_manager: 2,
        comments: [],
        checklist: [],
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
        setModalSuccess(true);
        console.log("success");
        setTimeout(() => setModalSuccess(false), 1000);
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
                    open={modalSuccess}
                    onCancel={() => setModalSuccess(false)}
                >
                    <SuccessModal content="Заявка успешно создана!" />
                </Modal>
            </div>
        </form>
    );
};
