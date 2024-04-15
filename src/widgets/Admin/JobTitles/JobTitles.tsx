import styles from "./JobTitles.module.scss";
import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { ListTop } from "../../../shared/ui/ListTop/ListTop";
import { ListTopName } from "../../../shared/ui/ListTop/ListTopName";
import { useSuccess } from "../../../shared/hooks/modalHooks";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { ItemInner } from "../../../shared/ui";
import { jobTitleApi } from "./api/jobTitleApi";
import { ReadyModal, SuccessModal } from "../..";
import { Trash } from "iconsax-react";
import { CreateJobTitle } from "../..";

export const JobTitles: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const [position, setPosition] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    const [modalReady, setModalReady] = useState<boolean>(false)
    const modalSuccess = useSuccess();
    const fetchData = jobTitleApi();
    const handleClick = () => {
        setState(!state);
        setPosition(0);
    };
    useEffect(() => {
        fetchData.getJobTitleList();
    }, []);
    return (
        <>
            <div className={styles.JobTitles}>
                <div className={styles.Name}>Поиск по должностям</div>
                <div className={styles.Input}>
                    <SearchInput />
                    <ButtonCreate onClick={() => setModal(true)} />
                    <button
                        className={styles.Trash}
                        onClick={handleClick}
                    >
                        <Trash color="white" />
                    </button>
                    <button
                        className={styles.Delete}
                        onClick={()=> setModalReady(true)}
                        style={
                            position > 0
                                ? { color: "#e51616" }
                                : { color: "#a8a8a8" } && state
                                  ? { display: "block" }
                                  : { display: "none" }
                        }
                    >
                        Удалить
                    </button>
                    <button
                        className={styles.Cancel}
                        onClick={() => setState(!state)}
                        style={state ? { display: "block" } : { display: "none" }}
                    >
                        Отменить
                    </button>
                </div>
                <div className={styles.JobTitlesList}>
                    <div className={styles.Top}>
                        <ListTop>
                            <ListTopName
                                name="Должности"
                                width={422}
                            />
                        </ListTop>
                    </div>
                    <div
                        className={styles.Inner}
                        style={fetchData.jobTitleList.length > 11 ? { overflowY: "scroll" } : { overflowY: "hidden" }}
                    >
                        {fetchData.jobTitleList.map((card, i) => (
                            <div
                                key={i}
                                className={styles.Item}
                            >
                                <ItemInner
                                    width={422}
                                    content={card.title}
                                />
                                <input
                                    style={state ? { display: "block" } : { display: "none" }}
                                    type="radio"
                                    name="delete"
                                    value={card.id}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPosition(Number(e.target.value))}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal
                centered
                width={700}
                open={modal}
                onCancel={() => setModal(false)}
                zIndex={10}
            >
                <CreateJobTitle setModal={setModal} />
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
            <Modal
                centered
                width={550}
                open={modalReady}
                onCancel={()=> setModalReady(false)}
                zIndex={12}
            >
                <ReadyModal
                    no={()=> setModalReady(false)}
                    yes={() => {
                        fetchData.deleteJobTitle(position);
                        setModalReady(false)
                    }}
                    content="Вы уверены? Данная должность удалится безвозвратно"
                />
            </Modal>
        </>
    );
};
