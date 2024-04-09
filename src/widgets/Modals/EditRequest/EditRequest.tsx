import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./EditRequest.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "../../../shared/ui";
import { useRequest, useSuccess } from "../../../shared/hooks/modalHooks";
import { requestApi, IRequest } from "./api/requestApi";
import { SuccessModal } from "../..";
import { Modal } from "antd";
import "./style.scss";
import { Collapses } from "./ui";
import { ICreateRequest } from "../CreateRequest/api/requestApi";

export const EditRequest: FC<{ request: ICreateRequest }> = ({ request }) => {
    const modal = useRequest();
    const fetchData = requestApi();
    const success = useSuccess();
    const [requestState, setRequestState] = useState<IRequest>({
        task_number: "",
        title: request.title,
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
        company: 1,
        main_client: null,
        main_manager: 2,
    });
    const RequestCreateValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setRequestState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log(requestState);
    };
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData.editRequest(requestState, 1)
        modal.close();
        console.log("success");
    };
    return (
        <form onSubmit={postTrim}>
            <div className={styles.Container}>
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
                <div className={styles.NumberRequest}>
                    <div>
                        Номер заявки: <span>565646465</span>
                    </div>
                </div>
                <Collapses onChange={RequestCreateValue} request={request}/>
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
