import { StatusInner } from "../../../entities";
import styles from "./StatusNumber.module.scss";

export const StatusNumber = () => {
    return (
        <div className={styles.StatusNumber}>
            <div>
                Создано: <StatusInner count={10} />
            </div>
            <div className={styles.Line} />
            <div>
                В работе: <StatusInner count={8} />
            </div>
            <div className={styles.Line} />
            <div>
                Закрыто: <StatusInner count={2} />
            </div>
        </div>
    );
};
