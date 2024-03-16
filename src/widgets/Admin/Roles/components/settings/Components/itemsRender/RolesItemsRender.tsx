import ItemSettingRoles from "./ItemRoles";
import styles from "./RolesItemsRender.module.scss";

interface IRolesRender {
    list: object;
}

const RolesRender: React.FC<IRolesRender> = ({ list }) => {
    return (
        <div className={styles.Container}>
            {list.map((el, index) => {
                return (
                    <ItemSettingRoles
                        el={el}
                        index={index}
                        name="Иван Иванов"
                    />
                );
            })}
        </div>
    );
};

export default RolesRender;
