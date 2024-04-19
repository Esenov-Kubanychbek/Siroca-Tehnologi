import { CloseSquare } from "iconsax-react";
import styles from "./CreateJobTitle.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { FC } from "react";
import { jobTitleApi } from "../../Admin/JobTitles/api/jobTitleApi";
import { ICreateJobTitleModal } from "./types/types";

export const CreateJobTitle: FC<ICreateJobTitleModal> = (props) => {
    const { setModal, setModalSuccess } = props;
    const fetchData = jobTitleApi();
    const postTrim = () => {
        if (fetchData.oneJobTitle.title == "") {
            console.log("write position");
        } else {
            fetchData.postJobTitle(fetchData.oneJobTitle);
            console.log(fetchData.oneJobTitle);
            setModal(false);
            setModalSuccess(true);
            setTimeout(() => setModalSuccess(false), 1000);
        }
    };
    return (
        <div className={styles.CreatePosition}>
            <div className={styles.Header}>
                <div className={styles.Word}>Добавить должность</div>
                <div
                    onClick={() => setModal(false)}
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
                    onClick={() => setModal(false)}
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
