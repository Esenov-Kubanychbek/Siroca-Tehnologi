import styles from "./ListContainer.module.scss";
import { ListTop } from "../index";
import { Request } from "../../features";
import RequestApi from "./model/RequestApi.json";
import { FC } from "react";
import ViewModal from "../RequestView/model/ViewModal";
import { Modal } from "antd";
import { RequestView } from "../RequestView/RequestView";

export const ListContainer:FC = () => {

    const modal = ViewModal();

    return (
        <div className={styles.ListContainer}>
            <ListTop />
            {RequestApi.map((card, i) => (
                <div onClick={modal.open}>
                <Request
                    key={i}
                    number={card.number}
                    company={card.company}
                    request={card.request}
                    description={card.description}
                    client={card.client}
                    manager={card.manager}
                    begin={card.begin}
                    end={card.end}
                    prioritet={card.prioritet}
                    status={card.status}
                />
                </div>
            ))}
            <Modal
                    bodyStyle={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        
                    }}
                    footer={null}
                    width={790}
                    centered
                    closeIcon={false}
                    open={modal.isOpen}
                    onCancel={modal.close}
                >
                    <RequestView/>
                </Modal>
        </div>
    );
};
