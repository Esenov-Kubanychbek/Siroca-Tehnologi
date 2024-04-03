import { TabsProps } from "antd";
import { RequestList } from "../../widgets";
import { ConfigProvider, Tabs } from "antd";
import { FC, useEffect, useState } from "react";
import styles from './TimeFilter.module.scss'
import { getRequestApi } from "../../widgets/RequestList/api/getRequestApi";
import { ArrowLeft2 } from "iconsax-react";
import { SelectFilterItem } from "./ui/SelectFilterItem";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";

export const TimeFilter: FC<{ role: string, isFilter: boolean }> = ({ role, isFilter }) => {
    const fetchRequest = getRequestApi();
    useEffect(() => {
        fetchRequest.getting();
    }, []);
    const [filterItems, setFilterItems] = useState([
        { text: "Номер", type: "task_number", isOpen: false, values: [String], pos: 40, selected: [] },
        { text: "Компания", type: "company", isOpen: false, values: [String], pos: 180, selected: [] },
        { text: "Название", type: "title", isOpen: false, values: [String], pos: 346, selected: [] },
        { text: "Описание", type: "description", isOpen: false, values: [String], pos: 508, selected: [] },
        { text: "Заявитель", type: "main_client", isOpen: false, values: [String], pos: 680, selected: [] },
        { text: "Менеджер", type: "main_manager", isOpen: false, values: [String], pos: 850, selected: [] },
        { text: "Дата завершения", type: "finish_date", isOpen: false, values: [String], pos: 1, selected: [] },
        { text: "Дата начала", type: "start_date", isOpen: false, values: [String], pos: 1, selected: [] },
        { text: "Приоритет", type: "priority", isOpen: false, values: [String], pos: 1404, selected: [] },
        { text: "Статус", type: "status", isOpen: false, values: [String], pos: 1543, selected: [] },
    ]);

    const reqsFilter = fetchRequest.getState;
    const beetwinSelcetsVal = () => {
        const timeState = [...filterItems];
        timeState.forEach((el) => {
            const vals = reqsFilter.map((elem) => {
                const id = el.type;
                return elem[id];
            });
            el.values = vals;
        });
        setFilterItems(timeState);
    };
    useEffect(() => {
        beetwinSelcetsVal();
    }, [fetchRequest.getState]);

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Всё время",
            children: (
                <RequestList
                    role={role}
                    api={fetchRequest.getState}
                />
            ),
        },
        {
            key: "2",
            label: "Неделя",
            children: (
                <RequestList
                    role={role}
                    api={fetchRequest.getState}
                />
            ),
        },
        {
            key: "3",
            label: "Месяц",
            children: (
                <RequestList
                    role={role}
                    api={fetchRequest.getState}
                />
            ),
        },
    ];

    const closeAllSelect = () => {
        setFilterItems((prevFilterItems) =>
            prevFilterItems.map((el) =>
                el.text ? { ...el, isOpen: false } : null
            )
        );
    };

    const openDropDown = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterItems((prevFilterItems) =>
            prevFilterItems.map((el) =>
                el.text === e.target.id ? { ...el, isOpen: !el.isOpen } : { ...el, isOpen: false }
            )
        );
    };

    const getSelect = async (e: { type: string; selects: string[] }) => {
        try {
            setFilterItems((prevFilterItems) =>
                prevFilterItems.map((el) =>
                    el.type === e.type ? { ...el, selected: e.selects } : { ...el, selected: el.selected }
                )
            );
            closeAllSelect();
            const response = await axios.get(`${BASE_URL}/applications/form/?${e.type}=${e.selects[0]}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const delSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterItems((prevFilterItems) =>
            prevFilterItems.map((el) =>
                el.type === e.target.id ? { ...el, selected: el.selected.filter((el) => { el !== e.target.className }) } : { ...el, selected: el.selected }
            )
        );
    };

    return (
        <div>
            {isFilter ? (
                <div className={styles.DetailFilters}>
                    <ul>
                        {filterItems.map((el) => {
                            const displayedText = el.text.length > 10 ? el.text.substring(0, 10) + "..." : el.text;
                            return (
                                <div key={el.text} className={el.isOpen ? styles.ItemOpen : styles.Item}>
                                    {el.isOpen ? (
                                        <>
                                            <input className={styles.SelInput} type="text" />
                                            <div className={styles.Icn} onClick={openDropDown}>
                                                <ArrowLeft2 id={el.text} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {el.selected[0] ? (
                                                el.selected.map((elem) => ( // замените el на elem
                                                    <div className={styles.selectedItem} key={elem}>
                                                        <p>{elem.length > 5 ? elem.substring(0, 5) + "..." : elem}</p>
                                                        <p onClick={delSelect} id={el.type} className={elem} style={{ fontSize: '25px', color: "red" }}>x</p>
                                                    </div>
                                                ))
                                            ) : (
                                                [
                                                    <p key={el.text}>{displayedText}</p>,
                                                    <div key={`${el.text}-icon`} className={styles.Icn} onClick={openDropDown}>
                                                        <ArrowLeft2 id={el.text} />
                                                    </div>
                                                ]
                                            )}
                                        </>
                                    )}
                                    {el.isOpen && <SelectFilterItem getSelect={getSelect} el={el} />}
                                </div>
                            );
                        })}
                    </ul>
                </div>
            ) : null}


            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            inkBarColor: "#1C6AD2",
                            itemColor: "#252525",
                            itemHoverColor: "#1C6AD2",
                            itemSelectedColor: "#1C6AB1",
                            fontFamily: "Geologica",
                            fontSize: 20,
                            margin: isFilter ? 56 : 10
                        },
                    },
                }}
            >
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    tabBarStyle={{
                        padding: "24px",
                        width: "1764px",
                        fontWeight: 700,
                        backgroundColor: "white",
                    }}
                />
            </ConfigProvider>
        </div>
    );
};
