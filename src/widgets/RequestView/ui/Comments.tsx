import { FC } from 'react';
import styles from './Comments.module.scss';
import { DropDown } from '../../Modals/CreateRequest/ui/DropDown';
import { MoreSquare } from 'iconsax-react';
import { CustomInput } from '../../../shared/ui';

export const Comments:FC = () => {
    return (
            <div className={styles.Container}>
                <div className={styles.Comments}>
                        <DropDown text="Комментарии:" />
                        <div className={styles.ContainerComments}>
                            <div className={styles.CommentsCont}>
                                <div className={styles.Profile}>
                                    <div className={styles.Avatar}></div>
                                    <div className={styles.Text}>Аширжанова Уулкан</div>
                                </div>
                                <div className={styles.AddMore}>
                                    <div className={styles.Text}>20.03.24 / 20:24</div>
                                    <MoreSquare variant='Bulk' color='black' size={34}/>
                                </div>
                            </div>
                            <div className={styles.CommentCtnr}>"Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. Рекомендуется провести дополнительный анализ потребностей клиента для более точного определения спецификаций проекта. </div>
                        </div>
                        <CustomInput width={540} placeholder='Добавьте коментарий...'/>
                </div>
                <div className={styles.Comments2}>
                    <DropDown text="Описание:" />
                    <div className={styles.CommentCtnr}>"Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. Рекомендуется провести дополнительный анализ потребностей клиента для более точного определения спецификаций проекта. </div>
                </div>
                <div className={styles.Comments3}>
                    <DropDown text="Краткое описание:" />
                    <div className={styles.CommentCtnr}>"Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования. </div>
                </div>
            </div>
    )
}
