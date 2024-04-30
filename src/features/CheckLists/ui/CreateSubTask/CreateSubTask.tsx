import { Dispatch, FC, SetStateAction } from "react";
import styles from "./CreateSubTask.module.scss";
import { CloseSquare } from "iconsax-react";
import { usersRoleTypeApi } from "../../../../widgets/Modals/EditRequest/api/usersRoleTypeApi";
import { CustomButton, CustomInput } from "../../../../shared/ui";
import { CustomSelect } from "../../../../widgets/Modals/CreateCompany/ui/CustomSelect";

export const CreateSubTask: FC<{ setDisplay: Dispatch<SetStateAction<boolean>> }> = ({ setDisplay }) => {
    const fetchRoleType = usersRoleTypeApi();
    return (
        <div className={styles.CreateSubTask}>
            <div className={styles.InputRelative}>
                <CustomInput
                    name="text"
                    width={553}
                    placeholder="Подзадача..."
                    paddingLeft={52}
                />
                <CloseSquare
                    onClick={() => setDisplay(false)}
                    className={styles.CloseSquare}
                    cursor={"pointer"}
                />
            </div>
            <div className={styles.CheckDesc}>
                <CustomButton
                    type="button"
                    variant="Primary"
                    width={130}
                    text="Добавить"
                />
                <CustomSelect
                    name="manager"
                    text="Назначить..."
                    dataOption={fetchRoleType.managersList}
                    width={330}
                />
                <input
                    type="date"
                    name="deadline"
                />
            </div>
        </div>
    );
};
