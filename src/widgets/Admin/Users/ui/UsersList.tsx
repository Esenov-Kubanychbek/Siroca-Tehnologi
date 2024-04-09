import { FC, useEffect } from "react";
import styles from "./UserList.module.scss";
import { UsersTop } from "./UsersTop";
import { Modal } from "antd";
import { ViewUser } from "../../../Modals/ViewUser/ViewUser";
import { useViewUser } from "../../../../shared/hooks/modalHooks";
import { usersApi } from "../api/usersApi";
import { User } from "../../../../entities";

export const UsersList: FC = () => {
    const modal = useViewUser();
    const fetchData = usersApi();
    useEffect(() => {
        fetchData.getting();
    }, []);
    return (
        <>
            <div className={styles.UsersList}>
                <div className={styles.Top}>
                    <UsersTop />
                </div>
                <div className={styles.Users}>
                    {fetchData.inState.map((card) => (
                        <User
                            key={card.id}
                            user={card}
                        />
                    ))}
                </div>
            </div>
            <Modal
                centered
                width={700}
                open={modal.isOpen}
                onCancel={modal.close}
                zIndex={6}
            >
                <ViewUser />
            </Modal>
        </>
    );
};
