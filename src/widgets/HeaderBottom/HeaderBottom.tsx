import { FC, useState } from "react";
import styles from "./HeaderBottom.module.scss";
import { FilterButton, ReportButton, TimeFilter } from "../../features";
import { Edit, MoreSquare } from "iconsax-react";
import { Modal } from "antd";
import { CreateRequest } from "..";
import { ReqSearch } from "../../features/TimeFilter/ui/ReqSearch";

export const HeaderBottom: FC<{ role: "client" | "manager" | "admin" }> = ({ role }) => {
    const [report, setReport] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [isFilter, setIsFilter] = useState(false);

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
                style={{ width: role === "admin" ? "1375px" : "1455px" }}
            >
                <ReqSearch />
                <div className={styles.SecondRight}>
                    <FilterButton onClick={onFilter} />
                    {role === "client" ? null : (
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
