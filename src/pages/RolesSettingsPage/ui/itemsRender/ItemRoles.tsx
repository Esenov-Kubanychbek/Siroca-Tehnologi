import { useEffect, useState } from "react";
import styles from "./ItemRoles.module.scss";
import { IUser } from "../../../../shared/types/userTypes";

// interface IUser {
//     username: string;
//     role_type: string;
// }

interface IItemSettingRoles {
    user: IUser;
    index: number;
    checkBoxList: string[];
    getBoxes: (e: IUser) => void;
    inBoxList: IUser[];
}

const ItemSettingRoles: React.FC<IItemSettingRoles> = ({ user, index, checkBoxList, getBoxes, inBoxList }) => {
    const [boxes, setBoxes] = useState<{ [key: string]: boolean }>({
        client_can_edit_comments_extra: false,
        client_can_get_reports_extra: false,
        client_can_view_logs_extra: false,
        client_can_add_files_extra: false,
        client_can_add_checklist_extra: false,
        client_can_view_profiles_extra: false,
    });

    //just change select val to an or neg value
    const getCheckBoxVal = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const name = Number(ev.target.name);
        const time = Object.entries(boxes);
        time[name][1] = !time[name][1];
        const preventr = Object.fromEntries(time);
        setBoxes(preventr);
    };

    //just up all selects to top if boxes is changed
    useEffect(() => {
        const updatedUser: IUser = { ...user, ...boxes };
        getBoxes(updatedUser);
    }, [boxes]);
    
    //on change box list im seting boxes to formated thing
    useEffect(() => {
        const filteredInBoxList = inBoxList.filter((el: IUser) => el.username === user.username);
        const entrTheGets = filteredInBoxList.length > 0 ? filteredInBoxList[0] : false;
        const fmTheGets = entrTheGets ? Object.entries(entrTheGets).slice(3) : false;
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
            {checkBoxList.map((el, index: number) => {
                //just check if this exist
                const isChecked = boxes && Object.entries(boxes)[index] ? Object.entries(boxes)[index][1] : false;
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
