import styles from "./ListContainer.module.scss";

interface ITopname {
   name: string;
}

export const ListTopName: React.FC<ITopname> = ({ name }) => {
   return <div className={styles.ListTopName}>{name}</div>;
};
