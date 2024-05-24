import styles from "./JobTitles.module.scss";
import { Trash } from "iconsax-react";
import { SearchInput } from "@/features";
import { jobTitleApi } from "./api/jobTitleApi";
import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { ButtonCreate, ListTop, ListTopName, ItemInner } from "@/shared/ui";
import { JobTitleModals } from "./ui/JobTitleModals";

export const JobTitles: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [position, setPosition] = useState<number>(0);
    const [inputState, setInputState] = useState<string>("");
    const [modalReady, setModalReady] = useState<boolean>(false);
    const [closeState, setCloseState] = useState<boolean>(false);
    const { jobTitleList, setSearchList, searchList, getJobTitleList } = jobTitleApi();
    useEffect(() => {
        getJobTitleList();
    }, []);
    const handleClick = () => {
        setState(!state);
        setPosition(0);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputState(e.target.value);
        setCloseState(true);
    };
    const search = () => {
        const results = jobTitleList.filter((item) => item.title.includes(inputState));
        setSearchList(results);
    };
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            search();
        }
    };
    const closeFunc = () => {
        setCloseState(false);
        setInputState("");
        setSearchList(jobTitleList);
    };
    return (
        <>
            <div className={styles.JobTitles}>
                <div className={styles.Name}>Поиск по должностям</div>
                <div className={styles.Input}>
                    <SearchInput
                        value={inputState}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        closeState={closeState}
                        closeFunc={closeFunc}
                    />
                    <ButtonCreate onClick={() => setModal(true)} />
                    <button
                        className={styles.Trash}
                        onClick={handleClick}
                    >
                        <Trash color="white" />
                    </button>
                    <button
                        className={styles.Delete}
                        onClick={() => position > 0 && setModalReady(true)}
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
                        onClick={handleClick}
                        style={{ display: state ? "block" : "none" }}
                    >
                        Отменить
                    </button>
                </div>
                <div className={styles.JobTitlesList}>
                    <div className={styles.Top}>
                        <ListTop width={422}>
                            <ListTopName
                                name="Должности"
                                width={422}
                            />
                        </ListTop>
                    </div>
                    <div
                        className={styles.Inner}
                        style={{ overflowY: jobTitleList.length > 11 ? "scroll" : "hidden" }}
                    >
                        {searchList.length > 0 ? (
                            searchList.map((card, i) => (
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
                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                            setPosition(Number(e.target.value))
                                        }
                                    />
                                </div>
                            ))
                        ) : (
                            <div className={styles.Nothing}>По вашему запросу ничего не найдено!</div>
                        )}
                    </div>
                </div>
            </div>
            <JobTitleModals
                position={position}
                modal={modal}
                setModal={setModal}
                modalReady={modalReady}
                setModalReady={setModalReady}
            />
        </>
    );
};
