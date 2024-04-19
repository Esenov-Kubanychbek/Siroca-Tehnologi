import { FC, useState } from "react";
import styles from "./Users.module.scss";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui";
import { UsersList } from "./ui/UsersList";
import { Modal } from "antd";
import { CreateUser } from "../..";

export const Users: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <div className={styles.Users}>
            <div className={styles.UsersSearch}>
                <div className={styles.Name}>Поиск по пользователям</div>
                <div className={styles.Search}>
                    <SearchInput />
                    <ButtonCreate
                        name="Создать пользователя"
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
            <UsersList />
            <Modal
                centered
                width={700}
                open={modal}
                onCancel={() => setModal(false)}
                zIndex={5}
            >
                <CreateUser setModal={setModal} />
            </Modal>
        </div>
    );
};
