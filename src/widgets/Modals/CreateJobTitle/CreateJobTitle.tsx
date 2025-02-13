import { CloseSquare } from "iconsax-react";
import styles from "./CreateJobTitle.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { FC } from "react";
import { jobTitleApi } from "../../Admin/JobTitles/api/jobTitleApi";
import { ICreateJobTitleModal } from "./types/types";

export const CreateJobTitle: FC<ICreateJobTitleModal> = (props) => {
    const { setModal } = props;
    const fetchData = jobTitleApi();
    const postTrim = () => {
        if (fetchData.oneJobTitle.title == "") {
            console.log("write jobTitle");
        } else {
            fetchData.postJobTitle(fetchData.oneJobTitle);
            fetchData.getJobTitleList();
            setModal(false);
        }
    };
    return (
        <div className={styles.CreatePosition}>
            <div className={styles.Header}>
                <div className={styles.Word}>Создать должность</div>
                <div
                    onClick={() => setModal(false)}
                    style={{ cursor: "pointer" }}
                >
                    <CloseSquare size={34} />
                </div>
            </div>
            <CustomInput
                name="title"
                placeholder="Напишите..."
                width={560}
                value={fetchData.oneJobTitle.title}
                change={fetchData.setJobTitle}
            />
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Without"
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
