import styles from "./RequestList.module.scss";
import { FC, useEffect, useState } from "react";
import { Request } from "../../entities";
import { RequestTop } from "..";
import { ConfigProvider, Pagination } from "antd";
import { IGetRequest, getRequestApi } from "./api/getRequestApi";
import { IRequest } from "./types/types";

export const RequestList: FC<IRequest> = ({ role, api }) => {
    const fetchRequest = getRequestApi();
    const [offset, setOffset] = useState<number>(0);
    const [apiLast, setApiLast] = useState<IGetRequest[]>([]);
    const apiLength = api.length;
    const handleChange = (pageNumber: number) => {
        setOffset((pageNumber - 1) * 20);
    };
    useEffect(() => {
        fetchRequest.getting();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const data = fetchRequest.getState;
            setApiLast(data.slice(offset, 50));
        };
        fetchData();
    }, [fetchRequest, offset]);
    return (
        <div>
            <div className={styles.Top}>
                <RequestTop role={role} />
            </div>
            <div className={styles.Inner}>
                {apiLength > 0 ? (
                    apiLast.map((card, i) => (
                        <Request
                            role={role}
                            key={i}
                            request={card}
                        />
                    ))
                ) : (
                    <div className={styles.Nothing}>По вашему запросу ничего не найдено!</div>
                )}
            </div>
            {apiLength > 12 ? (
                <div className={styles.Pagination}>
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
                            total={apiLength / 12}
                            pageSize={12}
                            onChange={handleChange}
                            style={{ fontWeight: 700, display: "flex", alignItems: "center" }}
                        />
                    </ConfigProvider>
                </div>
            ) : null}
        </div>
    );
};
