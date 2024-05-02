import { FC, useState } from "react";
import styles from "./ViewUser.module.scss";
import { IViewUser } from "./types/types";
import { CloseSquare, MoreSquare } from "iconsax-react";
import { Modal, Popover } from "antd";
import { usersApi } from "../../Admin/Users/api/usersApi";
import { EditUser } from "../EditUser/EditUser";
import { deleteUserApi } from "../EditUser/api/deleteUserApi";

export const ViewUser: FC<IViewUser> = (props) => {
    const [modal, setModal] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const { view, setView } = props;
    const { oneUserGet } = usersApi();
    const { deleteUser } = deleteUserApi();
    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    const deleteFunc = () => {
        deleteUser(oneUserGet.id);
        setView(false);
        setOpen(false);
    };
    const openEdit = () => {
        setOpen(false);
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
                    <Popover
                        placement="bottomRight"
                        content={
                            <div className={styles.MoreButtons}>
                                <button
                                    className={styles.Button}
                                    onClick={openEdit}
                                >
                                    Редактировать
                                </button>
                                <button
                                    className={styles.Button}
                                    onClick={deleteFunc}
                                >
                                    Удалить
                                </button>
                            </div>
                        }
                        onOpenChange={handleOpenChange}
                        trigger={"click"}
                        open={open}
                    >
                        <MoreSquare
                            cursor={"pointer"}
                            variant="Bulk"
                            color="#929292"
                            size={34}
                        />
                    </Popover>
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
                    <p>Догин:</p>
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
