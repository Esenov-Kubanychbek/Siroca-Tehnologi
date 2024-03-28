import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import styles from "./Date.module.scss";
import "../Style.scss";
export const Date = () => {
    return (
        <Collapse
            className={styles.Date}
            accordion
        >
            <CollapsePanel
                header="Даты"
                key={1}
            >
                <div className={styles.panel}>
                    <div className={styles.block1}>
                        <div>Дата начало:</div>
                        <div>Срок выполнение:</div>
                        <div>Дата отправки:</div>
                        <div>Дата завершение:</div>
                        <div>Дата подачи:</div>
                        <div>Дата утверждение:</div>
                        <div>Статус оплаты:</div>
                    </div>
                    <div className={styles.block2}>
                        <div>17.01.2024</div>
                        <div>30 дн</div>
                        <div>17.01.2024</div>
                        <div>17.01.2024</div>
                        <div>17.01.2024</div>
                        <div>17.01.2024</div>
                        <div>Оплачено</div>
                    </div>
                </div>
            </CollapsePanel>
        </Collapse>
    );
};
