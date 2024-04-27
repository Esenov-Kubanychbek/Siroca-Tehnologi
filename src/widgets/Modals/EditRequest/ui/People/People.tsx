import { FC } from "react";
import styles from "./People.module.scss";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";
import { usersRoleTypeApi } from "../../api/usersRoleTypeApi";
import { editRequestApi } from "../../api/editRequestApi";

export const People: FC = () => {
    const { requestState, requestChange } = editRequestApi();
    const fetchRoleTypes = usersRoleTypeApi();
    return (
        <div className={styles.Humans}>
            <div className={styles.People}>
                <CustomSelect
                    name="main_manager"
                    text="Менеджер"
                    dataOption={fetchRoleTypes.managersList}
                    width={282}
                    change={requestChange}
                    value={
                        requestState.main_manager === null ? fetchRoleTypes.managersList[0] : requestState.main_manager
                    }
                />
                <CustomSelect
                    name="main_client"
                    text="Заявитель"
                    dataOption={fetchRoleTypes.clientList}
                    width={282}
                    change={requestChange}
                    value={requestState.main_client === null ? fetchRoleTypes.clientList[0] : requestState.main_client}
                />
            </div>
        </div>
    );
};
