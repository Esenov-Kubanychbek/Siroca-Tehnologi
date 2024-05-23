import styles from "./RequestList.module.scss";
import { FC, useEffect, useState } from "react";
import { Request } from "../../entities";
import { RequestTop, ViewRequest } from "..";
import { getRequestApi } from "./api/getRequestApi";
import { IRequest } from "./types/types";
import axios from "axios";
import { BASE_URL, authToken } from "../../shared/variables/variables";
import { Pagination } from "../../shared/ui/Pagination/Pagination";
import { ItemCount } from "../../shared/ui/ItemCount/ItemCount";

export const RequestList: FC<IRequest> = (props) => {
    const { role, api } = props;
    const [page, setPage] = useState<number>(1);
    const [reqCount, setReqCount] = useState<number>(0);
    const [view, setView] = useState<boolean>(false);
    const fetchRequest = getRequestApi();
    const apiLength = fetchRequest.getState.length;
    const reqPage = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${page}&${api}`, authToken);
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
        <div className={styles.RequestList}>
            <div style={{ width: role === "" ? (view ? "1012px" : "1724px") : "1820px" }}>
                <RequestTop
                    role={role}
                    view={view}
                />
                <div
                    className={styles.Inner}
                    style={{
                        overflowY: apiLength > 11 ? "scroll" : "hidden",
                        width: view ? "1048px" : "1760px",
                    }}
                >
                    {apiLength > 0 ? (
                        fetchRequest.getState.map((card, i) => (
                            <Request
                                view={view}
                                role={role}
                                key={i}
                                request={card}
                                setView={setView}
                            />
                        ))
                    ) : (
                        <div className={styles.Nothing}>По вашему запросу ничего не найдено!</div>
                    )}
                </div>
                <div className={styles.Bottom}>
                    {apiLength > 0 && (
                        <Pagination
                            page={page}
                            setPage={setPage}
                            count={reqCount}
                        />
                    )}
                    <div className={styles.ItemCount}>
                        <ItemCount
                            count={reqCount}
                            page={page}
                        />
                    </div>
                </div>
            </div>
            {view && <ViewRequest setView={setView} />}
        </div>
    );
};
