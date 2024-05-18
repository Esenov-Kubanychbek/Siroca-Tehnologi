import { FC, useState } from "react";
import styles from "./ViewUser.module.scss";
import { IViewUser } from "./types/types";
import { CloseSquare } from "iconsax-react";
import { Modal } from "antd";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { EditUser } from "../EditUser/EditUser";
import { deleteUserApi } from "../EditUser/api/deleteUserApi";
import { CustomMoreSquare } from "@/shared/ui";

export const ViewUser: FC<IViewUser> = (props) => {
    const [modal, setModal] = useState<boolean>(false);
    const { view, setView } = props;
    const { oneUserGet } = usersApi();
    const { deleteUser } = deleteUserApi();
    const deleteFunc = () => {
        deleteUser(oneUserGet.id);
        setView(false);
    };
    const openEdit = () => {
        setModal(true);
    };
    return (
        <div
            style={{ display: view ? "flex" : "none" }}
            className={styles.ViewUser}
        >
            <div className={styles.Top}>
                <div className={styles.TopLeft}>
                    <img
                        src={String(oneUserGet.image)}
                        alt="image"
                    />
                    <p>
                        {oneUserGet.first_name} {oneUserGet.surname}
                    </p>
                </div>
                <div className={styles.TopRight}>
                    <CustomMoreSquare>
                        <button onClick={openEdit}>Редактировать</button>
                        <button onClick={deleteFunc}>Удалить</button>
                    </CustomMoreSquare>
                    <CloseSquare
                        size={34}
                        onClick={() => setView(false)}
                        cursor={"pointer"}
                    />
                </div>
            </div>
            <div className={styles.Bottom}>
                <div className={styles.Name}>
                    <p>Роль:</p>
                    <p>Должность:</p>
                    <p>Логин:</p>
                    <p>Компания:</p>
                </div>
                <div className={styles.Data}>
                    <p>{oneUserGet.role_type}</p>
                    <p>{oneUserGet.job_title}</p>
                    <p>{oneUserGet.username}</p>
                    <p>{oneUserGet.main_company}</p>
                </div>
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
        </div>
    );
};
