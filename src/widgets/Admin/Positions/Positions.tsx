import { Modal } from "antd";
import { RequestInner } from "../../../entities";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { ListTop } from "../../../shared/ui/ListTop/ListTop";
import { ListTopName } from "../../../shared/ui/ListTop/ListTopName";
import styles from "./Positions.module.scss";
import { CreatePosition } from "../../Modals/CreatePosition/CreatePosition";
import PositionsApi from "./api/PositionsApi.json";
import { usePosition } from "../../../shared/hooks";
import { useEffect } from "react";
import { jobTitleApi } from "../../../shared/api";

export const Positions = () => {
    const modal = usePosition();
    const fetchData = jobTitleApi()
    useEffect(()=> {
        fetchData.getting()
    }, [])
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
