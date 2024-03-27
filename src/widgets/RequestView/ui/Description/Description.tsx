import { Collapse } from "antd"
import styles from './Description.module.scss'
import CollapsePanel from "antd/es/collapse/CollapsePanel"
import { FolderAdd } from "iconsax-react"
import xlsx from '../../../../shared/ui/Xlsx/xlsx.svg';
import '../Style.scss';
export const Description = () => {
    return (
        <Collapse className={styles.Description} accordion>
            <CollapsePanel header='Описание' key={1}>
                <div className={styles.container}>
                    <p className={styles.description}>
                        "Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. Рекомендуется провести дополнительный анализ потребностей клиента для более точного определения спецификаций проекта. "Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. Рекомендуется провести дополнительный анализ потребностей клиента.
                    </p>
                    <FolderAdd className={styles.folderAdd}/>
                    <div className={styles.xlsx}>
                        <img src={xlsx} alt="xlsx" />
                        <p>Интеграция Лис Mbank</p>
                    </div>
                    <div className={styles.xlsx}>
                        <img src={xlsx} alt="xlsx" />
                        <p>Интеграция Лис Mbank</p>
                    </div>
                    <div className={styles.images}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </CollapsePanel>
        </Collapse>
    )
}

