import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { ListTop } from "../../../shared/ui/ListTop/ListTop";
import { ListTopName } from "../../../shared/ui/ListTop/ListTopName";
import styles from "./Positions.module.scss";
import { CreatePosition } from "../../Modals/CreatePosition/CreatePosition";
import { usePosition } from "../../../shared/hooks/modalHooks";
import { FC, useEffect } from "react";
import { ItemInner } from "../../../shared/ui";
import { jobTitleApi } from "./api/jobTitleApi";

export const Positions: FC = () => {
    const modal = usePosition();
    const fetchData = jobTitleApi();
    useEffect(() => {
        fetchData.getting();
    }, []);
    return (
        <div className={styles.Positions}>
            <div className={styles.Name}>Поиск по должностям</div>
            <div className={styles.Input}>
                <SearchInput />
                <div onClick={modal.open}>
                    <ButtonCreate />
                </div>
            </div>
            <div
                className={styles.PositionsList}
                style={fetchData.jobTitleList.length > 9 ? { overflowY: "scroll" } : { overflowY: "hidden" }}
            >
                <div className={styles.Inner}>
                    <ListTop>
                        <ListTopName
                            name="Имеющихся должности"
                            width={350}
                        />
                    </ListTop>
                    {fetchData.jobTitleList.map((card, i) => (
                        <ItemInner
                            width={350}
                            content={card.title}
                            key={i}
                        />
                    ))}
                </div>
            </div>
            <Modal
                centered
                width={700}
                open={modal.isOpen}
                onCancel={modal.close}
                zIndex={10}
            >
                <CreatePosition />
            </Modal>
        </div>
    );
};
