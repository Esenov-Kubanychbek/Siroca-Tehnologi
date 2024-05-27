import { FC, useState } from "react";
import styles from "./ViewUser.module.scss";
import { IViewUser } from "./types/types";
import { CloseSquare } from "iconsax-react";
import { Modal } from "antd";
import { EditUser } from "../EditUser/EditUser";
import { deleteUserApi } from "../EditUser/api/deleteUserApi";
import { CustomMoreSquare } from "@/shared/ui";
import { ReadyModal } from "../ReadyModal/ReadyModal";
import { oneUserApi } from "@/shared/api";

export const ViewUser: FC<IViewUser> = (props) => {
    const { view, setView } = props;
    const [modal, setModal] = useState<boolean>(false);
    const [readyModal, setReadyModal] = useState<boolean>(false);
    const { deleteUser } = deleteUserApi();
    const {oneUserState} = oneUserApi()
    const deleteFunc = () => {
        deleteUser(oneUserState.id);
        setReadyModal(false);
        setView(false);
    };
    return (
        <div
            style={{ display: view ? "flex" : "none" }}
            className={styles.ViewUser}
        >
            <div className={styles.Top}>
                <div className={styles.TopLeft}>
                    <img
                        src={oneUserState.image}
                        alt="image"
                    />
                    <p>
                        {oneUserState.first_name} {oneUserState.surname}
                    </p>
                </div>
                <div className={styles.TopRight}>
                    <CustomMoreSquare>
                        <button onClick={() => setModal(true)}>Редактировать</button>
                        <button onClick={() => setReadyModal(true)}>Удалить</button>
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
                    <p>{oneUserState.role_type}</p>
                    <p>{oneUserState.job_title}</p>
                    <p>{oneUserState.username}</p>
                    <p>{oneUserState.main_company}</p>
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
            <Modal
                centered
                open={readyModal}
                onCancel={() => setReadyModal(false)}
            >
                <ReadyModal
                    yes={deleteFunc}
                    no={() => setReadyModal(false)}
                >
                    <div>
                        <p>Вы уверены?</p>
                        <p>Пользователь будет удален безвозвратно!</p>
                    </div>
                </ReadyModal>
            </Modal>
        </div>
    );
};
