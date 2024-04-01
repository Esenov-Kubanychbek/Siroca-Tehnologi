import { useEffect, useState } from "react";
import styles from "./ItemRoles.module.scss";

interface IItemSettingRoles {
    user: object;
    index: number;
    checkBoxList: object;
    getBoxes: (e: object) => void;
    inBoxList: [];
}

const ItemSettingRoles: React.FC<IItemSettingRoles> = ({ user, index, checkBoxList, getBoxes, inBoxList }) => {
    const [boxes, setBoxes] = useState({
        "client_can_edit_comments": false,
        "client_can_get_reports": false,
        "client_can_view_logs": false,
        "client_can_add_files": false,
        "client_can_add_checklist": false,
        "client_can_view_profiles": false
    })


    const getCheckBoxVal = (ev) => {
        const name = ev.target.name;
        const entrBoxes = Object.entries(boxes)
        entrBoxes.map((el, index) => {
            if (index == name) {
                if (entrBoxes[index][1] == false) {
                    entrBoxes[index][1] = true
                    const newBoxes = Object.fromEntries(entrBoxes)
                    setBoxes(newBoxes)
                } else if (entrBoxes[index][1] == true) {
                    entrBoxes[index][1] = false
                    const newBoxes = Object.fromEntries(entrBoxes)
                    setBoxes(newBoxes)
                }
            }
        })
    };
    useEffect(() => {
        const tst = Object.entries(boxes)
        tst.push(["username", user.username])
        tst.push(["role_type", user.role_type])
        getBoxes(Object.fromEntries(tst))
    }, [boxes])
    const tst = () => {
        const filteredInBoxList = inBoxList.filter((el) => {
            if (el.username === user.username) {
                return el
            }
        })
        const entrTheGets = filteredInBoxList ? filteredInBoxList[0] : null
        const fmTheGets = entrTheGets ? Object.entries(entrTheGets).slice(3) : null
        const finishGets = fmTheGets ? Object.fromEntries(fmTheGets) : boxes
        setBoxes(finishGets)
    }
    useEffect(() => {
          tst()  
    }, [inBoxList])


    return (
        <div className={styles.Item}>
            <div className={styles.num}>
                <p>{index + 1}</p>
            </div>
            <div className={styles.name}>
                <p>{user ? user.username : []}</p>
            </div>
            {checkBoxList[0].map((el, index) => {
                const isChecked = boxes ? Object.entries(boxes)[index][1] : false
                return (
                    <div className={styles.el}>
                        <input
                            type="checkbox"
                            onChange={getCheckBoxVal}
                            name={index}
                        checked={isChecked}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemSettingRoles;
