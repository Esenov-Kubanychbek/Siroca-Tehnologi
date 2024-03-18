import { FC } from "react";
import { Request } from "../../../features";
import { RequestTop } from "../..";
<<<<<<< HEAD
import { ConfigProvider, Pagination } from "antd";
import { IRequest } from "./model/types";
=======
import { ConfigProvider, Modal, Pagination } from "antd";
import { RequestView } from "../../RequestView/RequestView";
import ViewModal from "../../RequestView/model/ViewModal";

interface IObject {
    number: string;
    company: string;
    request: string;
    description: string;
    client: string;
    manager: string;
    begin: string;
    end: string;
    prioritet: string;
    status: string;
}

interface IRequest {
    role: string;
    api: IObject[];
}
>>>>>>> 8b5efcec7e4a0c7eb51fed0f1cb9cea83a95902e

export const RequestList: FC<IRequest> = ({ role, api }) => {
    const modal = ViewModal();
    return (
<<<<<<< HEAD
        <div
            style={{
                height: "800px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div>
                <RequestTop role={role} />
                <div className="list">
                    {api.map((card, i) => (
                        <Request
                            role={role}
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
                    ))}
                </div>
            </div>
=======
        <div>
            <RequestTop role={role} />
            {api.map((card, i) => (
                <Request
                    role={role}
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
                
            ))}
            <Modal
                bodyStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding:"30px",
                }}
                footer={null}
                width={700}
                centered
                closeIcon={false}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <RequestView/>
            </Modal>
>>>>>>> 8b5efcec7e4a0c7eb51fed0f1cb9cea83a95902e
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70px",
                }}
            >
                <ConfigProvider
                    theme={{
                        token: {
                            colorBorder: "black",
                        },
                        components: {
                            Pagination: {
                                itemSize: 56,
                                itemActiveBg: "#1C6AB1",
                                colorPrimary: "white",
                                colorPrimaryHover: "white",
                                fontFamily: "Geometria",
                                fontSize: 20,
                                borderRadius: 8,
                            },
                        },
                    }}
                >
                    <Pagination
                        defaultCurrent={1}
                        total={50}
                        style={{ fontWeight: 700 }}
                    />
                </ConfigProvider>
            </div>
        </div>
    );
};
