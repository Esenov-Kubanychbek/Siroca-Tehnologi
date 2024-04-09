import { TabsProps } from "antd";
import { RequestList } from "../../widgets";
import { ConfigProvider, Tabs } from "antd";
import { FC, useEffect, useState } from "react";
import styles from "./TimeFilter.module.scss";
import { getRequestApi } from "../../widgets/RequestList/api/getRequestApi";
import { ArrowLeft2, CloseSquare } from "iconsax-react";
import { SelectFilterItem } from "./ui/SelectFilterItem";
import axios from "axios";
import { BASE_URL } from "../../shared/variables/variables";
import { AnyObject } from "antd/es/_util/type";
import { EllipsisOutlined } from "@ant-design/icons";

interface FilterItem {
    selected: string[];
    text: string;
    type: string;
    isOpen: boolean;
    values: StringConstructor[];
    pos: number;
}
export const TimeFilter: FC<{ role: string; isFilter: boolean }> = ({ role, isFilter }) => {
    const fetchRequest = getRequestApi();
    const [filterItems, setFilterItems] = useState<FilterItem[]>([
        { text: "Номер", type: "task_number", isOpen: false, values: [String], pos: 0, selected: [] },
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
    const [isMounted, setIsMounted] = useState<boolean>(false);
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
    const reqsFilter = fetchRequest.filterState;
    const fullFilterState = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=${fetchRequest.now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            fetchRequest.setFilterState(response.data.results.results);
        } catch (error) {
            console.log(error);
        }
    };

    const beetwinSelcetsVal = () => {
        fullFilterState();
        const timeState = [...filterItems];
        timeState.forEach((el: FilterItem) => {
            const vals = reqsFilter.map((elem: AnyObject) => {
                const id = el.type;
                return elem[id];
            });
            el.values = vals;
        });
        setFilterItems(timeState);
    };
    useEffect(() => {
        beetwinSelcetsVal();
    }, []);

    const closeAllSelect = () => {
        setIsMounted(false);
        setFilterItems((prevFilterItems: AnyObject) =>
            prevFilterItems.map((el: FilterItem) => (el.text ? { ...el, isOpen: false } : null)),
        );
    };

    const openDropDown = (e: AnyObject) => {
        beetwinSelcetsVal();
        setFilterItems((prevFilterItems) =>
            prevFilterItems.map((el) =>
                el.text === e.target.id ? { ...el, isOpen: !el.isOpen } : { ...el, isOpen: false },
            ),
        );
    };

    const updateFilterItems = (newFilterItem: { type: string; selected: string[] }) => {
        setFilterItems((prevFilterItems: FilterItem[]) => {
            // Проверяем, есть ли уже элемент с таким типом в массиве
            const existingItemIndex = prevFilterItems.findIndex((item) => item.type === newFilterItem.type);

            if (existingItemIndex !== -1) {
                return prevFilterItems.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, selected: [...item.selected, ...newFilterItem.selected] };
                    }
                    return item;
                });
            } else {
                // Если элемента с таким типом еще нет, добавляем его в массив
                return [...prevFilterItems, newFilterItem];
            }
        });
    };

    //получение выбранных селектов из селект фильтер
    const getSelect = async (e: { type: string; selected: string[] }) => {
        try {
            closeAllSelect();
            setIsMounted(true);
            console.log(filterItems);
            updateFilterItems({ type: e.type, selected: e.selected });
        } catch (error) {
            console.log(error);
        }
    };

    const upSelects = async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/applications/form/?task_number=${
                    filterItems[0].selected[0]
                        ? filterItems[0].selected.map((el) => {
                              return `${el}`;
                          })
                        : ""
                }${filterItems
                    .map((el) => {
                        return el.type === "task_number"
                            ? ""
                            : el.selected[0]
                              ? `&${el.type}=${
                                    el.selected[0]
                                        ? el.selected.map((el) => {
                                              return `${el}`;
                                          })
                                        : ""
                                }`
                              : "";
                    })
                    .join("")}`,
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`,
                    },
                },
            );
            console.log(response);
            fetchRequest.setState(response.data.results.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isMounted) {
            upSelects();
        }
    }, [filterItems, isMounted]);

    const clearFilter = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=1`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            fetchRequest.setState(response.data.results.results);
            fetchRequest.setFilterState(response.data.results.results);
            const timeState = [...filterItems];
            timeState.map((el: FilterItem) => {
                el.selected = [];
            });
            console.log(timeState);
            setFilterItems(timeState);
            setIsMounted(false);
        } catch (error) {
            console.log(error);
        }
    };

    const delSelect = (e: { target: { id: string; className: string } }) => {
        clearFilter();
        setFilterItems((prevFilterItems) =>
            prevFilterItems.map((el) =>
                el.type === e.target.id
                    ? {
                          ...el,
                          selected: el.selected.filter((el) => {
                              el !== e.target.className;
                          }),
                      }
                    : { ...el, selected: el.selected },
            ),
        );
    };

    return (
        <div>
            {isFilter ? (
                <div className={styles.DetailFilters}>
                    <ul>
                        {filterItems.map(
                            (el: {
                                text: string;
                                isOpen: boolean;
                                selected: string[];
                                type: string;
                                values: StringConstructor[];
                                pos: number;
                            }) => {
                                const displayedText = el.text.length > 10 ? el.text.substring(0, 10) + "..." : el.text;
                                return (
                                    <div
                                        key={el.text}
                                        className={el.isOpen ? styles.ItemOpen : styles.Item}
                                    >
                                        {el.isOpen ? (
                                            <>
                                                <input
                                                    className={styles.SelInput}
                                                    type="text"
                                                />
                                                <div
                                                    className={styles.Icn}
                                                    onClick={openDropDown}
                                                >
                                                    <ArrowLeft2 id={el.text} />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <p key={el.text}>{displayedText}</p>
                                                <div
                                                    key={`${el.text}-icon`}
                                                    className={styles.Icn}
                                                    onClick={openDropDown}
                                                >
                                                    <ArrowLeft2 id={el.text} />
                                                </div>
                                            </>
                                        )}

                                        {el.isOpen && (
                                            <SelectFilterItem
                                                getSelect={getSelect}
                                                el={el}
                                            />
                                        )}
                                    </div>
                                );
                            },
                        )}
                    </ul>
                    <div className={styles.selected}>
                        {filterItems
                            ? filterItems.map((el) => {
                                  return el.selected.map((elim) => {
                                      return (
                                          <div
                                              className={styles.selectedItem}
                                              key={elim}
                                          >
                                              <EllipsisOutlined />
                                              <p>{elim.length > 5 ? elim.substring(0, 8) + "..." : elim}</p>
                                              <div
                                                  onClick={delSelect}
                                                  id={el.type}
                                                  className={`${elim}`}
                                              >
                                                  <CloseSquare
                                                      size={16}
                                                      id={el.type}
                                                      className={`${elim}`}
                                                  />
                                              </div>
                                          </div>
                                      );
                                  });
                              })
                            : null}
                        {isMounted ? <button onClick={clearFilter}>Clear</button> : null}
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
                            margin: isFilter ? (isMounted ? 100 : 70) : 10,
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
