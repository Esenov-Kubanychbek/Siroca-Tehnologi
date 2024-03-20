import React from "react";
import styles from "./RolesList.module.scss";

interface IRolesList {
    list: object;
    listType: string;
    handleChangeBox: () => void;
}


const RolesList: React.FC<IRolesList> = ({ list, listType, handleChangeBox }) => {
    const onChange = (ev) => {
        handleChangeBox([listType, ev])
    }
    return (
        <div className={styles.MenuCont}>
            <div className={styles.HeaderPrg}>
                <p>{listType}</p>
            </div>
            {list.map((el) => {
                return (
                    <div className={styles.ListItem}>
                        <input type="checkbox" name={el} onChange={onChange} /> <p>{el}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default RolesList;
