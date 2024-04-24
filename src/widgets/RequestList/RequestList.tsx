import styles from "./RequestList.module.scss";
import { FC, MouseEvent, useEffect, useState } from "react";
import { Request } from "../../entities";
import { RequestTop, ViewRequest } from "..";
import { Modal } from "antd";
import { getRequestApi } from "./api/getRequestApi";
import { IRequest } from "./types/types";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";
import { ArrowLeft2 } from "iconsax-react";
import { AddComment } from "../Modals/ViewRequest/ui";

export const RequestList: FC<IRequest> = ({ role, api }) => {
    const [page, setPage] = useState<{ now: number }>({ now: 1 });
    const [reqCount, setReqCount] = useState<number>(0);
    const [prevNext, setPrevNext] = useState<{ prev: boolean; next: boolean }>({ prev: false, next: false });
    const [modal, setModal] = useState<boolean>(false);
    useEffect(()=>{
        console.log(prevNext);
    }, [])
    const fetchRequest = getRequestApi();
    const apiLength = fetchRequest.getState;

    const reqPage = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${page.now}&${api}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            setReqCount(response.data.created_count);
            console.log(response.data);
            fetchRequest.setState(response.data.results);
            fetchRequest.setFilterState(response.data.results);
            if (response.data) {
                setPrevNext((prev: { prev: boolean; next: boolean }) => {
                    return { ...prev, next: true };
                });
            }
            if (response.data) {
                setPrevNext((prev: { prev: boolean; next: boolean }) => {
                    return { ...prev, prev: true };
                });
            }
            fetchRequest.setNow(page.now);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        reqPage();
    }, [page.now]);

    const renderPagButtons = () => {
        if (Math.ceil(reqCount / 50) > 1) {
            for (let index = 2; index <= 5; index++) {
                return (
                    <button
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                            const targetId = (e.target as HTMLDivElement)?.id; // Проверяем, что e.target является HTMLDivElement и имеет свойство id
                            setPage({ now: Number(targetId) });
                        }}
                        id={`${index}`}
                        className={page.now === index ? styles.paginBtn : styles.paginBtnAnActive}
                    >
                        {index}
                    </button>
                );
            }
        } else {
            return;
        }
    };

    const renderMoreBtns = () => {
        for (let index = 6; index <= Math.ceil(reqCount / 50); index++) {
            return (
                <button
                    onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        const targetId = (e.target as HTMLDivElement)?.id; // Проверяем, что e.target является HTMLDivElement и имеет свойство id
                        setPage({ now: Number(targetId) });
                    }}
                    id={`${index}`}
                    className={styles.paginBtn}
                >
                    {index}
                </button>
            );
        }
    };

    const nextPage = () => {
        if (Math.ceil(reqCount / 50)! > page.now) {
            setPage({ now: page.now + 1 });
        }
    };
    const prevPage = () => {
        if (page.now > 1) {
            setPage({ now: page.now - 1 });
        }
    };

    return (
        <div style={role === "admin" ? { width: "1724px" } : { width: "1820px" }}>
            <RequestTop role={role} />
            <div
                className={styles.Inner}
                style={apiLength.length > 11 ? { overflowY: "scroll" } : { overflowY: "hidden" }}
            >
                {fetchRequest.getState.length > 0 ? (
                    fetchRequest.getState.map((card, i) => (
                        <Request
                            role={role}
                            key={i}
                            request={card}
                            setModal={setModal}
                        />
                    ))
                ) : (
                    <div className={styles.Nothing}>По вашему запросу ничего не найдено!</div>
                )}
            </div>
            {apiLength.length > 1 ? (
                <div className={styles.Pagination}>
                    <div className={styles.paginationCont}>
                        <button
                            onClick={prevPage}
                            className={styles.pagToggle}
                        >
                            <ArrowLeft2
                                size={24}
                                style={page.now === 1 ? { color: "#DEDEDE" } : { color: "black" }}
                            />
                        </button>
                        <button
                            onClick={() => {
                                setPage({ now: 1 });
                            }}
                            className={page.now === 1 ? styles.paginBtn : styles.paginBtnAnActive}
                        >
                            1
                        </button>
                        {renderPagButtons()}
                        {Math.ceil(reqCount / 50) > 5 ? "..." + renderMoreBtns() : null}
                        <button
                            onClick={nextPage}
                            className={styles.pagToggle}
                        >
                            <ArrowLeft2
                                size={24}
                                style={
                                    Math.ceil(reqCount / 50) === page.now
                                        ? { color: "#DEDEDE", transform: "rotate(-180deg)" }
                                        : { transform: "rotate(-180deg)" }
                                }
                            />
                        </button>
                    </div>
                </div>
            ) : null}
            <Modal
                centered
                width={750}
                open={modal}
                onCancel={() => setModal(false)}
                zIndex={5}
            >
                <ViewRequest setModal={setModal} />
                <AddComment/>
            </Modal>
        </div>
    );
};
