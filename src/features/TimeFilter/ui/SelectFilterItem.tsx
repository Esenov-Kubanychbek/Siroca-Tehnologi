import React, { FC, useEffect, useState } from "react";
import styles from "./SelectFilterItem.module.scss";

interface ISelectItem {
    el: {
        text: string;
        values: string[]; // Указываем тип элементов в массиве
        type: string;
        pos: number;
    };
    getSelect: (obj: { selected: string[]; type: string }) => void; // Указываем тип функции, ожидающей объект с определенными свойствами
}
export const SelectFilterItem: FC<ISelectItem> = ({ el, getSelect }) => {
    const [selects, setSelects] = useState<string[]>([]); // Указываем тип для состояния selects

    const addSelect = (e: { currentTarget: { id: string } }) => {
        const value = e.currentTarget.id; // Используем id элемента в качестве значения
        if (selects.includes(value)) {
            const filteredSelects = selects.filter((item) => item !== value);
            setSelects(filteredSelects);
        } else {
            setSelects([...selects, value]);
        }
    };

    useEffect(() => {
        console.log(selects);
    }, [selects]);

    const onUseSelects = () => {
        const obj = { selected: selects, type: el.type };
        getSelect(obj);
    };

    return (
        <div
            className={styles.FilterItem}
            style={{ left: `${el.pos}px` }}
        >
            {el.values &&
                el.values.map((elem: string | number, index) => {
                    // Проверяем, есть ли значения, прежде чем мапить
                    const displayedText = String(elem).length > 10 ? String(elem).substring(0, 10) + "..." : elem; // Преобразуем в строку перед проверкой длины
                    return (
                        <div
                            className={styles.Cont}
                            key={`${el.type}-${index}`}
                        >
                            <input
                                type="checkbox"
                                onClick={addSelect}
                                className={el.type}
                                id={`${elem}`}
                            />
                            <label
                                htmlFor={String(elem)}
                                onClick={addSelect}
                                className={el.type}
                            >
                                {displayedText}
                            </label>
                        </div>
                    );
                })}
            <button
                className={styles.add}
                onClick={onUseSelects}
            >
                Применить
            </button>
        </div>
    );
};
