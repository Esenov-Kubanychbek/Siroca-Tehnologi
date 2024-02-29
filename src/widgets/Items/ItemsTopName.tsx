import styles from "./Items.module.scss";

interface ITopname {
   name: string;
}

export const ItemsTopName: React.FC<ITopname> = ({ name }) => {
   return <div className={styles.ItemsTopName}>{name}</div>;
};
