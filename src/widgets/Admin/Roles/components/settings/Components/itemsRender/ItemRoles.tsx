import { CheckBox } from "../../../../../../../shared/ui";
import styles from "./ItemRoles.module.scss";

interface IItemSettingRoles {
    el: object;
    index: number;
    name: string;
}

const ItemSettingRoles: React.FC<IItemSettingRoles> = ({ el, index, name }) => {
    return (
        <div className={styles.Item}>
            <div className={styles.num}>
                <p>{index + 1}</p>
            </div>
            <div className={styles.name}>
                <p>{name}</p>
            </div>
            {el.map(() => {
                return (
                    <div className={styles.el}>
                        <input type="checkbox" />
                        {/* <CheckBox/> */}
                    </div>
                );
            })}
        </div>
    );
};

export default ItemSettingRoles;
