import styles from "./Dashboard.module.scss";

interface IButtonProps {
   src: string;
}

const DashboardButton: React.FC<IButtonProps> = ({ src }) => {
   return (
      <div className={styles.DashboardButton}>
         <img
            alt="button"
            src={src}
         />
      </div>
   );
};

export default DashboardButton;
