import { Collapse } from "antd"
import CollapsePanel from "antd/es/collapse/CollapsePanel"
import styles from './Peoples.module.scss'
import '../Style.scss';
const Peoples = () => {
  return (
    <Collapse className={styles.Peoples} accordion>
      <CollapsePanel header='Люди' key={1}>
        <div className={styles.panel}>
            <div>
                <div>Заявитель: </div>
                <div>Иван Иванов</div>
            </div>
            <div>
                <div>Менеджер: </div>
                <div>Асан Асанов</div>
            </div>
        </div>
      </CollapsePanel>
    </Collapse>
  )
}

export default Peoples
