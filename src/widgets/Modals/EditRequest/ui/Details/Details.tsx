import { FC, useState } from "react";
import styles from "./Details.module.scss";
import { CustomInput } from "../../../../../shared/ui";
import { editRequestApi } from "../../api/editRequestApi";
import { prioritiesList, statusesList } from "@/shared/variables/variables";
import { DetailsSelect } from "./ui/DetailsSelect";

export const Details: FC = () => {
    const { requestState, requestChange } = editRequestApi();
    const [statusOpened, setStatusOpened] = useState<boolean>(false);
    const [priorityOpened, setPriorityOpened] = useState<boolean>(false);
    return (
        <div className={styles.Details}>
            <div className={styles.Container}>
                <div className={styles.Text}>Название заявки:</div>
                <CustomInput
                    value={requestState.title}
                    name="title"
                    width={350}
                    placeholder="Введите текст..."
                    change={requestChange}
                />
            </div>
            <div className={styles.Container}>
                <div className={styles.Text}>Название компании:</div>
                <CustomInput
                    value={requestState.company}
                    name="company"
                    width={350}
                    placeholder="Введите текст..."
                    change={requestChange}
                />
            </div>
            <div className={styles.Container}>
                <div className={styles.Text}>Приоритет:</div>
                <DetailsSelect
                    list={prioritiesList}
                    opened={priorityOpened}
                    setPriorityOpened={setPriorityOpened}
                    setStatusOpened={setStatusOpened}
                />
            </div>
            <div className={styles.Container}>
                <div className={styles.Text}>Статус заявки:</div>
                <DetailsSelect
                    list={statusesList}
                    opened={statusOpened}
                    setPriorityOpened={setPriorityOpened}
                    setStatusOpened={setStatusOpened}
                />
            </div>
        </div>
    );
};
