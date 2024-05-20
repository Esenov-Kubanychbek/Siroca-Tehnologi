import styles from "./People.module.scss";
import { FC, useState } from "react";
import { usersRoleTypeApi } from "../../api/usersRoleTypeApi";
import { editRequestApi } from "../../api/editRequestApi";
import { ArrowDown2 } from "iconsax-react";
import { PeopleSelect } from "./ui/PeopleSelect";

export const People: FC = () => {
    const { clientList } = usersRoleTypeApi();
    const { requestState, setRequestData } = editRequestApi();
    const [clientsOpened, setClientsOpened] = useState<boolean>(false);
    const changeClient = (client: string) => {
        setRequestData({ ...requestState, main_client: client });
        setClientsOpened(false);
    };
    return (
        <div className={styles.People}>
            <PeopleSelect/>
            <div className={styles.PeopleSelect}>
                <div
                    className={styles.Chosen}
                    onClick={() => setClientsOpened(!clientsOpened)}
                >
                    <input
                        type="text"
                        value={requestState.main_client}
                        style={{ border: clientsOpened ? "1px solid #1C6AB1" : "none" }}
                    />
                    <ArrowDown2 style={{ transform: clientsOpened ? "rotate(180deg)" : "rotate(0deg)" }} />
                </div>
                {clientsOpened && (
                    <div className={styles.OptionsList}>
                        {clientList.map((item, i) => (
                            <p
                                key={i}
                                onClick={() => changeClient(item)}
                            >
                                {item.length > 22 ? `${item.slice(0, 22)}...` : item}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
