import { FC } from "react";
import { CustomSelect } from "../../shared/ui";
import { CloseSquare, MoreSquare } from "iconsax-react";
import styles from "./RequestView.module.scss";
import ViewModal from "./model/ViewModal";
import { MenuRequest } from "./ui/MenuRequest";
import { CheckList } from "./ui/CheckList";
import { Details } from "./ui/Details";
import { LinkJira } from "./ui/LinkJira";
import { Humans } from "./ui/Humans";
import { DatesContainer } from "./ui/DatesContainer";
import { Comments } from "./ui/Comments";
import { Collapse } from "antd";

export const RequestView: FC = () => {
    const modal = ViewModal();

    return (
        <div className={styles.ViewContainer}>
            <MenuRequest />
            <div className={styles.Container}>
                <div className={styles.Top}>
                    <div className={styles.TextTop}>Заявка - Оптима Банк</div>
                    <div className={styles.TopIcons}>
                        <div className={styles.MoreSquare}>
                            <MoreSquare
                                variant="Bulk"
                                color="#5c5c5c"
                                size={34}
                            />
                        </div>
                        <div
                            onClick={modal.close}
                            className={styles.Close}
                        >
                            <CloseSquare
                                color="#5C5C5C"
                                variant="Bold"
                                size={34}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.HistoryRequest}>
                    <div>
                        Номер заявки: <span>YMF021256</span>
                    </div>
                    <CustomSelect
                        width={590}
                        name="История изменений"
                    />
                </div>
                <Collapse
                    size="small"
                    items={[{ key: "1", label: "Детали заявки:", children: <p>{<Details />}</p> }]}
                />
                <Collapse
                    size="small"
                    items={[{ key: "1", label: "Ссылка на Jira:", children: <p>{<LinkJira />}</p> }]}
                />
                <Collapse
                    size="small"
                    items={[{ key: "1", label: "Люди:", children: <p>{<Humans />}</p> }]}
                />
                <Collapse
                    size="small"
                    items={[{ key: "1", label: "Даты:", children: <p>{<DatesContainer />}</p> }]}
                />
                <Collapse
                    size="small"
                    items={[{ key: "1", label: "Комментарии", children: <p>{<Comments />}</p> }]}
                />
                <Collapse
                    size="small"
                    items={[{ key: "1", label: "Чек листы:", children: <p>{<CheckList />}</p> }]}
                />
            </div>
        </div>
    );
};
