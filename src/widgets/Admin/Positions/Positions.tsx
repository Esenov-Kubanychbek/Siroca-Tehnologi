import { Modal } from "antd";
import { RequestInner } from "../../../entities";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { ListTop } from "../../../shared/ui/ListTop/ListTop";
import { ListTopName } from "../../../shared/ui/ListTop/ListTopName";
import styles from "./Positions.module.scss";
import { CreatePosition } from "../../Modals/CreatePosition/CreatePosition";
import positionModal from "../../Modals/CreatePosition/model/PositionModal";
import PositionsApi from "./api/PositionsApi.json";

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
                    {PositionsApi.map((card: string, i: number) => (
                        <RequestInner
                            width={350}
                            content={card}
                            key={i}
                        />
                    ))}
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
                zIndex={10}
            >
                <CreatePosition />
            </Modal>
        </div>
    );
};
