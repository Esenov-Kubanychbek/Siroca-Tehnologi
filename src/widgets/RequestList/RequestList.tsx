import styles from "./RequestList.module.scss";
import { FC, useEffect, useState } from "react";
import { Request } from "../../entities";
import { RequestTop } from "..";
import { ConfigProvider } from "antd";
import { getRequestApi } from "./api/getRequestApi";
import { IRequest } from "./types/types";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";
import { ArrowLeft2 } from "iconsax-react";

export const RequestList: FC<IRequest> = ({ role, api }) => {
    const [page, setPage] = useState<{ now: number }>({ now: 1 })
    const [reqCount, setReqCount] = useState<number>(0)
    const [prevNext, setPrevNext] = useState<{ prev: boolean, next: boolean }>({ prev: false, next: false })
    const apiLength = api.length;
    const fetchRequest = getRequestApi()
    const reqPage = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${page.now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            })
            setReqCount(response.data.results.created_count)
            fetchRequest.setState(response.data.results.results)
            fetchRequest.setFilterState(response.data.results.results)
            const results = response.data.results
            if (results.next) {
                const nxt = { prev: prevNext.prev, next: true }
                setPrevNext(nxt)
            }
            if (results.preview) {
                const nxt = { prev: true, next: prevNext.next }
                setPrevNext(nxt)
            } 
            console.log(results);
            
            fetchRequest.setNow(page.now)
        }catch (error) {
            console.log(error);
            
        }
    }
    
    useEffect(() => {
        reqPage()
    }, [page.now])

    const renderPagButtons = () => {
        const pageCount = reqCount / 50
        for (let index = 2; index <= pageCount; index++) {
            return(
                <button id={`${index}`} className={styles.paginBtn}>{index}</button>
            )
        }
    }
    const nextPage = () => {
        // if(prevNext.next){
            setPage({now: page.now + 1})
        // }
    }
    return (
        <div>
            <div className={styles.Top}>
                <RequestTop role={role} />
            </div>
            <div className={styles.Inner}>
                {fetchRequest.getState.length > 0 ? (
                    fetchRequest.getState.map((card, i) => (
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
            {apiLength > 1 ? (
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
                            <button  className={styles.pagToggle}><ArrowLeft2 size={24} style={prevNext.prev ? { color: "#DEDEDE" } : { color: "black" }} /></button>
                            <button className={styles.paginBtn}>{page.now}</button>
                            {renderPagButtons()}
                            <button onClick={nextPage} className={styles.pagToggle}><ArrowLeft2 size={24} style={prevNext.prev ? { color: "#DEDEDE", transform: "rotate(-180deg)" } : { color: "black", transform: "rotate(-180deg)" }} /></button>
                        </div>
                    </ConfigProvider>
                </div>
            ) : null}
        </div>
    );
};
