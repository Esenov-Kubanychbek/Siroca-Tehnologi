import { FC, useState } from "react";
import styles from "./HeaderBottom.module.scss";
import { FilterButton, ReportButton, TimeFilter } from "../../features";
import { Edit } from "iconsax-react";
import { Modal } from "antd";
import { CreateRequest } from "..";
import { ReqSearch } from "../../features/TimeFilter/ui/ReqSearch";
import { idRoles } from "../../pages/MainPage/api/idRoles";

export const HeaderBottom: FC<{ role: string | null }> = ({ role }) => {
    const [modal, setModal] = useState<boolean>(false);
    const [isFilter, setIsFilter] = useState(false);
    const roles = idRoles().formatedState;
    const onFilter = () => {
        setIsFilter(!isFilter);
    };

    return (
        <div className={styles.HeaderBottom}>
            <TimeFilter
                isFilter={isFilter}
                role={role}
            />
            <div
                className={styles.BottomRight}
                style={{ width: role === "" ? "1375px" : "1455px" }}
            >
                <ReqSearch />
                <div className={styles.SecondRight}>
                    <FilterButton onClick={onFilter} />
                    {role === "" && (
                        <div style={{ display: "flex", gap: "16px" }}>
                            <button
                                aria-label="createRequest"
                                onClick={() => setModal(true)}
                                className={styles.ButtonRequest}
                            >
                                Создать заявку
                                <Edit
                                    size={24}
                                    color="white"
                                />
                            </button>
                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                <ReportButton />
                            </div>
                        </div>
                    )}
                    {role === "client" && (
                        <div style={{ display: "flex", gap: "16px" }}>
                            {roles && roles.client_can_create_application_extra ? (
                                <button
                                    aria-label="createRequest"
                                    onClick={() => setModal(true)}
                                    className={styles.ButtonRequest}
                                >
                                    Создать заявку
                                    <Edit
                                        size={24}
                                        color="white"
                                    />
                                </button>
                            ) : null}

                            {roles && roles.client_can_get_reports_extra ? (
                                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                    <ReportButton />
                                </div>
                            ) : null}
                        </div>
                    )}
                    {role === "manager" && (
                        <div style={{ display: "flex", gap: "16px" }}>
                            <button
                                aria-label="createRequest"
                                onClick={() => setModal(true)}
                                className={styles.ButtonRequest}
                            >
                                Создать заявку
                                <Edit
                                    size={24}
                                    color="white"
                                />
                            </button>
                            {roles && roles.manager_can_get_reports_extra ? (
                                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                    <ReportButton />
                                </div>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
            <Modal
                centered
                width={500}
                open={modal}
                onCancel={() => setModal(false)}
            >
                <CreateRequest setModal={setModal} />
            </Modal>
        </div>
    );
};
