import { Collapse } from "antd"
import CollapsePanel from "antd/es/collapse/CollapsePanel"
import { Timer1 } from "iconsax-react"
import styles from './ChekcLists.module.scss';
import '../Style.scss';

export const ChekcLists = () => {
  return (
    <Collapse accordion className={styles.ChekcLists}>
      <CollapsePanel header='Чек листы' key={1}>
        <div className={styles.panel}>
            <div className={styles.block1}>
                <input type="checkbox" name="check" id="check" />
                <p>Заявка выглядит полной и информативной</p>
            </div>
            <div className={styles.block2}>
                <span>Ажиржанова У.</span>
                <div>
                    <Timer1/>
                    <p>20 март</p>
                </div>
            </div>
        </div>
        <div className={styles.panel}>
            <div className={styles.block1}>
                <input type="checkbox" name="check" id="check" />
                <p>Заявка выглядит полной и информативной</p>
            </div>
            <div className={styles.block2}>
                <span>Ажиржанова У.</span>
                <div>
                    <Timer1/>
                    <p>20 март</p>
                </div>
            </div>
        </div>
        <div className={styles.panel}>
            <div className={styles.block1}>
                <input type="checkbox" name="check" id="check" />
                <p>Заявка выглядит полной и информативной</p>
            </div>
            <div className={styles.block2}>
                <span>Ажиржанова У.</span>
                <div>
                    <Timer1/>
                    <p>20 март</p>
                </div>
            </div>
        </div>
      </CollapsePanel>
    </Collapse>
  )
}

