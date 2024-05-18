import { CloseSquare } from "iconsax-react";
import { getOneRequestApi } from "../ViewRequest/api/getOneRequestApi";
import styles from "./ViewLogs.module.scss";
import { Dispatch, FC, SetStateAction } from "react";

export const ViewLogs: FC<{ setViewLogs: Dispatch<SetStateAction<boolean>> }> = ({ setViewLogs }) => {
    const { oneRequest } = getOneRequestApi();

    return (
        <div className={styles.ViewLogs}>
            <div className={styles.Header}>
                <p>История изменений</p>
                <CloseSquare
                    size={32}
                    style={{ cursor: "pointer" }}
                    onClick={() => setViewLogs(false)}
                />
            </div>
            {oneRequest.logs.map((el, i) => {
                console.log(el);

                return (
                    <div key={i}>
                        <div className={styles.Log}>
                            <div className={styles.LogHeader}>
                                <img
                                    src=""
                                    alt=""
                                />
                                <p className={styles.Name}>{el.user}</p>
                                <p className={styles.Time}>Внес изменения-{el.formatted_created_at}</p>
                            </div>
                            <div className={styles.LogMain}>
                                <div className={styles.MainItem}>
                                    <p className={styles.TypeOf}>{el.field}</p>
                                </div>
                                <div className={styles.MainItem}>
                                    <div className={styles.Prev}>
                                        Изначально: <p> </p>
                                    </div>
                                    <div className={styles.Content}>
                                        <p>{el.initially}</p>
                                    </div>
                                </div>
                                <div className={styles.MainItem}>
                                    <div className={styles.Prev}>
                                        Новая: <p> </p>
                                    </div>
                                    <div className={styles.Content}>
                                        <p>{el.new}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};
