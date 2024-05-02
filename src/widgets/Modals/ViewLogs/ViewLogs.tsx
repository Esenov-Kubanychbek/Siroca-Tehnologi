import styles from "./ViewLogs.module.scss";

export const ViewLogs = () => {
    return (
        <div className={styles.ViewLogs}>
            <div className={styles.Log}>
                <div className={styles.LogHeader}>
                    <img
                        src=""
                        alt=""
                    />
                    <p className={styles.Name}>Иван Иванов</p>
                    <p className={styles.Time}>Внес изменения -12.02.24 / 13:01 </p>
                </div>
                <div className={styles.LogMain}>
                    <div className={styles.MainItem}>
                        <p className={styles.Prev}>Приоритет:</p>
                    </div>
                    <div className={styles.MainItem}>
                        <p className={styles.Prev}>
                            Изначально: <p> Средний</p>
                        </p>
                        <div className={styles.Content}>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                        </div>
                    </div>
                    <div className={styles.MainItem}>
                        <p className={styles.Prev}>
                            Новая: <p> Высокая</p>
                        </p>
                        <div className={styles.Content}>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                            <p># Создано № количевство заявок</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
