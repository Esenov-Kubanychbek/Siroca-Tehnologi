import { Collapse } from 'antd'
import styles from './Comments.module.scss'
import CollapsePanel from 'antd/es/collapse/CollapsePanel'
import { EllipsisOutlined } from '@ant-design/icons'
import Avatar from 'antd/es/avatar/avatar'
import { CustomInput } from '../../../../shared/ui';
import '../Style.scss';

export const Comments = () => {
    return (
        <Collapse className={styles.Comments} accordion>
            <CollapsePanel header="Коментарии" key={1}>
                <div className={styles.commentsUser}>
                    <div className={styles.header}>
                        <div>
                            <Avatar />
                            <p>Ажиржанова Уулкан</p>
                        </div>
                        <div><EllipsisOutlined /></div>
                    </div>
                    <div className={styles.comments}>
                        "Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. Рекомендуется провести дополнительный анализ потребностей клиента для более точного определения спецификаций проекта.
                    </div>
                    <div className={styles.date}>23.03.2024/20:24</div>
                </div>
                <div className={styles.inputs}>
                    <CustomInput width={510} placeholder='Добавьте коментарий...'/>
                </div>
                <div className={styles.commentsUser}>
                    
                    <p className={styles.youComents}>Ваш коментарий</p>
                        
                    <div className={styles.comments}>
                        "Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. Рекомендуется провести дополнительный анализ потребностей клиента для более точного определения спецификаций проекта.
                    </div>
                    <div className={styles.date}>23.03.2024/20:24</div>
                </div>
            </CollapsePanel>
    
        </Collapse>
    )
}

