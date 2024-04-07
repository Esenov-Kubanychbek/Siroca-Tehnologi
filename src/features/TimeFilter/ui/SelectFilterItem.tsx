import { FC, useEffect, useState } from "react";
import styles from "./SelectFilterItem.module.scss";

interface ISelectItem {
    el: {
        text: string;
        values: string[];
        type: string;
        pos: number;
    };
    getSelect: (obj: { selected: string[]; type: string }) => void;
}
export const SelectFilterItem: FC<ISelectItem> = ({ el, getSelect }) => {
    console.log(el);

    const [selects, setSelects] = useState<string[]>([]);

    const addSelect = (e: { currentTarget: { id: string } }) => {
        const value = e.currentTarget.id;
        if (selects.includes(value)) {
            const filteredSelects = selects.filter(item => item !== value);
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
        <div className={styles.FilterItem} style={{ left: `${el.pos}px` }}>
            <button className={styles.add} onClick={onUseSelects}>
                Применить
            </button>
            {el.values && el.values.map((elem: string | number | boolean, index) => {
                const displayedText = String(elem).length > 10 ? String(elem).substring(0, 10) + "..." : elem;
                    return (
                        <div className={styles.Cont} key={`${el.type}-${index}`}>
                            <input type="checkbox" onClick={addSelect} className={el.type} id={`${elem}`} />
                            <label htmlFor={String(elem)} onClick={addSelect} className={el.type}>
                                {displayedText}
                            </label>
                        </div>
                    );
            })}
        </div>
    );
};
