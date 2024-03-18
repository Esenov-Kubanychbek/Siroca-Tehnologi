import { FC } from "react";
import { Request } from "../../../features";
import { RequestTop } from "../..";
import { ConfigProvider, Pagination } from "antd";
import { IRequest } from "./model/types";

export const RequestList: FC<IRequest> = ({ role, api }) => {
    return (
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
