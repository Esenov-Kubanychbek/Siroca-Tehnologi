import { getOneRequestApi } from "../ViewRequest/api/getOneRequestApi";
import styles from "./ViewLogs.module.scss";

export const ViewLogs = () => {
    const { oneRequest } = getOneRequestApi();
    // field: string,
    // formatted_created_at: string;
    // id: number;
    // initially: string;
    // new: string;
    // user: string;
    return (
        <div className={styles.ViewLogs}>
            {oneRequest.logs.map((el) => {
                return (
                    <>
                        <div className={styles.Log}>
                            <div className={styles.LogHeader}>
                                <img
                                    src=""
                                    alt=""
                                />
                                <p className={styles.Name}>{el.user}</p>
                                <p className={styles.Time}>Внес изменения {el.formatted_created_at}</p>
                            </div>
                            <div className={styles.LogMain}>
                                <div className={styles.MainItem}>
                                    <p className={styles.TypeOf}>{el.field}</p>
                                </div>
                                <div className={styles.MainItem}>
                                    <p className={styles.Prev}>
                                        Изначально: <p> </p>
                                    </p>
                                    <div className={styles.Content}>
                                        <p>{el.initially}</p>
                                    </div>
                                </div>
                                <div className={styles.MainItem}>
                                    <p className={styles.Prev}>
                                        Новая: <p> </p>
                                    </p>
                                    <div className={styles.Content}>
                                        <p>{el.new}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </>
                );
            })}
        </div>
    );
};
