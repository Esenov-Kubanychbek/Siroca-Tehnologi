import styles from "./RequestList.module.scss";
import { FC, useEffect, useState } from "react";
import { Request } from "../../entities";
import { RequestTop } from "..";
import { ConfigProvider } from "antd";
import { IGetRequest } from "./api/getRequestApi";
import { IRequest } from "./types/types";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";

export const RequestList: FC<IRequest> = ({ role, api }) => {
    const [apiLast, setApiLast] = useState<IGetRequest[]>([]);
    const [page, setPage] = useState<{ now: number }>({now: 1 })
    const [prevNext, setPrevNext] = useState<{prev: boolean, next: boolean}>({prev: false, next: false})
    const apiLength = api.length;

    const reqPage = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${page.now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            })
            console.log(response);
            
            setApiLast(response.data.results.results)
            const results = response.data.results
            if(results.next){
                const nxt = {prev: prevNext.prev, next: true}
                setPrevNext(nxt)
            }
            if(results.prev){
                const nxt = {prev: true, next: prevNext.next}
                setPrevNext(nxt)
            }
        } catch (error) {
            setApiLast([])
        }
    }
    useEffect(() => {
        reqPage()
    }, [page])

    const nextPage = (e: {target:{id:string}}) => {
        if (e.target.id === "next") {
            if(prevNext.next){
                setPage({ now: page.now + 1 })
            }else{
                return
            }
            
        } else if (e.target.id === "prev") {
            if(prevNext.prev){
                setPage({ now: page.now - 1 })
            }else{
                return
            }
            
        }
    }
    return (
        <div>
            <div className={styles.Top}>
                <RequestTop role={role} />
            </div>
            <div className={styles.Inner}>
                { apiLast.length > 0 ? (
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
                        <div className={styles.pagination}>
                            <button onClick={nextPage} id='prev'>{prevNext.prev ? page.now -1 : 0}</button>
                            <button>{page.now}</button>
                            <button onClick={nextPage} id='next'>{prevNext.next ? page.now + 1 : page.now + 1}</button>
                        </div>
                    </ConfigProvider>
                </div>
            ) : null}
        </div>
    );
};
