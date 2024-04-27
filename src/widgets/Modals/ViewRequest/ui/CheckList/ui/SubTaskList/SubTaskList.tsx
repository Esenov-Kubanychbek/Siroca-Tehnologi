import { TickSquare, Timer1 } from "iconsax-react";
import { FC } from "react";
import styles from "./SubTaskList.module.scss";
import { getOneRequestApi } from "../../../../api/getOneRequestApi";

export const SubTaskList: FC = () => {
    const fetchRequest = getOneRequestApi();
    return (
        <div className={styles.SubTaskList}>
            <div className={styles.Header}>
                <div className={styles.HeaderLeft}>
                    <TickSquare color="#5C5C5C" />
                    Чек-лист
                </div>
                <button>Удалить</button>
            </div>
            {fetchRequest.oneRequest.checklists.map((card, i) => (
                <div
                    className={card.completed ? styles.SubTaskChecked : styles.SubTask}
                    key={i}
                >
                    <div className={styles.Left}>
                        {card.completed === true ? (
                            <TickSquare
                                variant="Bold"
                                color="#1C6AB1"
                                size={28}
                                cursor={"pointer"}
                            />
                        ) : (
                            <div className={styles.NotChecked} />
                        )}
                        <p>{card.text}</p>
                    </div>
                    <div className={styles.Right}>
                        <span>{card.manager}</span>
                        <div>
                            <Timer1 />
                            <p>{card.deadline}</p>
                        </div>
                    </div>
                    <div className={styles.Line} />
                </div>
            ))}
        </div>
    );
};
