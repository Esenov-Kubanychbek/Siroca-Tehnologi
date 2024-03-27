import styles from './DetailsAplication.module.scss'
import '../Style.scss'
import { Collapse } from 'antd'
import CollapsePanel from 'antd/es/collapse/CollapsePanel'


const DetailsAplication = () => {
    return (
        <Collapse className={styles.DetailsAplication} accordion>
            <CollapsePanel className={styles.panel} header="Детали заявки" key="1">
                <div className={styles.pan}>
                    <div className={styles.names}>
                        <div>Название заявки:</div>
                        <div>Название компании:</div>
                        <div>Приоритнетность:</div>
                        <div>Статус заявки: </div>
                    </div>
                    <div className={styles.datas}>
                        <div>Интеграция</div>
                        <div>Оптима банк</div>
                        <div className={styles.prioritet}>Высокий</div>
                        <div className={styles.status}>В работе</div>
                    </div>
                </div>
            </CollapsePanel>

        </Collapse>

    )
}

export default DetailsAplication
