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
    useEffect(()=> {
        fetchData.getting()
    }, [])
    return (
        <>
            <div className={styles.UsersList}>
                <UsersTop />
                <div className={styles.Users}>
                    {fetchData.inState.map((card, i) => (
                        <User
                            key={i}
                            id={card.id}
                            role_type={card.role_type}
                            first_name={card.first_name}
                            surname={card.surname}
                            username={card.username}
                            password={card.password}
                            main_company={card.main_company}
                            job_title={card.job_title}
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
