import { FC } from "react";
import styles from "./UserList.module.scss";
import { ListTop } from "./ListTop";
import { UsersMap } from "./UsersMap";
import { Modal } from "antd";
import { ViewUser } from "../../../Modals/ViewUser/ViewUser";
import { useViewUser } from "../../../../shared/hooks";
import { usersApi } from "../../../../shared/api";

export const UsersList: FC = () => {
    const modal = useViewUser();
    const fetchData = usersApi();
    return (
        <>
            <div className={styles.UsersList}>
                <ListTop />
                <div className={styles.Users}>
                    {fetchData.inState.map((card, i) => (
                        <UsersMap
                            key={i}
                            id={i + 1}
                            role_type={card.role_type}
                            first_name={card.first_name}
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
