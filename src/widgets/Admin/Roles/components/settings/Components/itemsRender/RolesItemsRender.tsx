import { useState } from "react";
import ItemSettingRoles from "./ItemRoles";
import styles from "./RolesItemsRender.module.scss";

interface IRolesRender {
    list: object;
    users: object
}

const RolesRender: React.FC<IRolesRender> = ({ list, users }) => {
    const filteredUsers = users.filter((el) =>
        el.role_type === "client" || el.role_type === "maneger"
    )

    return (
        <div className={styles.Container}>{
            filteredUsers.map((el, index) => {
                return (
                    <ItemSettingRoles
                        user={el}
                        checkBoxList={list}
                        index={index}
                    />
                );

            })}
        </div>

    );
};

export default RolesRender;
