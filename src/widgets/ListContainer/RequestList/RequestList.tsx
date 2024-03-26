import { FC, useEffect, useState } from "react";
import { Request } from "../../../features";
import { RequestTop } from "../..";
import { ConfigProvider, Pagination } from "antd";
import { IRequest } from "./model/types";
import { getRequestApi } from "../../../shared/getRequestApi";

export const RequestList: FC<IRequest> = ({ role, api }) => {
    const fetchRequest = getRequestApi();
    const [offset, setOffset] = useState<number>(0);
    const [apiLast, setApiLast] = useState<any[]>([]);

    const apiLength = api.length;

    const handleChange = (pageNumber: number) => {
        setOffset((pageNumber - 1) * 9);
    };

    useEffect(() => {
        fetchRequest.getting();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchRequest.getState;
            setApiLast(data.slice(offset, offset + 9));
        };
        fetchData();
    }, [fetchRequest, offset]);

    return (
        <div>
            <RequestTop role={role} />
            {apiLast.map((card, i) => (
                <Request
                    role={role}
                    key={i+1}
                    number={card.task_number}
                    company={card.company}
                    request={card.title}
                    description={card.description}
                    client={card.main_client}
                    manager={card.main_manager}
                    begin={card.start_date}
                    end={card.finish_date}
                    prioritet={card.priority}
                    status={card.status}
                />
            ))}
            {apiLength >= 9 ? (
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
                            total={apiLength}
                            pageSize={9}
                            onChange={handleChange}
                            style={{ fontWeight: 700, display: "flex", alignItems: "center" }}
                        />
                    </ConfigProvider>
                </div>
            ) : null}
        </div>
    );
};
