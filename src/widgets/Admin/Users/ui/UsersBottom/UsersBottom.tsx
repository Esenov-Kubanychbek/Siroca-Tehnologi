import { FC, useEffect, useState } from "react";
import styles from "./UsersBottom.module.scss";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { usersApi } from "../../api/usersApi";

export const UsersBottom: FC<{view: boolean}> = ({view}) => {
    const [page, setPage] = useState<number>(1);
    const [pageArray, setPageArray] = useState<number[]>([]);
    const [middleArray, setMiddleArray] = useState<number[]>([]);
    const pageNumber = 10;
    const { getUsersList } = usersApi();
    const addArray = () => {
        for (let i = 1; i <= pageNumber; i++) {
            pageArray.push(i);
        }
        return setPageArray(pageArray);
    };
    const createMiddle = () => {
        if (page > 1 && page <= pageArray.length - 3 && !middleArray.includes(page)) {
            middleArray.push(page + 1);
            console.log("page + 1 added");
            if (page > 3) {
                middleArray.shift();
                console.log("page shift is added");
            }
        }
        return setMiddleArray(middleArray);
    };
    const changePage = (pageId: number) => {
        if (pageId === page || pageId > pageArray.length || pageId < 1) {
            null;
        } else {
            setPage(pageId);
            createMiddle();
        }
    };

    useEffect(() => {
        console.log(page);
        console.log(middleArray);
    }, [page]);
    useEffect(() => {
        addArray();
        getUsersList(1);
    }, []);
    return (
        <div className={styles.UsersBottom} style={{width: view ? "1221px" : "1718px"}}>
            <div className={styles.Pagination}>
                <div className={styles.PaginationButton}>
                    <ArrowLeft2
                        color={page === 1 ? "#DEDEDE" : "black"}
                        cursor={"pointer"}
                        onClick={() => changePage(page - 1)}
                    />
                </div>
                {pageArray.slice(0, 2).map((item, i) => (
                    <button
                        key={i}
                        className={page === item ? styles.Primary : styles.Secondary}
                        onClick={() => changePage(item)}
                    >
                        {item}
                    </button>
                ))}
                {page > 1 ? (
                    <>
                        <div className={styles.More}>. . .</div>
                        {middleArray.map((item, i) => (
                            <button
                                key={i}
                                className={page === item ? styles.Primary : styles.Secondary}
                                onClick={() => changePage(item)}
                            >
                                {item}
                            </button>
                        ))}
                        {page === pageArray.length - 3 ? null : <div className={styles.More}>. . .</div>}
                    </>
                ) : (
                    <div className={styles.More}>. . .</div>
                )}
                {pageArray.slice(-2).map((item, i) => (
                    <button
                        key={i}
                        className={page === item ? styles.Primary : styles.Secondary}
                        onClick={() => changePage(item)}
                    >
                        {item}
                    </button>
                ))}
                <div className={styles.PaginationButton}>
                    <ArrowRight2
                        color={page === pageArray.length ? "#DEDEDE" : "black"}
                        cursor={"pointer"}
                        onClick={() => changePage(page + 1)}
                    />
                </div>
            </div>
            <div className={styles.BottomRight}>{view ? "Кол...50/200" : "Количество пользователей с 1 по 50 из 200"}</div>
        </div>
    );
};
