import styles from "./Header.module.scss";
import {
    StatusNumber,
    ProfileButton,
    NotifButton,
    TimeFilter,
    SearchInput,
    FilterButton,
    ReportButton,
} from "../../features";
import { FC, useState } from "react";
import { Login, MoreSquare } from "iconsax-react";
import { ButtonRequest } from "./../../features/Header/ButtonRequest/ButtonRequest";
import { Modal } from "antd";
import { CreateRequest, ReadyModal } from "..";
import { useReady, useRequest } from "../../shared/hooks";

export const Header: FC<{ role: string }> = ({ role }) => {
    const [report, setReport] = useState<boolean>(false);
    const modalReady = useReady();
    const modal = useRequest();
    return (
        <div style={role === "admin" ? { width: "1764px" } : { width: "1820px" }}>
            <div className={styles.HeaderTop}>
                <div
                    className={styles.HeaderTopInner}
                    style={{ width: role === "admin" ? "1716px" : "1790px" }}
                >
                    <div className={styles.HeaderLogo}>
                        {role === "admin" ? null : <img src="/Logo.svg" />}
                        <StatusNumber />
                    </div>
                    <div className={styles.DataProfile}>
                        <NotifButton />
                        <ProfileButton />
                        {role === "admin" ? null : (
                            <button
                                onClick={modalReady.open}
                                className={styles.Login}
                            >
                                <Login
                                    size={24}
                                    color="white"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.HeaderBottom}>
                <TimeFilter role={role} />
                <div
                    className={styles.BottomRight}
                    style={{ width: role === "admin" ? "1375px" : "1455px" }}
                >
                    <SearchInput />
                    <div className={styles.SecondRight}>
                        <FilterButton />
                        {role === "client" ? null : (
                            <div style={{ display: "flex", gap: "16px" }}>
                                <div onClick={modal.open}>
                                    <ButtonRequest />
                                </div>
                                <div style={{ position: "relative" }}>
                                    <MoreSquare
                                        cursor={"pointer"}
                                        size={56}
                                        variant="Linear"
                                        color="#1C6AB1"
                                        onClick={() => setReport(!report)}
                                    />
                                    {report && (
                                        <div
                                            style={{
                                                position: "absolute",
                                                zIndex: "10",
                                                top: "70px",
                                                right: "0",
                                            }}
                                        >
                                            <ReportButton />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal
                width={700}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CreateRequest />
            </Modal>
            <Modal
                width={550}
                centered
                open={modalReady.isOpen}
                onCancel={modalReady.close}
            >
                <ReadyModal />
            </Modal>
        </div>
    );
};
