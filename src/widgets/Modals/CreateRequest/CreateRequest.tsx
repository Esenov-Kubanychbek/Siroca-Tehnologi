import { FC } from "react";
import styles from "./CreateRequest.module.scss";
import { CloseSquare } from "iconsax-react";
import RequestModal from "./model/RequestModal";
import { CustomButton} from "../../shared/ui";
import { Details } from "./ui/Details";
import { LinkJira } from "./ui/LinkJira";
import { Humans } from "./ui/Humans";
import { DatesContainer } from "./ui/DatesContainer";
import { Comments } from "./ui/Comments";
import { CheckList } from "./ui/CheckList";
import { Collapse } from "antd";

export const CreateRequest: FC = () => {
    const modal = RequestModal();
    
    return (
        <div className={styles.CreateRequest}>
            <div className={styles.Container}>
                <div className={styles.Top}>
                    <div className={styles.TextTop}>Создание заявки</div>
                    <div
                        onClick={modal.close}
                        className={styles.Close}
                    >
                        <CloseSquare color="#5C5C5C" variant="Bold" size={34} />
                    </div>
                </div>
                <div className={styles.NumberRequest}>
                    <div>
                        Номер заявки: <span>YMF021256</span>
                    </div>
                </div>
                <Collapse
                size="small"
                items={[{ key: '1', label: 'Детали заявки:', children: <p>{<Details/>}</p> }]}
                />
                <Collapse
                size="small"
                items={[{ key: '1', label: 'Ссылка на Jira:', children: <p>{<LinkJira/>}</p> }]}
                />
                <Collapse
                size="small"
                items={[{ key: '1', label: 'Люди:', children: <p>{<Humans/>}</p> }]}
                />
                <Collapse
                size="small"
                items={[{ key: '1', label: 'Даты:', children: <p>{<DatesContainer/>}</p> }]}
                />
                <Collapse
                size="small"
                items={[{ key: '1', label: 'Комментарии:', children: <p>{<Comments/>}</p> }]}
                />
                <Collapse
                size="small"
                items={[{ key: '1', label: 'Чек листы:', children: <p>{<CheckList/>}</p> }]}
                />
                <div className={styles.Buttons}>
                    <div onClick={modal.close}>
                        <CustomButton
                            variant="Secondary" 
                            width={150} 
                            text="Отменить"/>
                    </div>
                    <div onClick={modal.close}>
                        <CustomButton 
                            variant="Primary" 
                            width={150} 
                            text="Создать"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
