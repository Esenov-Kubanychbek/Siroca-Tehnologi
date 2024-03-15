import styles from "./HeaderSettings.module.scss";

interface IHeaderSettings {
    list: object;
    name: string;
}

const HeaderSettings: React.FC<IHeaderSettings> = ({ list, name }) => {
    return (
        <div className={styles.HeaderSettings}>
            <div className={styles.HeaderNum}>
                <p className={styles.num}>№</p>
            </div>
            <div className={styles.HeaderName}>
                <p className={styles.name}>{name}</p>
            </div>
            {list.map((el) => {
                return (
                    <div className={styles.HeaderItem}>
                        <p>{el}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default HeaderSettings;
