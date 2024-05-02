import styles from "./RequestList.module.scss";
import { FC, useEffect, useState } from "react";
import { Request } from "../../entities";
import { RequestTop, ViewRequest } from "..";
import { Modal } from "antd";
import { getRequestApi } from "./api/getRequestApi";
import { IRequest } from "./types/types";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";
import { AddComment } from "../Modals/ViewRequest/ui";
import { Pagination } from "../../shared/ui/Pagination/Pagination";
import { ItemCount } from "../../shared/ui/ItemCount/ItemCount";

export const RequestList: FC<IRequest> = ({ role, api }) => {
    const [page, setPage] = useState<number>(1);
    const [reqCount, setReqCount] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    const fetchRequest = getRequestApi();
    const apiLength = fetchRequest.getState;
    const reqPage = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${page}&${api}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            setReqCount(response.data.data.created_count);
            fetchRequest.setState(response.data.data.results);
            fetchRequest.setFilterState(response.data.data.results);
            console.log(response, "getRequestsListSuccess");
            fetchRequest.setNow(page);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        reqPage();  
    }, [page]);
    return (
        <div style={role === "admin" ? { width: "1724px" } : { width: "1820px" }}>
            <RequestTop role={role} />
            <div
                className={styles.Inner}
                style={apiLength.length > 11 ? { overflowY: "scroll" } : { overflowY: "hidden" }}
            >
                {apiLength.length > 0 ? (
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
            {apiLength ? (
                <Pagination page={page} setPage={setPage} count={reqCount}/>
            ) : null}
            <ItemCount count={reqCount} page={page}/>

            <Modal
                centered
                width={750}
                open={modal}
                onCancel={() => setModal(false)}
                zIndex={5}
            >
                <ViewRequest setModal={setModal} />
                <AddComment />
            </Modal>
        </div>
    );
};
