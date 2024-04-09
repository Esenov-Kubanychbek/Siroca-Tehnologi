import { TabsProps } from "antd";
import { RequestList } from "../../widgets";
import { ConfigProvider, Tabs } from "antd";
import { FC, useEffect, useState } from "react";
import styles from './TimeFilter.module.scss'
import { IGetRequest, getRequestApi } from "../../widgets/RequestList/api/getRequestApi";
import { ArrowLeft2, CloseSquare } from "iconsax-react";
import { SelectFilterItem } from "./ui/SelectFilterItem";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";
import { EllipsisOutlined } from "@ant-design/icons";

interface FilterItem {
    selected: string[];
    text: string;
    type: string;
    isOpen: boolean;
    values: string[];
    pos: number;
}

interface ITimeFilter {
    role: string,
    isFilter: boolean
}
export const TimeFilter: FC<ITimeFilter> = ({ role, isFilter }) => {
    const fetchRequest = getRequestApi();
    const [filterItems, setFilterItems] = useState<FilterItem[]>([
        { text: "Номер", type: "task_number", isOpen: false, values: [], pos: 0, selected: [] },
        { text: "Компания", type: "company", isOpen: false, values: [], pos: 120, selected: [] },
        { text: "Название", type: "title", isOpen: false, values: [], pos: 265, selected: [] },
        { text: "Описание", type: "description", isOpen: false, values: [], pos: 408, selected: [] },
        { text: "Заявитель", type: "main_client", isOpen: false, values: [], pos: 554, selected: [] },
        { text: "Менеджер", type: "main_manager", isOpen: false, values: [], pos: 705, selected: [] },
        { text: "Дата завершения", type: "finish_date", isOpen: false, values: [], pos: 867, selected: [] },
        { text: "Дата начала", type: "start_date", isOpen: false, values: [], pos: 1039, selected: [] },
        { text: "Приоритет", type: "priority", isOpen: false, values: [], pos: 1196, selected: [] },
        { text: "Статус", type: "status", isOpen: false, values: [], pos: 1320, selected: [] },
    ]);
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Всё время",
            children: (
                <RequestList
                    role={role}
                    api={'all_time=1'}
                />
            ),
        },
        {
            key: "2",
            label: "Неделя",
            children: (
                <RequestList
                    role={role}
                    api={'week=0'}
                />
            ),
        },
        {
            key: "3",
            label: "Месяц",
            children: (
                <RequestList
                    role={role}
                    api={'month=1'}
                />
            ),
        },
    ];
    const reqsFilter = fetchRequest.filterState//здесь я беру состояние айтемов в фильтере

    //Здесь я возврощяю состояние фильтров на исходное состояние
    const fullFilterState = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${fetchRequest.now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            })
            fetchRequest.setFilterState(response.data.results.results)
        } catch (error) {
            console.log(error);

        }
    }


    const beetwinSelcetsVal = () => {
        fullFilterState()
        const timeState = [...filterItems];
        timeState.forEach((el: FilterItem) => {
            const vals = reqsFilter.map((elem: IGetRequest) => {
                const id = el.type;
                return String(elem[id]); // Преобразуем значение в строку
            });
            el.values = vals;
        });
        setFilterItems(timeState);
    };
    useEffect(() => {
        beetwinSelcetsVal();
    }, []);


    const closeAllSelect = (): void => {
        setIsMounted(false);
        setFilterItems((prevFilterItems: FilterItem[]) =>
            prevFilterItems.map((el: FilterItem) =>
                el.text ? { ...el, isOpen: false } : el
            )
        );
    };

    const openDropDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        beetwinSelcetsVal();
        const targetId = (e.target as HTMLDivElement)?.id; // Проверяем, что e.target является HTMLDivElement и имеет свойство id
        if (targetId) {
            setFilterItems((prevFilterItems: FilterItem[]) =>
                prevFilterItems.map((el: FilterItem) =>
                    el.text === targetId ? { ...el, isOpen: !el.isOpen } : { ...el, isOpen: false }
                )
            );
        }
    };

    const updateFilterItems = (newFilterItem: FilterItem) => {
        setFilterItems((prevFilterItems: FilterItem[]) => {
            const existingItemIndex = prevFilterItems.findIndex(item => item.type === newFilterItem.type);

            if (existingItemIndex !== -1) {
                return prevFilterItems.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, selected: [...item.selected, ...newFilterItem.selected] };
                    }
                    return item;
                });
            } else {
                return [...prevFilterItems, newFilterItem];
            }
        });
    };

    const getSelect = async (e: { type: string; selected: string[] }) => {
        try {
            closeAllSelect();
            setIsMounted(true)
            updateFilterItems({ type: e.type, selected: e.selected, pos: 1, isOpen: true, values: [], text: "" })
        } catch (error) {
            console.log(error);
        }
    };
    const onChangeDate = async(e: {target: {value: string, id: string}}) => {
        try {
            console.log(e.target.value);
            
            const newSelect = {selected: [e.target.value], type: e.target.id}
            getSelect(newSelect)
        } catch (error) {
            console.log(error);
        }
    }

    const upSelects = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?${filterItems[0].selected[0] ? 'task_number=' : ''}${filterItems[0].selected[0] ? filterItems[0].selected.map((el) => { return `${el}` }) : ''}${filterItems.map((el) => { return el.type === 'task_number' ? '' : el.selected[0] ? `&${el.type}=${el.selected[0] ? el.selected.map((el) => { return `${el}` }) : ''}` : '' }).join('')}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            });
            console.log(response);
            fetchRequest.setState(response.data.results.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isMounted) {
            upSelects()
        }
    }, [filterItems, isMounted]);

    const clearFilter = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=1`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            })
            fetchRequest.setState(response.data.results.results)
            fetchRequest.setFilterState(response.data.results.results)
            const timeState = [...filterItems]
            timeState.map((el: FilterItem) => {
                el.selected = []
            })
            console.log(timeState);
            setFilterItems(timeState)
            setIsMounted(false)
        } catch (error) {
            console.log(error);
        }
    }

    const delSelect = (e: { target: { id: string, className: string } }) => {
        clearFilter()
        setFilterItems((prevFilterItems: FilterItem[]) =>
            prevFilterItems.map((el: FilterItem) =>
                el.type === e.target.id ? { ...el, selected: el.selected.filter((el) => { el !== e.target.className }) } : { ...el, selected: el.selected }
            )
        );
    };
    return (
        <div>
            {isFilter ? (
                <div className={styles.DetailFilters}>
                    <ul>
                        {filterItems.map((el: FilterItem) => {
                            const displayedText = el.text.length > 10 ? el.text.substring(0, 10) + "..." : el.text;
                            if (el.type === "finish_date" || el.type === "start_date") {
                                return (
                                    <>
                                        <input className={styles.date} type="date" id={el.type} onChange={(e) => onChangeDate(e)}/>
                                    </>
                                )
                            } else {
                                return (
                                    <div key={el.text} className={el.isOpen ? styles.ItemOpen : styles.Item}>
                                        {el.isOpen ? (
                                            <>
                                                <input className={styles.SelInput} value={displayedText} type="text" />
                                                <div className={styles.Icn} style={el.isOpen ? {transform: "rotate(90deg)"} : undefined} id={el.text} onClick={(e) => openDropDown(e)}>
                                                    <ArrowLeft2 id={el.text} />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <p key={el.text}>{displayedText}</p>
                                                <div key={`${el.text}-icon`} id={el.text} className={styles.Icn} onClick={(e) => openDropDown(e)}>
                                                    <ArrowLeft2 id={el.text} />
                                                </div>
                                            </>
                                        )}

                                        {el.isOpen && <SelectFilterItem getSelect={getSelect} el={el} />}
                                    </div>
                                );
                            }

                        })}
                        <button className={styles.Clear} onClick={clearFilter}>Сбросить фильтр</button>
                    </ul>
                    <div className={styles.selected}>

                        {filterItems ?
                            filterItems.map((el) => {
                                return el.selected.map((elim) => {
                                    return (
                                        <div className={styles.selectedItem} key={elim}>
                                            <EllipsisOutlined />
                                            <p>{elim.length > 5 ? elim.substring(0, 8) + "..." : elim}</p>
                                            <div onClick={() => delSelect({ target: { id: el.type, className: `${elim}` } })} id={el.type} className={`${elim}`}>
                                                <CloseSquare size={16} id={el.type} className={`${elim}`} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            )
                            : null}

                    </div>

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
                            margin: isFilter ? isMounted ? 100 : 70 : 10
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