import { FC, useEffect, useState } from "react";
import { StatusInner } from "../../entities";
import styles from "./StatusNumber.module.scss";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";

export const StatusNumber: FC = () => {
    const [count, setCount] = useState<number[]>([]);
    const getCounts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            setCount([
                response.data.closed_count,
                response.data.created_count,
                response.data.in_progress_count,
            ]);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCounts();
    }, []);
    return (
        <div className={styles.StatusNumber}>
            <div>
                Создано: <StatusInner count={count[1]} />
            </div>
            <div className={styles.Line} />
            <div>
                В работе: <StatusInner count={count[2]} />
            </div>
            <div className={styles.Line} />
            <div>
                Закрыто: <StatusInner count={count[0]} />
            </div>
        </div>
    );
};
