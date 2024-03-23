import { FC } from "react";
import { Request } from "../../../features";
import { RequestTop } from "../..";
import { ConfigProvider,Pagination } from "antd";
import { IRequest } from "./model/types";


export const RequestList: FC<IRequest> = ({ role, api }) => {
    const apiLength = api.length;
    const apiLengthDivide = Math.ceil(apiLength / 12);
    const apiLast = api.slice(0, 12);
    return (
        <div>
            <RequestTop role={role} />
            {apiLast.map((card, i) => (
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
            {apiLength >= 12 ? (
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
                                    fontFamily: "Geologica",
                                    fontSize: 20,
                                    borderRadius: 8,
                                },
                            },
                        }}
                    >
                        <Pagination
                            defaultCurrent={1}
                            total={apiLengthDivide * 10}
                            style={{ fontWeight: 700, display: "flex", alignItems: "center" }}
                        />
                    </ConfigProvider>
                </div>
            ) : null}
        </div>
    );
};
