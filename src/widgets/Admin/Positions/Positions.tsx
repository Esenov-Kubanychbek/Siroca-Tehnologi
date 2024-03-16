import { Modal } from "antd";
import { RequestInner } from "../../../entities";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { ListTop } from "../../../shared/ui/ListTop/ListTop";
import { ListTopName } from "../../../shared/ui/ListTop/ListTopName";
import styles from "./Positions.module.scss";
import { CreatePosition } from "../../CreatePosition/CreatePosition";
import positionModal from "../../CreatePosition/model/PositionModal";

export const Positions = () => {
    const modal = positionModal();
    return (
        <div className={styles.Positions}>
            <div className={styles.Name}>Поиск по должностям</div>
            <div className={styles.Input}>
                <SearchInput />
                <div onClick={modal.open}>
                    <ButtonCreate />
                </div>
            </div>
            <div className={styles.PositionsList}>
                <div className={styles.Inner}>
                    <ListTop>
                        <ListTopName
                            name="Имеющихся должности"
                            width={350}
                        />
                    </ListTop>
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                    <RequestInner
                        content="Директор филиала"
                        width={350}
                    />
                </div>
            </div>
            <Modal
                bodyStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "30px 0",
                }}
                footer={null}
                width={700}
                centered
                closeIcon={false}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CreatePosition />
            </Modal>
        </div>
    );
};
