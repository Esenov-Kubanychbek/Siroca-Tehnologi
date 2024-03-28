import { FC } from "react";
import styles from "./Users.module.scss";
import { SearchInput } from "../../../features/SearchInput/SearchInput";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { UsersList } from "./ui/UsersList";
import { Modal } from "antd";
import { CreateUser } from "../../Modals/CreateUser/CreateUser";
import { useUser } from "../../../shared/hooks/modalHooks";

export const Users: FC = () => {
    const modal = useUser();
    return (
        <div className={styles.Users}>
            <div className={styles.UsersSearch}>
                <div className={styles.Name}>Поиск по пользователям</div>
                <div className={styles.Search}>
                    <SearchInput />
                    <ButtonCreate
                        name="Создать пользователя"
                        onClick={modal.open}
                    />
                </div>
            </div>
            <div className={styles.UserList}>
                <UsersList />
            </div>
            <Modal
                centered
                width={700}
                open={modal.isOpen}
                onCancel={modal.close}
                zIndex={5}
            >
                <CreateUser />
            </Modal>
        </div>
    );
};
