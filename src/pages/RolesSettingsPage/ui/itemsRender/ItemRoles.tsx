import { useEffect, useState } from "react";
import styles from "./ItemRoles.module.scss";

interface IUser {
    username: string;
    role_type: string;
}

interface IItemSettingRoles {
    user: IUser;
    index: number;
    checkBoxList: string[][];
    getBoxes: (e: IUser) => void;
    inBoxList: IUser[];
}

const ItemSettingRoles: React.FC<IItemSettingRoles> = ({ user, index, checkBoxList, getBoxes, inBoxList }) => {
    const [boxes, setBoxes] = useState<{ [key: string]: boolean }>({
        client_can_edit_comments: false,
        client_can_get_reports: false,
        client_can_view_logs: false,
        client_can_add_files: false,
        client_can_add_checklist: false,
        client_can_view_profiles: false,
    });

    const getCheckBoxVal = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const name = ev.target.name;
        setBoxes((prevBoxes) => ({
            ...prevBoxes,
            [name]: !prevBoxes[name],
        }));
    };

    useEffect(() => {
        const updatedUser: IUser = { ...user, ...boxes };
        getBoxes(updatedUser);
    }, [boxes]);

    useEffect(() => {
        const filteredInBoxList = inBoxList.filter((el: IUser) => el.username === user.username);
        const entrTheGets = filteredInBoxList.length > 0 ? filteredInBoxList[0] : null;
        const fmTheGets = entrTheGets ? Object.entries(entrTheGets).slice(2) : null;
        const finishGets = fmTheGets ? Object.fromEntries(fmTheGets) : boxes;
        setBoxes(finishGets);
    }, [inBoxList]);

    return (
        <div className={styles.Item}>
            <div className={styles.num}>
                <p>{index + 1}</p>
            </div>
            <div className={styles.name}>
                <p>{user.username}</p>
            </div>
            {checkBoxList[0].map((el, index: number) => {
                const isChecked = boxes ? Object.entries(boxes)[index][1] : false;
                return (
                    <div className={styles.el}>
                        <input
                            type="checkbox"
                            onChange={getCheckBoxVal}
                            name={`${index}`}
                            checked={isChecked}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemSettingRoles;
