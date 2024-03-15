import React from "react";
import styles from "./RolesList.module.scss";

interface IRolesList {
    list: object;
    listType: string;
}

const RolesList: React.FC<IRolesList> = ({ list, listType }) => {
    return (
        <div className={styles.MenuCont}>
            <div className={styles.HeaderPrg}>
                <p>{listType}</p>
            </div>
            {/* <div className={styles.RenderCont}> */}
            {list.map((el) => {
                return (
                    <div className={styles.ListItem}>
                        <input type="checkbox" /> <p>{el}</p>
                    </div>
                );
            })}
            {/* </div> */}
        </div>
    );
};

export default RolesList;
