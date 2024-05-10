import { Dispatch, FC, SetStateAction, useEffect } from "react";
import styles from "./CreateChecklist.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { createChecklistApi } from "./api/createChecklistApi";
import { getOneRequestApi } from "../ViewRequest/api/getOneRequestApi";
import { CloseSquare } from "iconsax-react";

interface ICreateChecklist {
    setChecklistModal: Dispatch<SetStateAction<boolean>>;
}

export const CreateChecklist: FC<ICreateChecklist> = (props) => {
    const { setChecklistModal } = props;
    const { oneRequest, setChecklist } = getOneRequestApi();
    const { oneChecklist, resetOneChecklist, oneChecklistChange, createChecklist } = createChecklistApi();
    const postTrim = () => {
        if (oneChecklist.name !== "") {
            createChecklist({
                name: oneChecklist.name,
                application: oneRequest.id,
            });
            setChecklist(oneChecklist);
            setChecklistModal(false);
        } else {
            console.log("postChecklistTrimError");
        }
    };
    useEffect(() => {
        resetOneChecklist();
        console.log(oneChecklist);
    }, [oneChecklist.id]);
    return (
        <div className={styles.CreateChecklist}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <p>Добавление списка задач</p>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setChecklistModal(false)}
                    />
                </div>
                <div className={styles.Bottom}>
                    <p>Название</p>
                    <CustomInput
                        value={oneChecklist.name}
                        change={oneChecklistChange}
                        width={400}
                        placeholder="Чек-лист"
                    />
                </div>
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Without"
                    width={101}
                    text="Отмена"
                    onClick={() => setChecklistModal(false)}
                />
                <CustomButton
                    variant="Primary"
                    text="Добавить"
                    width={121}
                    onClick={postTrim}
                />
            </div>
        </div>
    );
};
