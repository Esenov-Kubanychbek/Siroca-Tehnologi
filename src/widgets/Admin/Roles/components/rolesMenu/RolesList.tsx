import React, { useEffect, useState } from "react";
import styles from "./RolesList.module.scss";

interface IRolesList {
    list: string[];
    listType: string;
    handleChangeBox: (e) => void;
    box: object
}

const RolesList: React.FC<IRolesList> = ({ list, listType, handleChangeBox, box }) => {
    const onChange = (e) => {
        handleChangeBox([listType, e]);
    };
    return (
        <div className={styles.MenuCont}>
            <div className={styles.HeaderPrg}>
                <p>{listType}</p>
            </div>

            {list.map((el, index) => {
                const check = box ? Object.entries(box)[index][1] : false
                const name = box ? Object.entries(box)[index][0] : null
                return (
                    <div className={styles.ListItem}>
                        <input
                            type="checkbox"
                            onChange={onChange}
                            name={name}
                            checked={check}
                            id={index}
                        />{" "}
                        <p>{el}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default RolesList;
