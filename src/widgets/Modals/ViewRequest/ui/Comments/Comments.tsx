import styles from "./Comments.module.scss";
import { EllipsisOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import { CustomInput } from "../../../../../shared/ui";
import "../Style.scss";
import { FC } from "react";

export const Comments: FC = () => {
    return (
        <div className={styles.Comments}>
            <div className={styles.commentsUser}>
                <div className={styles.header}>
                    <div>
                        <Avatar />
                        <p>Ажиржанова Уулкан</p>
                    </div>
                    <div>
                        <EllipsisOutlined />
                    </div>
                </div>
                <div className={styles.comments}>
                    "Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования.
                    Рекомендуется провести дополнительный анализ потребностей клиента для более точного определения
                    спецификаций проекта.
                </div>
                <div className={styles.date}>23.03.2024/20:24</div>
            </div>
            <div className={styles.inputs}>
                <CustomInput
                    width={580}
                    height={44}
                    placeholder="Добавьте коментарий..."
                />
            </div>
            <div className={styles.commentsUser}>
                <p className={styles.youComents}>Ваш коментарий</p>
                <div className={styles.comments}>
                    "Заявка выглядит полной и информативной. Хорошо представлены основные детали и требования.
                    Рекомендуется провести дополнительный анализ потребностей клиента для более точного определения
                    спецификаций проекта.
                </div>
                <div className={styles.date}>23.03.2024/20:24</div>
            </div>
        </div>
    );
};
