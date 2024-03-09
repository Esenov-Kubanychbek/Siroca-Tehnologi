import styles from "./RequestList.module.scss";

interface ITopname {
   name: string;
}

export const RequestTopName: React.FC<ITopname> = ({ name }) => {
   return <div className={styles.RequestTopName}>{name}</div>;
};
