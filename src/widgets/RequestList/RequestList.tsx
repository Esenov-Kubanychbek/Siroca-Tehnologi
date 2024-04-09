import styles from "./RequestList.module.scss";
import { FC, MouseEvent, useEffect, useState } from "react";
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
   
    const fetchRequest = getRequestApi()
     const apiLength = fetchRequest.getState;
    const reqPage = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${page.now}&${api}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            })
            setReqCount(response.data.results.created_count)
            fetchRequest.setState(response.data.results.results)
            fetchRequest.setFilterState(response.data.results.results)
            const results = response.data.results
            console.log(response);

            if (response.data) {
                setPrevNext((prev: { prev: boolean, next: boolean }) => {
                    return { ...prev, next: true }
                })
            }
            if (response.data) {
                setPrevNext((prev: { prev: boolean, next: boolean }) => {
                    return { ...prev, prev: true }
                })
            }
            console.log(results);

            fetchRequest.setNow(page.now)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        reqPage()
    }, [page.now])

    const renderPagButtons = () => {
        if (Math.ceil(reqCount / 50) > 1) {
            for (let index = 2; index <= 5; index++) {
                return (
                    <button onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        const targetId = (e.target as HTMLDivElement)?.id; // Проверяем, что e.target является HTMLDivElement и имеет свойство id
                        setPage({ now: Number(targetId) })
                    }} id={`${index}`} className={styles.paginBtn}>{index}</button>
                )
            }
        }else{
            return
        }

    }
    const renderMoreBtns = () => {
        for (let index = 6; index <= Math.ceil(reqCount / 50); index++) {
            return (
                <button onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    const targetId = (e.target as HTMLDivElement)?.id; // Проверяем, что e.target является HTMLDivElement и имеет свойство id
                    setPage({ now: Number(targetId) })
                }} id={`${index}`} className={styles.paginBtn}>{index}</button>
            )
        }
    }
    const nextPage = () => {
        if (prevNext.next) {
            setPage({ now: page.now + 1 })
        }
    }

    const prevPage = () => {
        if (prevNext.prev) {
            setPage({ now: page.now - 1 })
        }
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
            {apiLength.length > 1 ? (
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
                            <button onClick={prevPage} className={styles.pagToggle}><ArrowLeft2 size={24} style={prevNext.prev ? { color: "black" } : { color: "#DEDEDE" }} /></button>
                            <button onClick={() => { setPage({ now: 1 }) }} className={styles.paginBtn}>1</button>
                            {renderPagButtons()}
                            {Math.ceil(reqCount / 50) > 5 ? '...' + renderMoreBtns() : null}
                            <button onClick={nextPage} className={styles.pagToggle}><ArrowLeft2 size={24} style={prevNext.prev ? { color: "black", transform: "rotate(-180deg)" } : { color: "#DEDEDE", transform: "rotate(-180deg)" }} /></button>
                        </div>
                    </ConfigProvider>
                </div>
            ) : null}
        </div>
    );
};
