import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { ListTop } from "../../../shared/ui/ListTop/ListTop";
import { ListTopName } from "../../../shared/ui/ListTop/ListTopName";
import styles from "./Positions.module.scss";
import { CreatePosition } from "../../Modals/CreatePosition/CreatePosition";
import { usePosition, useSuccess } from "../../../shared/hooks/modalHooks";
import { FC, useEffect, useState } from "react";
import { ItemInner } from "../../../shared/ui";
import { jobTitleApi } from "./api/jobTitleApi";
import { SuccessModal } from "../..";
import { Trash } from "iconsax-react";

export const Positions: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const modal = usePosition();
    const modalSuccess = useSuccess();
    const fetchData = jobTitleApi();
    useEffect(() => {
        fetchData.getting();
    }, []);
    return (
        <div className={styles.Positions}>
            <div className={styles.Name}>Поиск по должностям</div>
            <div className={styles.Input}>
                <SearchInput />
                <ButtonCreate onClick={modal.open} />
                <button
                    className={styles.Trash}
                    onClick={() => setState(!state)}
                >
                    <Trash
                        size={24}
                        color="white"
                    />
                </button>
                <button
                    className={styles.Delete}
                    onClick={() => setState(false)}
                >
                    Удалить
                </button>
            </div>
            <div
                className={styles.PositionsList}
                style={fetchData.jobTitleList.length > 9 ? { overflowY: "scroll" } : { overflowY: "hidden" }}
            >
                <div className={styles.Top}>
                    <ListTop>
                        <ListTopName
                            name="Должности"
                            width={350}
                        />
                    </ListTop>
                </div>
                <div className={styles.Inner}>
                    {fetchData.jobTitleList.map((card) => (
                        <div
                            key={card.id}
                            className={styles.Item}
                        >
                            <ItemInner
                                width={350}
                                content={card.title}
                            />
                            <input
                                style={state ? { display: "block" } : { display: "none" }}
                                type="radio"
                                name="delete"
                            />
                        </div>
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
            <Modal
                centered
                width={350}
                open={modalSuccess.isOpen}
                onCancel={modalSuccess.close}
                zIndex={11}
            >
                <SuccessModal content="Должность добавлена!" />
            </Modal>
        </div>
    );
};
