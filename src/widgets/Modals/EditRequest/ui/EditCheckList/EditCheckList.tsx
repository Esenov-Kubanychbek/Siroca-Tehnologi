import { FC } from "react";
import styles from "./EditCheckList.module.scss";
import { CustomInput, CustomButton } from "../../../../../shared/ui";
import { CustomSelect } from "../../../CreateCompany/ui/CustomSelect";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";
import { CloseSquare, TickSquare } from "iconsax-react";
import { usersRoleTypeApi } from "../../api/usersRoleTypeApi";

export const EditCheckList: FC = () => {
    const fetchRoleType = usersRoleTypeApi();
    const roles = idRoles();
    const role_type = localStorage.getItem("role_type");
    const render = () => {
        if (roles.formatedState && role_type === "client" && roles.formatedState.client_can_add_checklist_extra) {
            return (
                <div className={styles.CheckList}>
                    <div className={styles.Header}>
                        <div className={styles.HeaderLeft}>
                            <TickSquare color="#5C5C5C" />
                            Чек-лист
                        </div>
                        <button>Удалить</button>
                    </div>
                    <div className={styles.InputEnter}>
                        <div className={styles.InputRelative}>
                            <CustomInput
                                name="text"
                                width={553}
                                placeholder="Подзадача..."
                                height={44}
                                paddingLeft={52}
                            />
                        </div>
                        <div className={styles.CheckDesc}>
                            <CustomButton
                                type="button"
                                variant="Primary"
                                height={44}
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
                </div>
            );
        } else if (role_type === "manager" || role_type === "") {
            return (
                <div className={styles.CheckList}>
                    <div className={styles.Header}>
                        <div className={styles.HeaderLeft}>
                            <TickSquare color="#5C5C5C" />
                            Чек-лист
                        </div>
                        <button>Удалить</button>
                    </div>
                    <div className={styles.InputEnter}>
                        <div className={styles.InputRelative}>
                            <CustomInput
                                name="text"
                                width={553}
                                placeholder="Подзадача..."
                                height={44}
                                paddingLeft={52}
                            />
                            <CloseSquare
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
                                height={44}
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
                </div>
            );
        } else {
            return null;
        }
    };

    return <>{render()}</>;
};
