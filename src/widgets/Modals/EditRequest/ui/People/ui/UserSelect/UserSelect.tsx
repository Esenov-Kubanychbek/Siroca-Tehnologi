import { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "./UserSelect.module.scss";
import { ArrowDown2 } from "iconsax-react";
import { CustomErrorCircle, CustomInput } from "@/shared/ui";
import { allUsersListApi } from "@/shared/api";
import { editRequestApi } from "@/widgets/Modals/EditRequest/api/editRequestApi";

export const UserSelect: FC = () => {
    const {
        companyUserExists,
        searchCompanyUsersNamesList,
        companyUserInputState,
        setCompanyUserInputState,
        companyUserInputChange,
        getCompanyUsers,
    } = allUsersListApi();
    const [opened, setOpened] = useState<boolean>(false);
    const { setRequestData, requestState } = editRequestApi();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRequestData({ ...requestState, main_client: e.target.value });
        companyUserInputChange(e);
    };
    const handleClick = (manager: string) => {
        setRequestData({ ...requestState, main_client: manager });
        setCompanyUserInputState(manager);
    };
    useEffect(() => {
        getCompanyUsers(requestState.company);
    }, [requestState.company]);
    useEffect(() => {
        if (requestState.main_client) {
            setCompanyUserInputState(requestState.main_client);
        }
    }, [requestState.main_client]);
    return (
        <div className={styles.UserSelect}>
            <div className={styles.Input}>
                <CustomInput
                    trim={companyUserExists === false ? false : true}
                    paddinfRight={companyUserExists === false ? 80 : 45}
                    onClick={() => setOpened(true)}
                    value={companyUserInputState}
                    change={handleChange}
                    width={282}
                    placeholder="Заявитель..."
                />
                <CustomErrorCircle
                    className={styles.NotExist}
                    exist={companyUserExists}
                    text="Данного пользователя не существует! Повторите попытку."
                />
                <ArrowDown2
                    className={styles.Arrow}
                    onClick={() => setOpened(!opened)}
                    color="#5C5C5C"
                    style={{ transform: opened ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </div>
            {opened && (
                <div className={styles.SelectList}>
                    {searchCompanyUsersNamesList.map((user, i) => (
                        <p
                            key={i}
                            onClick={() => handleClick(user)}
                        >
                            {user}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
