import { FC } from "react";
import styles from "./Users.module.scss";
import { SearchInput } from "./../../../features/Header/SearchInput/SearchInput";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { UsersList } from "./ui/UsersList";
import { Modal } from "antd";
import { CreateUser } from "../../Modals/CreateUser/CreateUser";
import { useUser } from "../../../shared/hooks";

export const Users: FC = () => {
    const modal = useUser();
    return (
        <div className={styles.UsersComponent}>
            <div className={styles.UsersSearch}>
                <div>Поиск по пользователям</div>
                <div className={styles.Search}>
                    <SearchInput />
                    <div onClick={modal.open}>
                        <ButtonCreate name="Создать пользователя" />
                    </div>
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
