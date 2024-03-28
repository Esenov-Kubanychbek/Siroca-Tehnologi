import { CloseSquare } from "iconsax-react";
import styles from "./CreatePosition.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { usePosition, useSuccess } from "../../../shared/hooks/modalHooks";
import { FC } from "react";
import { jobTitleApi } from "../../Admin/Positions/api/jobTitleApi";

export const CreatePosition: FC = () => {
    const fetchData = jobTitleApi();
    const modal = usePosition();
    const modalSuccess = useSuccess();
    const postTrim = () => {
        if (fetchData.oneJobTitle.title == "") {
            console.log("write position");
        } else {
            fetchData.posting(fetchData.oneJobTitle);
            console.log(fetchData.oneJobTitle);
            modal.close();
            modalSuccess.open();
            setTimeout(modalSuccess.close, 1000);
        }
    };
    return (
        <div className={styles.CreatePosition}>
            <div className={styles.Header}>
                <div className={styles.Word}>Добавить должность</div>
                <div
                    onClick={modal.close}
                    style={{ cursor: "pointer" }}
                >
                    <CloseSquare size={34} />
                </div>
            </div>
            <div>
                <CustomInput
                    name="title"
                    placeholder="Напишите..."
                    width={560}
                    value={fetchData.oneJobTitle.title}
                    change={fetchData.setJobTitle}
                />
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Secondary"
                    width={150}
                    text="Отменить"
                    onClick={modal.close}
                />
                <CustomButton
                    variant="Primary"
                    width={150}
                    text="Создать"
                    onClick={postTrim}
                />
            </div>
        </div>
    );
};
