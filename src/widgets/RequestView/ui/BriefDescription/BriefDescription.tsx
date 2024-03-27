import { Collapse } from "antd"
import styles from './BriefDescription.module.scss'
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import '../Style.scss';

export const BriefDescription = () => {
  return (
    <Collapse className={styles.BriefDescription} accordion>
        <CollapsePanel header='Краткое описание' key={1}>
            <p>"Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. </p>
        </CollapsePanel>
    </Collapse>
  )
}

