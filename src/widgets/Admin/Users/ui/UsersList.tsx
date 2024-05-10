import { FC, useEffect, useState } from "react";
import styles from "./UserList.module.scss";
import { UsersTop } from "./UsersTop";
import { Modal } from "antd";
import { usersApi } from "../api/usersApi";
import { User } from "../../../../entities";
import { EditUser } from "../../..";
// import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
// import { CustomButton } from "../../../../shared/ui";

export const UsersList: FC = () => {
    const [modal, setModal] = useState<boolean>(false);
    const fetchData = usersApi();
    useEffect(() => {
        fetchData.getUsersList(1);
    }, []);
    return (
        <>
            <div className={styles.UsersList}>
                <div className={styles.Top}>
                    <UsersTop />
                </div>
                <div
                    className={styles.Users}
                    style={fetchData.usersList.length > 9 ? { overflowY: "scroll" } : { overflowY: "hidden" }}
                >
                    {fetchData.usersList.length > 0 ? (
                        fetchData.usersList.map((card, i) => (
                            <User
                                setModal={setModal}
                                key={i}
                                user={card}
                            />
                        ))
                    ) : (
                        <div className={styles.Nothing}>По вашему запросу ничего не найдено!</div>
                    )}
                </div>
                {/* <div className={styles.Bottom}>
                    <div className={styles.Pagination}>
                        <ArrowLeft2 cursor={"pointer"}/>
                        <CustomButton text="1" width={56} variant="Primary"/>
                        <ArrowRight2 cursor={"pointer"} />
                    </div>
                    <div className={styles.BottomRight}>Количество пользователей с 1 по 50 из 200</div>
                </div> */}
            </div>
            <Modal
                centered
                width={700}
                open={modal}
                onCancel={() => setModal(false)}
                zIndex={6}
            >
                <EditUser setModal={setModal} />
            </Modal>
        </>
    );
};
