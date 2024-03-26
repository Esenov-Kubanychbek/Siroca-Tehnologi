import { ChangeEvent, FC, useState } from "react";
import styles from "./CreateRequest.module.scss";
import { CloseSquare } from "iconsax-react";
import { CustomButton } from "../../../shared/ui";
import { Details } from "./ui/Details";
import { LinkJira } from "./ui/LinkJira";
import { Humans } from "./ui/Humans";
import { DatesContainer } from "./ui/DatesContainer";
import { Description } from "./ui/Description";
import { CheckList } from "./ui/CheckList";
import { useRequest, useSuccess } from "../../../shared/hooks";
import {requestApi, IRequest } from "../../../shared/requestApi";
import { SuccessModal } from "../..";
import { Collapse, Modal } from "antd";
import { Comments } from "./ui/Comments";
import { BriefDescription } from "./ui/BriefDescription";
import './style.scss';
import CollapsePanel from "antd/es/collapse/CollapsePanel";

export const CreateRequest: FC = () => {
    const modal = useRequest();
    const fetchData = requestApi();
    const success = useSuccess();
    const [requestState, setRequestState] = useState<IRequest>({
        task_number: "",
        title:"",
        description: "",
        files:null,
        jira: "",
        status: "",
        payment_state:"", 
        priority: "",
        application_date: "",
        confirm_date:"", 
        offer_date: "",
        start_date: "",
        finish_date: "",
        company:0,
        main_client:null,
        main_manager:null,
    });


    const RequestCreateValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setRequestState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        // console.log(requestState)
    };      
    const postTrim = () => {
            fetchData.posting(requestState);
            modal.close();
            success.open();
            console.log("success");
    };

    return (
        <form className={styles.CreateRequest}>
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
                <Collapse accordion>
                    <CollapsePanel header="Детали заявки" key={1}>
                        <Details onChange={RequestCreateValue}/>
                    </CollapsePanel>
                </Collapse>
                <Collapse accordion>
                    <CollapsePanel header="Ссылка на Jira" key={1}>
                        <LinkJira onChange={RequestCreateValue}/>
                    </CollapsePanel>
                </Collapse>
                <Collapse accordion>
                    <CollapsePanel header="Люди" key={1}>
                        <Humans onChange={RequestCreateValue}/>
                    </CollapsePanel>
                </Collapse>
                <Collapse accordion>
                    <CollapsePanel header="Даты" key={1}>
                        <DatesContainer onChange={RequestCreateValue}/>
                    </CollapsePanel>
                </Collapse>
                <Collapse accordion>
                    <CollapsePanel header="Комментарии" key={1}>
                        <Comments/>
                    </CollapsePanel>
                </Collapse>
                <Collapse accordion>
                    <CollapsePanel header="Описание" key={1}>
                        <Description onChange={RequestCreateValue}/>
                    </CollapsePanel>
                </Collapse>
                <Collapse accordion>
                    <CollapsePanel header="Краткое описание" key={1}>
                        <BriefDescription/>
                    </CollapsePanel>
                </Collapse>
                <Collapse accordion>
                    <CollapsePanel header="Чек-листы" key={1}>
                    <CheckList/> 
                    </CollapsePanel>
                </Collapse>
                <div className={styles.Buttons}>
                    <div onClick={modal.close}>
                        <CustomButton
                            variant="Secondary"
                            width={150}
                            text="Отменить"
                        />
                    </div>
                    <div onClick={postTrim}>
                        <CustomButton
                            variant="Primary"
                            width={150}
                            text="Создать"
                        />
                    </div>
                </div>
                <Modal
                width={350}
                centered
                zIndex={11}
                open={success.isOpen}
                onCancel={success.close}
            >
                <SuccessModal />
            </Modal>
            </div>
        </form>
    );
};
