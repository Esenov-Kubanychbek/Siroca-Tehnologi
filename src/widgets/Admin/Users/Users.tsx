import { FC } from "react";
import styles from "./Users.module.scss";
import { SearchInput } from './../../../features/Header/SearchInput/SearchInput';
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { UsersList } from "./ui/UsersList";
import { Modal } from "antd";
import { CreateUser } from "../../CreateUser/CreateUser";
import userModal from "../../CreateUser/model/UserModal";


export const Users:FC = () => {

    const modal = userModal();

    return (
        <div className={styles.UsersComponent}>
            <div className={styles.UsersSearch}>
            <div>Поиск по пользователям</div>
                <div className={styles.Search}>
                    <SearchInput/>
                    <div onClick={modal.open}>
                        <ButtonCreate name="Создать пользователя"/>
                    </div>
                </div>
            </div>
            <div className={styles.UserList}>
                <UsersList/>
            </div>
            <Modal 
                bodyStyle={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "30px 0"
                }}
                footer={null}
                width={748}
                centered
                closeIcon={false}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CreateUser/>
            </Modal>
        </div>
    );
};
